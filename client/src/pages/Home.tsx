// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "React Enthusiast",
  "B.Tech Student",
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1),
      );

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-(--color-secondary) via-(--color-primary) to-(--color-hover) px-4 py-20 overflow-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row justify-evenly items-center gap-13 md:gap-0 text-center md:text-left">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 max-w-lg mx-auto md:mx-0"
        >
          {/* Headlines */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h1 className="text-5xl md:text-7xl font-black text-(--primary-text) leading-tight">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-(--primary-accent) to-(--accent-hover) bg-clip-text text-transparent">
                Lagdhir Parth
              </span>
            </h1>
            <motion.p
              className="text-2xl md:text-3xl text-(--secondary-text) font-light flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {displayText ? (
                displayText
              ) : (
                <span className="invisible">&nbsp;</span>
              )}
              <motion.span
                className="inline-block w-0.5 h-7 bg-(--secondary-text)"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </motion.p>
            <p className="text-xl md:text-2xl text-(--muted-text) max-w-md mx-auto md:mx-0 leading-relaxed">
              2nd Year B.Tech Computer Engineering | Building scalable MERN apps
              like MediStream HMS | Rajkot, Gujarat
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="group bg-(--primary-accent) hover:bg-(--accent-hover) text-(--color-secondary) px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              View Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="/Resume.pdf" // Add your resume
              download
              className="border-2 border-(--secondary-text) hover:border-(--primary-accent) text-(--secondary-text) hover:text-(--primary-accent) px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-(--color-hover)/50 backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right part */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="size-80 md:size-96 rounded-3xl bg-(--color-hover) p-4 shadow-2xl border-4 border-(--primary-accent)/20 flex items-center justify-center"
        >
          {/* Profile Image */}
          <img
            src="/ProfilePic.png" // Replace with your photo
            alt="Lagdhir Parth - Developer"
            className="size-full rounded-2xl object-cover shadow-xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-(--secondary-text) rounded-full flex justify-center">
          <div className="w-1 h-3 bg-(--secondary-text) rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
