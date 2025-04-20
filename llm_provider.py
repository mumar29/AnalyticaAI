import hashlib
import json
from typing import Dict, Optional, Any, Tuple, Literal
from pydantic import BaseModel, Field, model_validator

class LLMConnection(BaseModel):
    provider: Literal["GEMINI", "GROQ", "OLLAMA"]
    api_key: Optional[str] = Field(default=None, description="Online LLM host")
    host: Optional[str] = Field(default=None, description="Local LLM host")
    model: Optional[str] = Field(default=None, description="Model to use for the provider")

    @model_validator(mode="after")
    def check_required_fields_and_set_default_model(self):
        if self.provider in {"GEMINI", "GROQ"}:
            if not self.api_key:
                raise ValueError("api_key is required for GEMINI or GROQ provider")
            if self.model is None:
                # Set default model based on provider
                self._dict_["model"] = "gemini-2.0-flash" if self.provider == "GEMINI" else "llama-3.3-70b-versatile"
        elif self.provider == "OLLAMA":
            if not self.host:
                raise ValueError("host is required for OLLAMA provider")
            if self.model is None:
                self._dict_["model"] = "gemma3:1b"
        return self
    
class LLMProvider:
    """
    LLM provider that supports multiple connections, keyed by organization id.
    """
    # Map org_id -> (LLMConnection, client instance, config hash)
    _connections: Dict[int, Tuple[LLMConnection, Any, str]] = {}

    @classmethod
    async def get_or_initialize(cls, org_id: int) -> Any:
        """
        Retrieve the LLM client for the given organization.
        If the connection does not exist, fetch the configuration via fetch_llm_api_key() and initialize it.
        """
        if org_id in cls._connections:
            return cls._connections[org_id][1]

        # Dynamically fetch the LLM API key/config for this organization.
        from database_functions import fetch_llm_api_key  # adjust the import as needed

        raw_config = await fetch_llm_api_key(org_id)
        if not raw_config:
            raise ConnectionError(f"LLM configuration not found for organization {org_id}")

        try:
            config = LLMConnection(**raw_config)
        except Exception as e:
            raise ValueError(f"Invalid LLM configuration for organization {org_id}: {str(e)}") from e

        cls.initialize(org_id, config)
        return cls._connections[org_id][1]

    @classmethod
    def initialize(cls, org_id: int, config: LLMConnection):
        """
        Set up the LLM client using validated configuration without losing an existing connection on failure.
        """
        new_hash = cls._generate_config_hash(config)

        # If a connection exists for this org, check if it's still valid.
        if org_id in cls._connections:
            _, _, existing_hash = cls._connections[org_id]
            if new_hash == existing_hash:
                return  # The connection is current; no need to reinitialize

        new_connection = None
        try:
            if config.provider == "GEMINI":
                from google import genai
                new_connection = genai.Client(api_key=config.api_key)
                cls._test_connection(new_connection, "GEMINI", config.model)
            elif config.provider == "GROQ":
                from groq import Groq
                new_connection = Groq(api_key=config.api_key)
                cls._test_connection(new_connection, "GROQ", config.model)
            elif config.provider == "OLLAMA":
                from ollama import Client
                new_connection = Client(host=config.host)
                cls._test_connection(new_connection, "OLLAMA", config.model)
            else:
                raise ValueError(f"Unsupported provider: {config.provider}")

            # If an old connection exists, close it.
            if org_id in cls._connections:
                _, old_connection, _ = cls._connections[org_id]
                try:
                    old_connection.close()
                except Exception:
                    pass

            cls._connections[org_id] = (config, new_connection, new_hash)
            print(f"{config.provider} LLM key was set successfully for org {org_id}.")

        except Exception as e:
            if new_connection and hasattr(new_connection, "close"):
                try:
                    new_connection.close()
                except Exception:
                    pass
            raise ConnectionError(f"LLM connection failed for org {org_id}: {str(e)}") from e

    @classmethod
    def generate_completion(cls, org_id: int, system_prompt: str, user_content: str, response_schema: dict) -> str:
        """
        Generate a completion using the initialized LLM client for the given organization.
        """

        if org_id not in cls._connections:
            raise ConnectionError("LLM connection not initialized for organization")
        config, client, _ = cls._connections[org_id]
        
        try:
            if config.provider == "GROQ":
                system_prompt_with_schema = f"""{system_prompt}\nReturn your answer as a JSON object following this schema:\n{json.dumps(response_schema, indent=2)}"""
                
                chat_completion = client.chat.completions.create(
                    model=config.model,
                    messages=[
                        {"role": "system", "content": system_prompt_with_schema},
                        {"role": "user", "content": user_content}
                    ],
                    response_format={"type": "json_object"}
                )
                return chat_completion.choices[0].message.content

            elif config.provider == "GEMINI":
                from google.genai import types
                from utils import attach_both_schema_and_example_to_prompt, extract_json_from_response

                final_prompt = attach_both_schema_and_example_to_prompt(system_prompt, response_schema)
                
                print(f"Final prompt: {final_prompt}")
                
                chat_completion = client.models.generate_content(
                    model=config.model,
                    contents=user_content,
                    config=types.GenerateContentConfig(
                        system_instruction=final_prompt
                    )
                )
                # from utils import post_process_response
                return extract_json_from_response(chat_completion.text)
                # return chat_completion.text

            elif config.provider == "OLLAMA":
                chat_completion = client.chat(
                    model=config.model, 
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_content}
                    ],
                    format=response_schema
                )
                return chat_completion.message.content
        except Exception as e:
            raise RuntimeError(f"LLM query execution failed: {str(e)}") from e

    @classmethod
    def close(cls, org_id: Optional[int] = None):
        """
        Close the connection for a specific organization. If org_id is not provided, close all connections.
        """
        if org_id is not None:
            if org_id in cls._connections:
                _, connection, _ = cls._connections[org_id]
                if hasattr(connection, "close"):
                    try:
                        connection.close()
                    except Exception:
                        pass
                del cls._connections[org_id]
        else:
            for key in list(cls._connections.keys()):
                _, connection, _ = cls._connections[key]
                if hasattr(connection, "close"):
                    try:
                        connection.close()
                    except Exception:
                        pass
                del cls._connections[key]

    @staticmethod
    def _generate_config_hash(config: LLMConnection) -> str:
        """Generate a unique hash for the LLM configuration."""
        return hashlib.sha256(config.json().encode()).hexdigest()

    @staticmethod
    def _test_connection(client: Any, provider: str, model: str):
        """Test the LLM client connection with a minimal request."""
        try:
            if provider == "GEMINI":
                # Simple test with minimal tokens.
                client.models.generate_content(
                    model=model,
                    contents="Hello",
                    config={"max_output_tokens": 1}
                )
            elif provider == "GROQ":
                # Simple test with minimal tokens.
                client.chat.completions.create(
                    model=model,
                    messages=[{"role": "user", "content": "Hello"}],
                    max_tokens=1
                )
            elif provider == "OLLAMA":
                # Simple test with minimal tokens.
                client.chat(
                    model=model, 
                    messages=[{'role': 'user', 'content': 'Hello'}],
                    options = {"num_predict": 1}
                )

        except Exception as e:
            raise ConnectionError(f"LLM connection test failed: {str(e)}") from e