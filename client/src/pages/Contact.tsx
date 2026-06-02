// src/pages/Contact.tsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { sendContactEmail } from "../api/index";

const contactInfo = [
  {
    icon: IoIosMail,
    label: "Email",
    value: "parthlagdhir2007@gmail.com",
  },
  { icon: FaPhoneAlt, label: "Phone", value: "+91 9624688925" },
  { icon: FiMapPin, label: "Location", value: "Rajkot, Gujarat, India" },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/lagdhir-parth",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/lagdhir-parth-86662233b/",
    label: "LinkedIn",
  },
  {
    icon: IoIosMail,
    href: "mailto:parthlagdhir2007@gmail.com",
    label: "Email",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    await sendContactEmail(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-4 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black text-(--primary-text) mb-6 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) bg-clip-text">
          Get In Touch
        </h1>
        <p className="text-xl text-(--secondary-text)">
          parthlagdhir2007@gmail.com • +91 9624688925
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-(--primary-text) mb-8">
            Let's Connect
          </h3>
          {contactInfo.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-(--color-hover)/50 backdrop-blur rounded-2xl border border-(--chat-border)/50 hover:border-(--primary-accent)/50 hover:bg-(--color-hover)/70 transition-all duration-300 group cursor-pointer"
            >
              <Icon className="w-8 h-8 text-(--primary-accent) group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-(--muted-text) text-sm">{label}</p>
                <p className="text-(--primary-text) font-semibold">{value}</p>
              </div>
            </motion.div>
          ))}

          {/* Socials */}
          <div className="pt-8 border-t border-(--chat-border)/50">
            <h4 className="text-xl font-bold text-(--primary-text) mb-6">
              Social
            </h4>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-(--color-hover)/50 backdrop-blur rounded-2xl border border-(--chat-border)/50 flex items-center justify-center hover:border-(--primary-accent) hover:bg-(--primary-accent)/20 hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-(--secondary-text) group-hover:text-(--primary-accent)" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl font-bold text-(--primary-text) mb-8">
            Send Message
          </h3>

          {/* Row 1: Name Field (Full width on mobile, spans full grid or splits depending on layout preference) */}
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-5 bg-(--color-hover)/50 backdrop-blur border border-(--chat-border)/50 rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:border-(--primary-accent) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300"
            />
          </div>

          {/* Row 2: Email & Mobile Number (Side-by-side on desktop, stacked on mobile) */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-5 bg-(--color-hover)/50 backdrop-blur border border-(--chat-border)/50 rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:border-(--primary-accent) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300"
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-5 bg-(--color-hover)/50 backdrop-blur border border-(--chat-border)/50 rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:border-(--primary-accent) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300"
            />
          </div>

          {/* Row 3: Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-5 bg-(--color-hover)/50 backdrop-blur border border-(--chat-border)/50 rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:border-(--primary-accent) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300"
          />

          {/* Row 4: Message Textarea */}
          <textarea
            name="message"
            rows={6}
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-5 bg-(--color-hover)/50 backdrop-blur border border-(--chat-border)/50 rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:border-(--primary-accent) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300 resize-vertical"
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-linear-to-r from-(--primary-accent) to-(--accent-hover) text-(--color-secondary) p-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.main>
  );
};

export default Contact;
