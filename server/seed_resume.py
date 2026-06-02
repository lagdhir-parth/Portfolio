from app.db.mongodb import resume_collection

resume_text = """
Name: Lagdhir Parth
Role: MERN Stack Developer
Education: 3rd-year B.Tech Computer Engineering Student
University: Atmiya University, Rajkot (360005)
Current CGPA: 9.51

Profile Summary:
MERN Stack Developer and B.Tech Computer Engineering student with hands-on experience building scalable full-stack web applications. Strong foundation in RESTful APIs, authentication systems, and responsive UI development. Passionate about building real-world problem-solving applications.

Technical Skills:

Frontend:
- React.js (React 19)
- JavaScript (ES6+)
- HTML5
- CSS3
- Tailwind CSS
- Framer Motion
- react-query (TanStack Query)

Backend:
- Node.js
- Express.js (v5)

Database:
- MongoDB

Authentication & APIs:
- JWT
- REST APIs
- Google OAuth
- LinkedIn OAuth
- OTP verification

Tools & Platforms:
- Git
- GitHub
- Postman
- Vercel
- Render
- OpenRouter
- Draw.io
- Canva
- Google App Script

Programming Languages:
- Java (Basics)
- Python (Basics)

Other Libraries & Technologies:
- Multer
- Nodemailer
- Resend
- Node-Cron
- Jitsi Meeting
- DnD Kit
- Recharts.js
- Tanstack/Table

Soft Skills:
- Problem-solving
- Team collaboration
- Time management

Projects:

HRM - Human Resource Management Platform:
- Built a full-stack recruitment and HR management platform supporting candidates, recruiters, and administrators.
- Core Features: Job posting, application tracking, resume management, company profiles, feedback/reporting systems, OTP verification, integrated video interviews, and an advertising system.
- Frontend: Developed a React 19 (Vite) frontend with Tailwind CSS, React Router v7, React Query, role-based dashboards, file uploads, and Jitsi-powered meeting integration.
- Backend: Engineered a Node.js/Express backend with MongoDB/Mongoose, JWT authentication, secure refresh-token workflows, Google & LinkedIn OAuth, RBAC authorization, Cloudinary media storage, Resend email services, validation layers, rate limiting, and scheduled automation jobs.
- Links:
  * Live: https://hrm-tan-three.vercel.app
  * GitHub: https://github.com/lagdhir-parth/HRM

FlowSync - AI-Powered Productivity Platform:
- Built a full-stack productivity platform to manage workspaces, projects, and tasks with a drag-and-drop Kanban board, analytics dashboard, and voice + chat assistants.
- Frontend: Built using React 19 (Vite), Tailwind CSS, Framer Motion, DnD Kit, Recharts, @tanstack/react-table, and Google OAuth.
- Backend: Created a Node.js (ESM) + Express v5 backend using MongoDB/Mongoose, JWT + bcrypt auth, and secure middleware (helmet, cors, compression).
- AI Pipeline: Integrated OpenRouter & Sarvam API for voice command execution and chatbot support, demonstrating end-to-end full-stack ownership.
- Links:
  * Live: https://flow-sync-mu.vercel.app
  * GitHub: https://github.com/lagdhir-parth/FlowSync

Education Details:

B.Tech Computer Engineering (Pursuing):
- Atmiya University, Rajkot
- Current CGPA: 9.51

HSC Education (2022–2024):
- Shree Rajshakha Higher Secondary School of Science, Porbandar, Gujarat
- Score: 86%

Contact Information:
- Phone: +91 9624688925
- Email: parthlagdhir2007@gmail.com
- GitHub: https://github.com/lagdhir-parth
- LinkedIn: https://www.linkedin.com/in/lagdhir-parth-86662233b
"""

# Using update_one with upsert=True so existing data gets updated with new changes
result = resume_collection.update_one(
    {},  # Empty filter matches the first/main document in the collection
    {"$set": {"content": resume_text}},
    upsert=True
)

if result.matched_count > 0:
    print("✅ Resume updated successfully in MongoDB")
elif result.upserted_id is not None:
    print("✅ New resume inserted successfully into MongoDB")
else:
    print("ℹ️ No changes detected or operation skipped")