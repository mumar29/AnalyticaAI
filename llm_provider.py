import json
import os
from typing import Dict, Literal, Optional, Any, List
from pydantic import BaseModel, Field, ValidationError, model_validator

class LLMConnection(BaseModel):
    provider: Literal["GEMINI", "GROQ"]
    api_key: str
    # Optional model configurations
    gemini_model: str = Field(default="gemini-2.0-flash", description="Default model for Gemini")
    groq_model: str = Field(default="llama-3.3-70b-versatile", description="Default model for Groq")

class LLMProvider:
    """Stateful LLM provider with internal configuration management"""
    _current_config: Optional[LLMConnection] = None
    _current_client: Optional[Any] = None
    _current_provider: Optional[str] = None

    @classmethod
    def initialize(cls, config: LLMConnection):
        """Set up the LLM client using validated configuration without losing an existing connection on failure."""
        
        new_connection = None

        try:
            if config.provider == "GEMINI":
                from google import genai
                new_connection = genai.Client(api_key=config.api_key)
                # Test connection with a minimal request
                cls._test_connection(new_connection, "GEMINI")
                new_provider = "GEMINI"
            elif config.provider == "GROQ":
                from groq import Groq
                new_connection = Groq(api_key=config.api_key)
                # Test connection with a minimal request
                cls._test_connection(new_connection, "GROQ")
                new_provider = "GROQ"
            else:
                raise ValueError(f"Unsupported provider: {config.provider}")

            # Only close the existing connection and apply changes if the new one succeeds
            cls.close()
            cls._current_client = new_connection
            cls._current_provider = new_provider
            cls._current_config = config

            print(f"{config.provider} Key was set successfully.")

        except Exception as e:
            # Cleanup if the new connection was initialized but failed
            if new_connection and hasattr(new_connection, "close"):
                try:
                    new_connection.close()
                except Exception:
                    pass
            raise ConnectionError(f"LLM client initialization failed: {str(e)}") from e

    @classmethod
    def generate_completion(cls, system_prompt: str, user_content: str, response_schema: dict) -> str:
        """Generate completion using the initialized LLM client"""
        if not cls._current_client or not cls._current_provider or not cls._current_config:
            raise ConnectionError("LLM client not initialized. Call initialize() first")

        try:
            if cls._current_provider == "GROQ":
                system_prompt_with_schema = f"""{system_prompt}\nReturn your answer as a JSON object following this schema:
                    {json.dumps(response_schema, indent=2)}"""

                chat_completion = cls._current_client.chat.completions.create(
                    messages=[
                        {"role": "system", "content": system_prompt_with_schema},
                        {"role": "user", "content": user_content}
                    ],
                    model=cls._current_config.groq_model,
                    response_format={"type": "json_object"}
                )
                return chat_completion.choices[0].message.content
                
            elif cls._current_provider == "GEMINI":
                from google.genai import types
                chat_completion = cls._current_client.models.generate_content(
                    model=cls._current_config.gemini_model,
                    contents=user_content,
                    config=types.GenerateContentConfig(
                        system_instruction=system_prompt,
                        response_mime_type='application/json',
                        response_schema=response_schema,
                    )
                )
                return chat_completion.text
                
        except Exception as e:
            raise RuntimeError(f"LLM query execution failed: {str(e)}") from e

    @classmethod
    def close(cls):
        """Reset state - no active connections to close for API clients"""
        cls._current_config = None
        cls._current_client = None
        cls._current_provider = None

    @staticmethod
    def _test_connection(client: Any, provider: str):
        """Test the LLM client connection with a minimal request"""
        try:
            if provider == "GEMINI":
                # Simple test with minimal tokens
                client.models.generate_content(
                    model="gemini-2.0-flash",
                    contents="Hello",
                    config={"max_output_tokens": 1}
                )
            elif provider == "GROQ":
                # Simple test with minimal tokens
                client.chat.completions.create(
                    messages=[{"role": "user", "content": "Hello"}],
                    model="llama-3.3-70b-versatile",
                    max_tokens=1
                )
        except Exception as e:
            error_msg = f"LLM connection test failed: {str(e)}"
            raise ConnectionError(error_msg) from e

# At the module level, after your LLMProvider class
def generate_completion(system_prompt: str, user_content: str, response_schema: dict) -> str:
    """
    Convenience function that delegates to LLMProvider.generate_completion
    """
    return LLMProvider.generate_completion(
        system_prompt, 
        user_content, 
        response_schema
    )