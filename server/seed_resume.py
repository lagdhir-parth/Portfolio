from app.db.mongodb import resume_collection

resume_text = """
Name: Lagdhir Parth
Role: MERN Stack Developer
Education: 2nd-year B.Tech Computer Engineering Student
University: Atmiya University, Rajkot (360005)

Profile Summary:
I am a dedicated MERN Stack Developer and a second-year B.Tech Computer Engineering student with strong hands-on experience in building full-stack web applications. I have developed production-ready projects using React, Node.js, Express, and MongoDB. I am skilled in REST API development, authentication systems, and creating responsive, user-friendly interfaces. I am passionate about learning new technologies and building reliable, scalable applications.

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
- REST API Development
- JWT Authentication

Database:
- MongoDB

Programming Languages:
- Java
- Python (Basics)

Tools & Platforms:
- Git
- GitHub
- Postman
- Canva
- Vercel
- Render

Projects:

Hospital Management System (MediStream):
- Developed a full-stack healthcare management system using the MERN stack
- Implemented secure JWT-based authentication and role-based access control
- Built modules for patient management, appointments, billing, and medical records
- Integrated email notifications using Nodemailer and Resend
- Deployed frontend on Vercel and backend on Render with GitHub version control

Project Links:
- Live: https://hospital-management-system-rho-mocha.vercel.app/
- GitHub: https://github.com/lagdhir-parth/Hospital_Management_System

Lost and Found Hub:
- Built a MERN-based web application to manage campus lost and found items
- Enabled users to report, search, and manage lost belongings through a centralized system
- Implemented seamless frontend–backend integration
- Strengthened real-world full-stack development skills using React, Node.js, Express, and MongoDB

UI Project (Portfolio UI):
- Designed and developed a responsive portfolio UI using React and Tailwind CSS
- Focused on modern UI design, responsiveness, and user experience

TechMart E-commerce Platform:
- Developed a basic e-commerce platform with product listings and shopping cart functionality
- Built using HTML, CSS, and JavaScript to strengthen core web development skills

Soft Skills:
- Problem-solving
- Team collaboration
- Time management
- Clear project documentation
- Strong learning mindset

Education Details:

HSC (2022–2024):
- Shree Rajshakha Higher Secondary School of Science, Porbandar
- Scored 86%

SSC (2022):
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