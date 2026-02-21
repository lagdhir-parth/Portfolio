// src/pages/Projects.tsx
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
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
        "Resender",
      ],
      live: "https://hospital-management-system-rho-mocha.vercel.app",
      github: "https://github.com/lagdhir-parth/Hospital_Management_System",
      image: "/HMS_Home.png",
    },
    {
      title: "Lost & Found Hub",
      description:
        "Campus lost & found platform with search, reporting & full MERN integration.",
      tech: ["React", "Express", "MongoDB", "Node.js"],
      live: "",
      github: "https://github.com/lagdhir-parth/Lost-and-found-hub-for-campus",
      image: "/LostFound_Home.png",
    },
    {
      title: "UI-Project",
      description:
        "A sleek, responsive UI design built with React and Tailwind CSS, showcasing modern web aesthetics.",
      tech: ["React", "Tailwind CSS"],
      live: "",
      github: "https://github.com/lagdhir-parth/UI-Project",
      image: "/UIProject_Home.png",
    },
    {
      title: "TechMart E-Commerce",
      description:
        "A full-stack e-commerce platform with product listings, shopping cart, and secure checkout built using the HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "",
      github: "https://github.com/lagdhir-parth/First-Project-Tech-Mart",
      image: "/TechMart_Home.png",
    },
  ];

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
            className="group bg-(--color-hover)/50 backdrop-blur-xl border border-(--chat-border)/50 rounded-3xl p-8 hover:border-(--primary-accent)/70 hover:bg-(--color-hover)/70 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-2xl font-bold text-(--primary-text) mb-4 group-hover:text-(--primary-accent) transition-colors">
              {project.title}
            </h3>
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
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-(--secondary-text) hover:text-(--primary-accent) transition-colors p-3 rounded-xl hover:bg-(--color-hover)/50"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Projects;
