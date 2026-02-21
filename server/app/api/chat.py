from fastapi import APIRouter
from app.models.schemas import ChatRequest
from app.services.ai_service import ask_ai
from app.utils.prompt import build_prompt
from app.db.mongodb import resume_collection, chat_collection

router = APIRouter()

@router.post("/chat")
def chat(req: ChatRequest):
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