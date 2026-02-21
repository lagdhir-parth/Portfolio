// src/pages/About.tsx
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-4 max-w-6xl mx-auto"
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
            src="/ProfilePic.png"
            alt="Parth Lagdhir"
            className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-(--color-hover) p-4 shadow-2xl border-4 border-(--primary-accent)/20"
          />
          <a
            href="/Resume.pdf" // Your attached resume!
            download
            className="mt-8 inline-flex items-center gap-3 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) text-(--color-secondary) px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Download size={24} />
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
            MERN Stack Developer
          </h2>
          <p className="text-xl text-(--secondary-text) leading-relaxed">
            2nd-year B.Tech Computer Engineering student at{" "}
            <span className="font-semibold text-(--primary-accent)">
              Atmiya University, Rajkot
            </span>
            . Passionate about building scalable web applications with the MERN
            stack.
          </p>
          <p className="text-lg text-(--muted-text) leading-relaxed">
            Creator of{" "}
            <span className="font-semibold text-(--primary-accent)">
              MediStream HMS
            </span>{" "}
            - a production-ready hospital management system deployed on Vercel
            with JWT auth, role-based access, and email integration.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-(--color-hover)/50 backdrop-blur p-6 rounded-2xl border border-(--chat-border)/50">
              <h3 className="text-2xl font-bold text-(--primary-text)">
                Projects
              </h3>
              <p className="text-(--primary-accent) font-semibold">3+</p>
            </div>
            <div className="bg-(--color-hover)/50 backdrop-blur p-6 rounded-2xl border border-(--chat-border)/50">
              <h3 className="text-2xl font-bold text-(--primary-text)">
                Experience
              </h3>
              <p className="text-(--primary-accent) font-semibold">2 Years</p>
            </div>
            <div className="bg-(--color-hover)/50 backdrop-blur p-6 rounded-2xl border border-(--chat-border)/50">
              <h3 className="text-2xl font-bold text-(--primary-text)">
                Accuracy
              </h3>
              <p className="text-(--primary-accent) font-semibold">100%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-4xl font-bold text-(--primary-text) mb-16">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full mx-auto">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind",
            "TypeScript",
            "Git/GitHub",
            "HTML/CSS",
            "JWT",
            "JavaScript",
            "Java",
            "Python",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-(--color-hover)/50 backdrop-blur p-6 rounded-3xl border border-(--chat-border)/50 hover:border-(--primary-accent)/70 hover:bg-(--primary-accent)/10 hover:scale-110 transition-all duration-500 cursor-default shadow-xl"
            >
              <h4 className="text-xl font-bold text-(--primary-text) group-hover:text-(--primary-accent)">
                {skill}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
