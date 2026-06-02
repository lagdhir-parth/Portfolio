// src/pages/About.tsx
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About - Lagdhir Parth";
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-4 max-w-6xl mx-auto overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black text-(--primary-text) mb-6 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) bg-clip-text ">
          About Me
        </h1>
        <div className="w-24 h-1 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >
          <img
            src="/ProfilePic.webp"
            alt="Parth Lagdhir"
            className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-(--color-hover) p-4 shadow-2xl border-4 border-(--primary-accent)/20"
          />
          <a
            href="/resume/Resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-3 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) text-(--color-secondary) px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <LuDownload size={24} />
            Download Resume
          </a>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-(--primary-text)">
            MERN Stack Developer & Student
          </h2>
          <p className="text-xl text-(--secondary-text) leading-relaxed">
            I'm Lagdhir Parth. I build scalable, real-world full-stack web
            applications with end-to-end ownership, focusing on clean code,
            practical problem solving, and delightful user experiences.
          </p>
          <p className="text-lg text-(--muted-text) leading-relaxed">
            I specialize in modern MERN-stack development and adopt the latest
            tools like React 19 and Vite. My backend work centers around Node.js
            (ESM) and Express (including v5), with MongoDB and Mongoose for
            durable data models. I prioritize security (JWT, refresh-token
            workflows, RBAC, OAuth) and production-ready practices for
            performance and reliability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-(--color-hover)/50 backdrop-blur p-6 rounded-2xl border border-(--chat-border)/50">
              <h3 className="text-2xl font-bold text-(--primary-text)">
                Location
              </h3>
              <p className="text-(--primary-accent) font-semibold">
                Rajkot, Gujarat
              </p>
            </div>
            <div className="bg-(--color-hover)/50 backdrop-blur p-6 rounded-2xl border border-(--chat-border)/50">
              <h3 className="text-2xl font-bold text-(--primary-text)">
                Experience
              </h3>
              <p className="text-(--primary-accent) font-semibold">
                2+ years in full-stack development
              </p>
            </div>
            <div className="bg-(--color-hover)/50 backdrop-blur p-6 rounded-2xl border border-(--chat-border)/50">
              <h3 className="text-2xl font-bold text-(--primary-text)">
                Work Style
              </h3>
              <p className="text-(--primary-accent) font-semibold">
                End-to-end ownership
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Signature Projects */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h3 className="text-4xl font-bold text-(--primary-text) mb-8 text-center">
          Signature Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-(--color-hover)/60 border border-(--chat-border)/50 shadow-lg">
            <h4 className="text-2xl font-bold text-(--primary-text)">
              HRM — Human Resource Management
            </h4>
            <p className="text-(--secondary-text) mt-3">
              A comprehensive enterprise recruitment and HR platform with
              role-based dashboards (Candidate, Recruiter, Admin), an automated
              applicant tracking system, secure resume uploads, integrated
              Jitsi-based video interviewing, and advertising & reporting tools
              — built for SaaS-scale reliability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-(--color-hover)/60 border border-(--chat-border)/50 shadow-lg">
            <h4 className="text-2xl font-bold text-(--primary-text)">
              FlowSync — AI-Powered Productivity
            </h4>
            <p className="text-(--secondary-text) mt-3">
              An AI-first productivity platform featuring interactive
              drag-and-drop Kanban boards, visual analytics dashboards, and an
              advanced AI pipeline with voice commands and chatbot support
              (OpenRouter + Sarvam integrations) to accelerate team workflows.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-16"
      >
        <h3 className="text-4xl font-bold text-(--primary-text) mb-16">
          Tech Stack
        </h3>
        {/* Changed to lg:grid-cols-6 so 24 cards align flawlessly into even rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 w-full mx-auto">
          {[
            // 1. Core Architecture & Primary Languages
            "React 19",
            "Node.js (ESM)",
            "Express v5",
            "MongoDB",
            "TypeScript",
            "JavaScript (ES6+)",

            // 2. Advanced Frontend Ecosystem & State Management
            "react-query (TanStack)",
            "Framer Motion",
            "DnD Kit",
            "Recharts",
            "Tailwind CSS",

            // 3. Robust Backend Architecture, Auth & Security
            "JWT & Refresh Tokens",
            "RBAC",
            "OAuth (Google, LinkedIn)",
            "Mongoose",
            "Node-Cron",

            // 4. Cloud Infrastructure, APIs & Services
            "Cloudinary",
            "Resend / Nodemailer",
            "Vercel / Render",

            // 5. Build Tools, Foundations & Secondary Languages
            "Vite",
            "Git / GitHub",
            "HTML / CSS",
            "Python",
            "Java",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Capped delay to index % 6 or 4 so horizontal rows animate simultaneously rather than one-by-one endlessly
              transition={{ delay: (index % 6) * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group bg-(--color-hover)/40 backdrop-blur p-5 rounded-2xl border border-(--chat-border)/50 hover:border-(--primary-accent)/70 hover:bg-(--primary-accent)/10 transition-all duration-300 cursor-default shadow-lg flex items-center justify-center min-h-20"
            >
              <span className="text-base md:text-md font-semibold text-(--primary-text) group-hover:text-(--primary-accent) transition-colors duration-200">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
