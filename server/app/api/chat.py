from fastapi import APIRouter, HTTPException
import logging
from app.models.schemas import ChatRequest
from app.services.ai_service import ask_ai
from app.utils.prompt import build_prompt
from app.db.mongodb import resume_collection, chat_collection

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("/chat")
def chat(req: ChatRequest):
    try:
        resume_doc = resume_collection.find_one()

        if not resume_doc:
            return {"reply": "Resume data not found."}

        prompt = build_prompt(resume_doc["content"], req.message)
        reply = ask_ai(prompt)

        chat_collection.insert_one({
            "question": req.message,
            "answer": reply
        })

        return {"reply": reply}
    
    except ValueError as e:
        logger.warning(f"Validation error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")