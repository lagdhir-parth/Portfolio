// src/components/Navbar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-(--color-primary) text-(--primary-text) shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-(--primary-accent) to-(--accent-hover) bg-clip-text text-transparent"
          >
            Lagdhir Parth
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-(--primary-accent) px-3 py-2 rounded-lg font-medium ${
                  isActive ? "text-(--primary-accent) bg-(--color-hover)" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-(--primary-accent) px-3 py-2 rounded-lg font-medium ${
                  isActive ? "text-(--primary-accent) bg-(--color-hover)" : ""
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-(--primary-accent) px-3 py-2 rounded-lg font-medium ${
                  isActive ? "text-(--primary-accent) bg-(--color-hover)" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-(--primary-accent) px-3 py-2 rounded-lg font-medium ${
                  isActive ? "text-(--primary-accent) bg-(--color-hover)" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-(--color-hover) transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 border-t border-(--chat-border)"
            >
              <NavLink
                to="/"
                className="block px-4 py-3 hover:bg-(--color-hover) hover:text-(--primary-accent) transition-all"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="block px-4 py-3 hover:bg-(--color-hover) hover:text-(--primary-accent) transition-all"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-3 hover:bg-(--color-hover) hover:text-(--primary-accent) transition-all"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-4 py-3 hover:bg-(--color-hover) hover:text-(--primary-accent) transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
