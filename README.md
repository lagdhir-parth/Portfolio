# Portfolio AI Assistant

A full-stack portfolio website with an AI-powered chatbot that intelligently answers questions about your resume and projects. Users can explore your portfolio through a modern web interface and interact with an AI assistant trained on your professional background.

## 🌟 Features

- **Interactive Portfolio Website**: Modern, responsive design built with React and TypeScript
- **AI-Powered Chatbot**: Intelligent assistant that answers questions about your resume and projects
- **Smart Prompt Engineering**: Contextual responses based on your resume data
- **Conversation History**: All chat interactions are stored in MongoDB
- **Multi-Page Navigation**: Dedicated pages for Home, About, Projects, and Contact
- **RESTful API**: FastAPI backend with CORS support
- **Database Integration**: MongoDB for persistent storage of resumes and chat history

## 🛠️ Tech Stack

### Frontend

- **React** 18+ with TypeScript
- **Vite** for fast development and optimized builds
- **React Router** for navigation
- **Tailwind CSS** for styling (v4 with theme customization)
- **React Markdown** for formatted text display

### Backend

- **FastAPI** - Modern Python web framework
- **Python 3.8+**
- **MongoDB** - NoSQL database
- **OpenRouter API** - LLM integration for AI responses

## 📁 Project Structure

```
ProjectForInternship/
├── client/                 # React TypeScript frontend
│   ├── src/
│   │   ├── pages/         # Home, About, Projects, Contact pages
│   │   ├── components/    # Navbar, ChatBot button
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── index.html
│
└── server/                # FastAPI backend
    ├── app/
    │   ├── api/          # Chat API endpoints
    │   ├── services/     # AI service logic
    │   ├── models/       # Data schemas
    │   ├── db/          # Database configuration
    │   ├── core/        # Core configuration
    │   ├── utils/       # Utility functions (prompts)
    │   └── main.py      # FastAPI app initialization
    ├── requirements.txt
    └── seed_resume.py   # Script to seed resume data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Python 3.8+
- MongoDB (local or Atlas)
- OpenRouter API key

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the server directory:

```env
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

5. Seed the database with your resume:

```bash
python seed_resume.py
```

6. Start the development server:

```bash
uvicorn app.main:app --reload
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📚 API Endpoints

### Health Check

- **GET** `/` - Returns backend status

### Chat

- **POST** `/chat` - Send a message and get AI response
  - Request body:
    ```json
    {
      "message": "Your question here"
    }
    ```
  - Response:
    ```json
    {
      "reply": "AI generated answer"
    }
    ```

## 🔧 Environment Variables

### Backend (.env)

- `MONGODB_URI` - MongoDB connection string
- `OPENROUTER_API_KEY` - API key for OpenRouter LLM service

## 📝 How It Works

1. **User Question**: User submits a question through the chatbot interface
2. **Resume Fetch**: Backend retrieves user's resume from MongoDB
3. **Prompt Building**: Question and resume are combined using prompt engineering
4. **AI Response**: OpenRouter API processes the prompt and generates a response
5. **Storage**: Both question and answer are stored in chat history
6. **Display**: Response is formatted and displayed to the user

## 🎨 Customization

- **Resume Data**: Update `seed_resume.py` with your actual resume content
- **Styling**: Modify Tailwind CSS configuration in the client
- **Prompts**: Edit `server/app/utils/prompt.py` to customize AI behavior
- **Pages**: Update React pages in `client/src/pages/` with your content

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For questions or support, please create an issue in the repository or contact the project maintainer.

---

**Built with ❤️ for your professional portfolio**
