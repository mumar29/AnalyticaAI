import json
import os
from google.genai import types

class LLMProvider:
    """A unified provider that returns either a Gemini or Groq client based on env vars."""
    _client = None
    _provider = None  # "GEMINI" or "GROQ"

    @classmethod
    def get_client(cls):
        if cls._client is None:
            gemini_api_key = os.getenv("GEMINI_API_KEY")
            groq_api_key = os.getenv("GROQ_API_KEY")
            if gemini_api_key:
                from google import genai  # Gemini client library
                cls._client = genai.Client(api_key=gemini_api_key)
                cls._provider = "GEMINI"
            elif groq_api_key:
                from groq import Groq  # Groq client library
                cls._client = Groq(api_key=groq_api_key)
                cls._provider = "GROQ"
            else:
                raise ValueError("No valid LLM API key found. Set either GEMINI_API_KEY or GROQ_API_KEY.")
        return cls._client, cls._provider


def generate_completion(system_prompt: str, user_content: str, response_schema: dict,
                        model_groq: str = "llama-3.3-70b-versatile", model_gemini: str = "gemini-2.0-flash") -> str:
    """
    Generates a completion using the selected LLM provider.
    
    For Groq, it calls the chat.completions.create endpoint with messages.
    For Gemini, it concatenates the system prompt and user content and calls
    models.generate_content with a config.
    """
    client, provider = LLMProvider.get_client()
    if provider == "GROQ":

        system_prompt += f"""\nReturn your answer as a JSON object following this schema:
            {json.dumps(response_schema, indent=2)}"""

        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content}
            ],
            model=model_groq,
            response_format={"type": "json_object"}
        )
        return chat_completion.choices[0].message.content
    
    elif provider == "GEMINI":

        chat_completion = client.models.generate_content(
            model=model_gemini,
            contents=user_content,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                response_mime_type='application/json',
                response_schema=response_schema,
            )
        )

        return chat_completion.text