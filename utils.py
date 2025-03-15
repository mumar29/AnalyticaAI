import csv
import io
from typing import List, Dict

from agent_functions import call_llm
from supabase_database import get_conversation_summary, get_unsummarized_messages, update_conversation_summary

def list_dict_to_csv(data: List[Dict]) -> str:
    if not data:
        return ""  # Return an empty string if no data is present

    output = io.StringIO()
    fieldnames = data[0].keys()  # Get column names from the first dictionary
    writer = csv.DictWriter(output, fieldnames=fieldnames)

    writer.writeheader()  # Write CSV headers
    writer.writerows(data)  # Write CSV rows

    return output.getvalue()

async def update_conversation_summary_incremental(user_id: str, session_id: str, threshold: int = 8) -> str:
    # Retrieve the conversation session details including summary, last_summarized_index, and current_message_index.
    session = await get_conversation_summary(user_id, session_id)
    last_index = session.get("last_summarized_message_count", 0)
    current_index = session.get("total_messages", 0)

    # Calculate the number of new (unsummarized) messages.
    unsummarized_count = current_index - last_index
    if unsummarized_count < threshold:
        # Not enough new messages; no need to update the summary.
        return session.get("summary", "")

    # Fetch only the unsummarized messages using their message index.
    unsummarized_messages = await get_unsummarized_messages(session_id, last_index)

    new_messages_text = "\n".join(
        [f"{msg['role']}: {msg['text_content']}" for msg in unsummarized_messages]
    )

    # Build the summarization prompt, chaining with the existing summary if available.
    if session.get("summary"):
        prompt = f"""
        You are an expert summarizer specializing in maintaining and updating conversation context. 
        Update the existing conversation summary by integrating the new messages provided below. 
        Ensure that the updated summary is concise, informative, and accurately captures the key points, 
        important terms, and essential context from both the USER and AI. In this updated summary, please give 
        extra weight to the most recent interactions to highlight the latest context, while still retaining 
        critical information from earlier in the conversation.

        Existing Summary:
        {session['summary']}

        New Messages:
        {new_messages_text}

        Provide an updated, concise, and informative summary that effectively combines both.
        """
    else:
        prompt = f"""
        You are an expert summarizer specializing in conversation context management. 
        Summarize the conversation below in a concise and informative manner, capturing key points, 
        important terms, and essential data from both the USER and AI. In your summary, please prioritize 
        the most recent interactions to ensure that the latest context is emphasized.

        Conversation:
        {new_messages_text}
        """

    summary_result = call_llm(
        system_prompt="You are a helpful summarizer",
        user_content=prompt
    )
    updated_summary = summary_result.content

    # Update the conversation session: set the new summary and update last_summarized_index to the current index.
    await update_conversation_summary(user_id, session_id, updated_summary, current_index)

    return updated_summary