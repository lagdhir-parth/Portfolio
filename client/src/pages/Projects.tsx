// src/pages/Projects.tsx
import { motion } from "framer-motion";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { useEffect } from "react";

const projects = [
  {
    title: "DJ PRAXX Website",
    description:
      "Built an immersive portfolio website for DJ Praxx using React, featuring smooth Lenis scrolling, Framer Motion animations, Howler.js audio playback, and a responsive Tailwind CSS UI. Integrated Sanity CMS for easy content updates, delivering a fast and engaging experience that showcases his music, brand, and performances.",
    tech: [
      "React",
      "Sanity CMS",
      "Tailwind CSS",
      "Framer motion",
      "Lenis.js",
      "Howler.js",
      "Vite",
      "React Icons",
    ],
    live: "https://djpraxx.com",
    image: "/projectimgs/DJ_Praxx_Home.webp",
    bestProject: true,
  },
  {
    title: "HRM - Human Resource Management System",
    description:
      "A comprehensive SaaS recruitment platform featuring automated job postings, application tracking (ATS), and resume management. Integrated Jitsi for in-app video interviews, Cloudinary for media, and Resend for automated candidate communications. Built with a secure RBAC system, refresh-token workflows, and Node-Cron for scheduled recruitment tasks.",
    tech: [
      "MERN Stack",
      "React 19",
      "Jitsi Meet",
      "Cloudinary",
      "Resend",
      "JWT & OAuth",
      "React Query",
      "Node-Cron",
      "Tailwind CSS",
      "MongoDB",
      "Google & LinkedIn OAuth",
      "Google sheets and forms Integration",
      "Google Maps API",
    ],
    live: "https://hrm-tan-three.vercel.app",
    github: "",
    image: "/projectimgs/HRM_Home.webp",
    bestProject: true,
  },
  {
    title: "HRM - Coming Soon Page",
    description:
      "A high-conversion landing page designed to build an early waitlist for the HRM platform. Features complex Framer Motion entrance animations, a responsive countdown timer, and seamless Google Sheets integration via API to capture and manage early-access user data in real-time.",
    tech: [
      "React",
      "Framer Motion",
      "Google Sheets API",
      "Tailwind CSS",
      "Vite",
      "React Icons",
    ],
    live: "https://hrm-coming-soon.vercel.app",
    github: "https://github.com/lagdhir-parth/HRM-Coming-Soon", // Add your link if available
    image: "/projectimgs/HRM_Coming_Soon.webp",
  },
  {
    title: "FlowSync",
    description:
      "Built a full-stack productivity platform with a drag-and-drop Kanban board, analytics dashboard, and AI-powered voice/chat assistants. Used React, Node.js, Express, and MongoDB with JWT authentication, integrating OpenRouter and Sarvam APIs for intelligent interactions.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Rechart JS",
      "Google Auth",
      "DnD Kit",
      "Sarvam API",
      "OpenRouter API",
      "Framer Motion",
      "React Query",
      "JWT",
    ],
    live: "https://flow-sync-mu.vercel.app",
    github: "https://github.com/lagdhir-parth/FlowSync",
    image: "/projectimgs/FlowSync_Home.webp",
    bestProject: true,
  },
  {
    title: "FinSight",
    description:
      "Role-based personal finance records & analytics platform built with JavaScript (Node.js/Express + MongoDB backend, React (Vite) frontend) featuring JWT auth via HttpOnly cookies, RBAC (viewer/analyst/admin), income/expense CRUD + search + soft delete/restore, and dashboard analytics (totals, category breakdowns, monthly trends).",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Rechart JS",
      "React Query",
      "CORS",
      "Tailwind",
      "JWT",
    ],
    live: "https://fin-sight-phi-ruddy.vercel.app",
    github: "https://github.com/lagdhir-parth/FinSight",
    image: "/projectimgs/FinSight_Home.webp",
    bestProject: true,
  },
  {
    title: "GreenClub",
    description:
      "GreenClub – Subscription-based platform where users fund charities and join monthly draw games using scores, earning rewards from pooled contributions.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Supabase",
      "React Query",
      "Tailwind",
      "Vercel",
      "Render",
      "JWT",
    ],
    live: "https://green-club-khaki.vercel.app",
    github: "https://github.com/lagdhir-parth/GreenClub",
    image: "/projectimgs/GreenClub_Home.webp",
  },
  {
    title: "MediStream HMS",
    description:
      "Full-stack Hospital Management System with JWT auth, appointments, billing & email notifications.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Vercel",
      "Render",
      "JWT",
      "Nodemailer",
      "Resend",
    ],
    live: "https://hospital-management-system-rho-mocha.vercel.app",
    github: "https://github.com/lagdhir-parth/Hospital_Management_System",
    image: "/projectimgs/HMS_Home.webp",
    bestProject: true,
  },
  {
    title: "Lost & Found Hub",
    description:
      "Campus lost & found platform with search, reporting & full MERN integration.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    live: "",
    github: "https://github.com/lagdhir-parth/Lost-and-found-hub-for-campus",
    image: "/projectimgs/LostFound_Home.webp",
  },
  {
    title: "UI-Project",
    description:
      "A sleek, responsive UI design built with React and Tailwind CSS, showcasing modern web aesthetics.",
    tech: ["React", "Tailwind CSS"],
    live: "",
    github: "https://github.com/lagdhir-parth/UI-Project",
    image: "/projectimgs/UIProject_Home.webp",
  },
  {
    title: "TechMart E-Commerce",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, and secure checkout built using the HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "",
    github: "https://github.com/lagdhir-parth/First-Project-Tech-Mart",
    image: "/projectimgs/TechMart_Home.webp",
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects - Lagdhir Parth";
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-(--primary-text) text-center mb-4 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) bg-clip-text "
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-(--secondary-text) text-center mb-20 max-w-2xl mx-auto"
      >
        Hands-on MERN projects showcasing full-stack development from UI to
        deployment.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group bg-(--color-hover)/50 backdrop-blur-xl border border-(--chat-border)/50 rounded-3xl p-8 hover:border-(--primary-accent)/70 hover:bg-(--color-hover)/70 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-4"
          >
            {project.bestProject && (
              <span
                className="inline-flex items-center gap-1.5 absolute top-10 left-10 px-3 py-1 z-10 text-xs font-bold uppercase tracking-wider mb-4 bg-(--error-red) text-white shadow-md transform group-hover:-rotate-6 transition-transform duration-300"
                style={{
                  clipPath:
                    "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
                }}
              >
                <span className="opacity-70">#</span>
                Best Project
              </span>
            )}

            {/* Optional: Wrap image and header in a link to the primary destination so the card remains interactive */}
            <a
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-80 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-(--primary-text) mb-4 group-hover:text-(--primary-accent) transition-colors">
                {project.title}
              </h3>
            </a>

            <p className="text-(--secondary-text) mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-(--primary-accent)/20 text-(--primary-accent) rounded-full text-sm font-medium border border-(--primary-accent)/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-(--secondary-text) hover:text-(--primary-accent) transition-colors p-3 rounded-xl hover:bg-(--color-hover)/50"
                >
                  <LuExternalLink size={20} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-(--secondary-text) hover:text-(--primary-accent) transition-colors p-3 rounded-xl hover:bg-(--color-hover)/50"
                >
                  <LuGithub size={20} />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Projects;
