import requests
import logging
from app.core.config import OPENROUTER_API_KEY

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
logger = logging.getLogger(__name__)

def ask_ai(prompt: str) -> str:
    try:
        if not OPENROUTER_API_KEY:
            raise RuntimeError("OPENROUTER_API_KEY is not set")
        
        response = requests.post(
            OPENROUTER_URL,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "openrouter/free",
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            },
            timeout=30
        )

        response.raise_for_status()
        data = response.json()
        
        if "choices" not in data or len(data["choices"]) == 0:
            logger.error(f"Invalid API response: {data}")
            raise ValueError("No choices in API response")
        
        return data["choices"][0]["message"]["content"]
    
    except requests.exceptions.RequestException as e:
        logger.error(f"API Request failed: {str(e)}")
        raise
    except (KeyError, IndexError) as e:
        logger.error(f"Invalid response format: {str(e)}")
        raise ValueError("Failed to parse API response")
    except Exception as e:
        logger.error(f"Unexpected error in ask_ai: {str(e)}")
        raise