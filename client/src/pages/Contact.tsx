// src/pages/Contact.tsx
import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { sendContactEmail } from "../api/index";
import { useEffect } from "react";

type ContactFormData = {
  name: string;
  email: string;
  mobileNumber: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

type SubmissionState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  mobileNumber: "",
  subject: "",
  message: "",
};

const validateForm = (formData: ContactFormData) => {
  const errors: ContactFormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
  }

  if (!formData.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!formData.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters long.";
  }

  return errors;
};

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
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact - Lagdhir Parth";
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (
      submissionState.type === "success" ||
      submissionState.type === "error"
    ) {
      // Removed 'const' to update the outer 'timer' variable
      timer = setTimeout(() => {
        setSubmissionState({ type: "idle", message: "" });
      }, 5000);
    }

    return () => {
      // This will now correctly clear the timer if it was set
      clearTimeout(timer);
    };
  }, [submissionState]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormData;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[fieldName];
        return nextErrors;
      });
    }

    if (submissionState.type !== "idle") {
      setSubmissionState({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setSubmissionState({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});
    setSubmissionState({
      type: "idle",
      message: "",
    });

    try {
      await sendContactEmail(formData);

      setFormData(initialFormData);
      setSubmissionState({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
      setSubmissionState({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

          {submissionState.type !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl border px-5 py-4 text-sm font-medium ${
                submissionState.type === "success"
                  ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                  : "border-rose-400/40 bg-rose-500/10 text-rose-200"
              }`}
            >
              {submissionState.message}
            </motion.div>
          )}

          {/* Row 1: Name Field (Full width on mobile, spans full grid or splits depending on layout preference) */}
          <div className="w-full">
            <input
              type="text"
              name="name"
              autoComplete="name"
              aria-invalid={Boolean(fieldErrors.name)}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-5 bg-(--color-hover)/50 backdrop-blur border rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300 ${
                fieldErrors.name
                  ? "border-rose-400/60 focus:border-rose-400"
                  : "border-(--chat-border)/50 focus:border-(--primary-accent)"
              }`}
            />
            {fieldErrors.name && (
              <p className="mt-2 text-sm text-rose-300">{fieldErrors.name}</p>
            )}
          </div>

          {/* Row 2: Email & Mobile Number (Side-by-side on desktop, stacked on mobile) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                aria-invalid={Boolean(fieldErrors.email)}
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-5 bg-(--color-hover)/50 backdrop-blur border rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300 ${
                  fieldErrors.email
                    ? "border-rose-400/60 focus:border-rose-400"
                    : "border-(--chat-border)/50 focus:border-(--primary-accent)"
                }`}
              />
              {fieldErrors.email && (
                <p className="mt-2 text-sm text-rose-300">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobileNumber"
                autoComplete="tel"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-5 bg-(--color-hover)/50 backdrop-blur border border-(--chat-border)/50 rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:border-(--primary-accent) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300"
              />
            </div>
          </div>

          {/* Row 3: Subject */}
          <div>
            <input
              type="text"
              name="subject"
              autoComplete="off"
              aria-invalid={Boolean(fieldErrors.subject)}
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full p-5 bg-(--color-hover)/50 backdrop-blur border rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300 ${
                fieldErrors.subject
                  ? "border-rose-400/60 focus:border-rose-400"
                  : "border-(--chat-border)/50 focus:border-(--primary-accent)"
              }`}
            />
            {fieldErrors.subject && (
              <p className="mt-2 text-sm text-rose-300">
                {fieldErrors.subject}
              </p>
            )}
          </div>

          {/* Row 4: Message Textarea */}
          <div>
            <textarea
              name="message"
              rows={6}
              aria-invalid={Boolean(fieldErrors.message)}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-5 bg-(--color-hover)/50 backdrop-blur border rounded-2xl text-(--primary-text) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300 resize-vertical ${
                fieldErrors.message
                  ? "border-rose-400/60 focus:border-rose-400"
                  : "border-(--chat-border)/50 focus:border-(--primary-accent)"
              }`}
            />
            {fieldErrors.message && (
              <p className="mt-2 text-sm text-rose-300">
                {fieldErrors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-(--primary-accent) to-(--accent-hover) text-(--color-secondary) p-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-lg flex items-center justify-center gap-3"
          >
            {isSubmitting && (
              <span
                className="h-5 w-5 animate-spin rounded-full border-2 border-(--color-secondary)/30 border-t-(--color-secondary)"
                aria-hidden="true"
              />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </motion.main>
  );
};

export default Contact;
