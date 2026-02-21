from app.db.mongodb import resume_collection

resume_text = """
Name: Lagdhir Parth
Role: MERN Stack Developer
Education: 2nd-year B.Tech Computer Engineering student
University: Atmiya University, Rajkot (360005)

Profile Summary:
I am a MERN Stack Developer and a second-year B.Tech Computer Engineering student with hands-on experience in building full-stack web applications. I have developed production-ready projects using React, Node.js, Express, and MongoDB. I am strong in REST API development, authentication, and responsive UI design.

Technical Skills:

Frontend:
- HTML
- CSS
- JavaScript
- React
- Tailwind CSS

Backend:
- Node.js
- Express.js
- REST APIs

Database:
- MongoDB

Programming Languages:
- Java
- Python (Basics)

Tools:
- Git
- GitHub
- Postman
- Canva

Projects:

Hospital Management System (MediStream):
- Built a full-stack healthcare management platform using the MERN stack
- Implemented JWT authentication and role-based access control
- Developed modules for patients, appointments, billing, and medical records
- Integrated email notifications using Nodemailer and Resend
- Deployed the application using Vercel for frontend and Render for backend
- Used GitHub for version control

Project Links:
- Live: https://hospital-management-system-rho-mocha.vercel.app/
- GitHub: https://github.com/lagdhir-parth/Hospital_Management_System

Lost and Found Hub:
- Developed a MERN-based web application to manage campus lost and found items
- Enabled users to report and search missing belongings through a centralized platform
- Implemented frontend–backend integration using React, Node.js, Express, and MongoDB
- Strengthened full-stack development fundamentals through real-world implementation

Soft Skills:
- Problem-solving
- Team collaboration
- Project documentation
- Time management

Education Details:

HSC Education (2022–2024):
- Shree Rajshakha Higher Secondary School of Science, Porbandar
- Scored 86%

SSC Education (2022):
- Sandipani Gurukul, Porbandar
- Scored 84%

Contact Information:
- Phone: +91 9624688925
- Email: parthlagdhir2007@gmail.com
- GitHub: https://github.com/lagdhir-parth
"""

# Insert resume ONLY if not already present
if resume_collection.count_documents({}) == 0:
    resume_collection.insert_one({
        "content": resume_text
    })
    print("✅ Resume inserted successfully")
else:
    print("⚠️ Resume already exists in database")