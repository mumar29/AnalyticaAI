import base64
from io import BytesIO, StringIO
from lida import Manager, TextGenerationConfig
from llmx import TextGenerationResponse, Message
from groq import Groq
from typing import Union, List, Dict, Any
from PIL import Image
import pandas as pd

GROQ_API_KEY = "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"

class GroqTextGenerator:
    def __init__(self):
        self.client = Groq(api_key=GROQ_API_KEY)
        self.provider = "groq"
        self.default_model = "llama-3.3-70b-versatile"  # Default model

    def generate(
        self,
        messages: Union[List[Dict[str, Any]], str],
        config: TextGenerationConfig = None,
    ) -> TextGenerationResponse:
        # Ensure config is not None and set default values
        if config is None:
            config = TextGenerationConfig()
        
        # Ensure the model is set
        if not config.model:
            config.model = self.default_model

        # Ensure messages are in the correct format
        if isinstance(messages, str):
            messages = [{"role": "user", "content": messages}]
        elif isinstance(messages, list):
            messages = [
                {"role": msg.get("role", "user"), "content": msg.get("content", "")}
                for msg in messages
            ]
        else:
            raise ValueError("messages must be either a string or a list of dictionaries")

        # Build the model configuration
        model_config = {
            "model": config.model,
            "temperature": config.temperature if config.temperature is not None else 0.2,
            "top_p": config.top_p if config.top_p is not None else 1.0,
            "n": config.n if config.n is not None else 1,
            "messages": messages,
        }

        # Debugging: Print the model config to verify
        print("Model Config:", model_config)

        # Make the API call
        model_response = self.client.chat.completions.create(**model_config)

        # Wrap the response
        return TextGenerationResponse(
            text=[Message(**x.message.model_dump()) for x in model_response.choices],
            logprobs=[],
            usage=str(model_response.usage),
            config=model_config,
        )

def base64_to_image(base64_string):
    decoded_data = base64.b64decode(base64_string)
    image = Image.open(BytesIO(decoded_data))
    return image

def generate_lida_visualization(csv_data: str):
    try:
        chart_data = pd.read_csv(StringIO(csv_data))
        lida = Manager(text_gen=GroqTextGenerator())
        summary = lida.summarize(chart_data)
        
        if not summary:
            print("Failed to generate data summary")
            return None

        goals = lida.goals(summary, n=2)
        if not goals:
            print("No visualization goals generated")
            return None

        charts = lida.visualize(summary=summary, goal=goals[0])
        
        if charts and charts[0].raster:
            return base64_to_image(charts[0].raster)
        else:
            print("No raster chart generated")
            return None
            
    except Exception as e:
        print(f"Visualization error: {str(e)}")
        return None
    