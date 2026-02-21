from pymongo import MongoClient
from app.core.config import MONGODB_URI, DB_NAME

client = MongoClient(MONGODB_URI)
db = client[DB_NAME]

resume_collection = db["resume"]
chat_collection = db["chat_logs"]