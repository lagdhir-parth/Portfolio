# Portfolio AI Assistant - Backend

FastAPI server for the Portfolio AI Assistant application. This backend handles chat interactions, AI response generation, and conversation history management.

## 🚀 Quick Start

1. **Setup Virtual Environment**

```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
```

2. **Install Dependencies**

```bash
pip install -r requirements.txt
```

3. **Configure Environment**
   Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

4. **Seed Resume Data**

```bash
python seed_resume.py
```

5. **Run the Server**

```bash
uvicorn app.main:app --reload
```

Server runs on: `http://localhost:8000`

## 📁 Directory Structure

- `app/api/` - API endpoints (chat routes)
- `app/services/` - Business logic (AI service)
- `app/models/` - Pydantic schemas
- `app/db/` - Database configuration (MongoDB)
- `app/core/` - Core configuration and settings
- `app/utils/` - Helper functions (prompt engineering)
- `seed_resume.py` - Script to initialize resume data

## 🔌 API Endpoints

### POST /chat

Submit a question and receive an AI-generated response.

**Request:**

```json
{
  "message": "What are your key skills?"
}
```

**Response:**

```json
{
  "reply": "Based on my resume, my key skills include..."
}
```

### GET /

Health check endpoint.

**Response:**

```json
{
  "status": "Backend running"
}
```

## 🤖 How Chat Works

1. Receives user message via `/chat` endpoint
2. Fetches resume from MongoDB
3. Builds a contextual prompt combining resume + user question
4. Sends prompt to OpenRouter API
5. Stores question and answer in chat history
6. Returns AI response to frontend

## 📦 Dependencies

See `requirements.txt` for all Python dependencies including:

- FastAPI - Web framework
- Uvicorn - ASGI server
- Motor - Async MongoDB driver
- Requests - HTTP client
- Python-dotenv - Environment management

## 🔐 Security Notes

- CORS is enabled for frontend communication
- API keys should be stored in `.env` (never commit to git)
- Resume data is stored securely in MongoDB
- All requests are logged in the database

## 🐛 Troubleshooting

- **MongoDB Connection Error**: Verify connection string in `.env`
- **OpenRouter Error**: Check API key validity
- **CORS Issues**: Ensure frontend URL is in allowed origins
- **Port Already in Use**: Change port with `uvicorn app.main:app --port 8001`
