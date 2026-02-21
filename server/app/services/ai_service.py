import requests
import logging
from app.core.config import OPENROUTER_API_KEY

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
logger = logging.getLogger(__name__)

def ask_ai(prompt: str) -> str:
    try:
        if not OPENROUTER_API_KEY:
            raise RuntimeError("OPENROUTER_API_KEY is not set")
        
        logger.info(f"Calling OpenRouter API with model: gpt-3.5-turbo")
        
        response = requests.post(
            OPENROUTER_URL,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "https://portfolio.local",
                "X-Title": "Portfolio AI"
            },
            json={
                "model": "gpt-3.5-turbo",
                "messages": [
                    {"role": "user", "content": prompt}
                ],
                "max_tokens": 500
            },
            timeout=30
        )

        logger.info(f"API Response Status: {response.status_code}")
        
        if response.status_code == 401:
            logger.error("401 Unauthorized - Invalid or expired API key")
            logger.error(f"API Key starts with: {OPENROUTER_API_KEY[:20]}...")
            raise RuntimeError("OpenRouter API key is invalid or expired. Check your OPENROUTER_API_KEY in .env file")
        
        response.raise_for_status()
        data = response.json()
        
        if "choices" not in data or len(data["choices"]) == 0:
            logger.error(f"Invalid API response: {data}")
            raise ValueError("No choices in API response")
        
        return data["choices"][0]["message"]["content"]
    
    except requests.exceptions.HTTPError as e:
        logger.error(f"HTTP Error {e.response.status_code}: {e.response.text}")
        raise
    except requests.exceptions.RequestException as e:
        logger.error(f"API Request failed: {str(e)}")
        raise
    except (KeyError, IndexError) as e:
        logger.error(f"Invalid response format: {str(e)}")
        raise ValueError("Failed to parse API response")
    except Exception as e:
        logger.error(f"Unexpected error in ask_ai: {str(e)}")
        raise