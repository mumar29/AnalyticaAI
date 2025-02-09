import os
import re
from groq import RateLimitError
import nest_asyncio
import streamlit as st
from supabase import create_client, Client
from pydantic_ai import Agent
from pydantic_ai.models.groq import ModelRequest, ModelResponse, UserPromptPart, SystemPromptPart, TextPart
import tiktoken
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

nest_asyncio.apply()

# Read from .env
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Use a valid encoding name
encoding = tiktoken.get_encoding("cl100k_base")

# Create an agent using Groq
agent = Agent(
    'groq:llama-3.3-70b-versatile',
    system_prompt='You are a helpful assistant',
)

st.set_page_config(page_title="Analytica AI", page_icon="🤖")
st.title("Chat with Analytica AI")

def create_or_get_conversation(user_id):
    """Retrieve the existing conversation ID and summary, or create a new conversation."""
    # Check if the user has an existing conversation
    response = supabase.table("conversations") \
        .select("id, summary") \
        .eq("user_id", user_id) \
        .execute()

    if response.data:
        return response.data[0]["id"], response.data[0]["summary"]  # Return both ID & summary
    
    # If no existing conversation, create a new one
    response = supabase.table("conversations").insert(
        {"user_id": user_id}
    ).execute()

    return response.data[0]["id"], None  # No summary initially

def update_conversation_summary(user_id, summary):
    """Update the summary of a conversation for a given user."""
    supabase.table("conversations").update(
        {"summary": summary}
    ).eq("user_id", user_id).execute()


def save_message(conversation_id, role, content):
    supabase.table("messages").insert({
        "conversation_id": conversation_id,
        "role": role,
        "content": content
    }).execute()

def get_summary_model(summary):
    """Create a ModelRequest for the system summary."""
    return ModelRequest(
        parts=[
            SystemPromptPart(
                content=summary, 
                part_kind='system-prompt'
            )
        ],
        kind="request"
    )

def get_conversation_messages(conversation_id):
    response = supabase.table("messages") \
        .select("role", "content", "created_at") \
        .eq("conversation_id", conversation_id) \
        .order("created_at") \
        .execute()

    if not response.data:
        return []

    message_history = []
    for msg in response.data:
        if msg["role"] == "User":
            message_history.append(ModelRequest(parts=[UserPromptPart(content=msg["content"], timestamp=datetime.fromisoformat(msg["created_at"]), part_kind='user-prompt')], kind="request"))
        else:
            message_history.append(ModelResponse(parts=[TextPart(content=msg["content"], part_kind='text')], timestamp=datetime.fromisoformat(msg["created_at"]), kind="response"))

    return message_history

user_id = "u_1"

conversation_id, summary = create_or_get_conversation(user_id)

# Get or create conversation ID
if "conversation_id" not in st.session_state:
    st.session_state.conversation_id = conversation_id

# Load previous messages if not already loaded
if "message_history" not in st.session_state:
    st.session_state.message_history = get_conversation_messages(st.session_state.conversation_id)

if 'agent_messages' not in st.session_state:
    st.session_state.agent_messages = get_summary_model(summary) if summary else list(st.session_state.message_history)


def run_agent(prompt, message_history=None):
    try:
        result = agent.run_sync(prompt, message_history=message_history)
        return result
    except RateLimitError as e:
        # Try to extract the retry wait time from the error message using a regex
        wait_time = None
        try:
            # Assuming the error message contains something like:
            error_message = e.args[0] if e.args else ""
            # Look for a pattern like: "in 45m37s"
            match = re.search(r"in ([\dhms\.\s]+)", error_message)
            if match:
                wait_time = match.group(1).strip()
        except Exception:
            pass

        message = (f"Rate limit reached. Please try again in {wait_time}."
                   if wait_time else "Rate limit reached. Please try again later.")
        st.error(message)
        # You might also want to log the error to the console:
        print("RateLimitError:", e)
        return None
    except Exception as e:
        st.error("An unexpected error occurred. Please try again later.")
        print("Unexpected error:", e)
        return None

# Display all previous messages
for message in st.session_state.message_history:
    if isinstance(message, ModelRequest):
        with st.chat_message("user"):
            for part in message.parts:
                if isinstance(part, UserPromptPart):
                    st.write(part.content)
    elif isinstance(message, ModelResponse):
        with st.chat_message("assistant"):
            for part in message.parts:
                if isinstance(part, TextPart):
                    st.write(part.content)

user_input = st.chat_input("Type...")

if user_input:

    # Check if the user wants to quit the conversation
    if user_input.lower() == "quit":
        st.write("Conversation Ended.")
    
    else:
        with st.chat_message("user"):
            st.write(user_input)

        # Run the agent with the user input and message history    
        result = run_agent(user_input, st.session_state.agent_messages)
        if result is None:
            st.stop()
        
        # Update message history with all messages
        new_messages = result.new_messages()
        st.session_state.message_history.extend(new_messages) # Store entire message history
        st.session_state.agent_messages.extend(new_messages) # Store summarized message history

        # Extract the latest AI response from the last ModelResponse object
        ai_response = next(
            (part.content 
            for msg in reversed(st.session_state.message_history) if isinstance(msg, ModelResponse) 
            for part in msg.parts if isinstance(part, TextPart)
            ),
            "AI response not found"
        )

        with st.chat_message("assistant"):
            st.write(ai_response)

        # Save messages to the database
        for msg in new_messages:
            if isinstance(msg, ModelRequest):
                role = "User"
                content = next((part.content for part in msg.parts if isinstance(part, UserPromptPart)), "")
            elif isinstance(msg, ModelResponse):
                role = "AI"
                content = next((part.content for part in msg.parts if isinstance(part, TextPart)), "")
            else:
                continue  # Skip if it's an unknown type

            save_message(st.session_state.conversation_id, role, content)

        # Calculate total tokens
        total_tokens = sum(
            len(encoding.encode(part.content))
            for message in st.session_state.agent_messages
            for part in message.parts if hasattr(part, 'content')
        )
        print(f"Total tokens: {total_tokens}")

        # Summarize if token limit is exceeded
        if total_tokens > 3000:
            conversation = "\n".join(
                f"{message.kind}: {part.content}"
                for message in st.session_state.agent_messages
                for part in message.parts if hasattr(part, 'content')
            )

            summary_result = run_agent(
                f"""
                Summarize the entire conversation below in a **concise** and **informative** manner.  

                Focus on capturing the **key points**, **important terms**, and **essential data**  
                from both the user input and AI responses.  

                Ensure brevity while maintaining clarity. **Omit unnecessary details**  
                but keep all critical context that might be relevant for later use.  

                Conversation:
                {conversation}
                """
            )

            if summary_result is None:
                st.stop()

            # Create summary system message
            summary_message = get_summary_model(summary_result.data)

            # Keep only the summary + last 4 messages
            st.session_state.agent_messages = [summary_message] + st.session_state.agent_messages[-4:]

            # Save summary in the database
            update_conversation_summary(user_id, summary_result.data)

            print(f"Conversation summarized. Summary: {summary_result.data}")
