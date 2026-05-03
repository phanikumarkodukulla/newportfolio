import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useThemeClasses } from "../context/useThemeClasses";

export default function Contact() {
  const { isDark } = useTheme();
  const classes = useThemeClasses();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCallNow = () => {
    window.location.href = "tel:+919014353991";
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact.phanikumarkodukulla@gmail.com?subject=${encodeURIComponent(
      formData.name,
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contactMethods = [
    {
      icon: "map-pin",
      label: "Location",
      value: "Parvathipuram Manyam, Andhra Pradesh, India",
      isBrand: false,
    },
    {
      icon: "envelope",
      label: "Email",
      value: "contact.phanikumarkodukulla@gmail.com",
      isBrand: false,
      link: "mailto:contact.phanikumarkodukulla@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: "instagram",
      isBrand: true,
      url: "https://www.instagram.com/k.phani_kumar_?igsh=N251MjM2bHR6aHdw",
      label: "Instagram",
    },
    {
      icon: "linkedin",
      isBrand: true,
      url: "https://www.linkedin.com/in/kodukulla-phani-kumar-sharma-63a268302",
      label: "LinkedIn",
    },
    {
      icon: "facebook",
      isBrand: true,
      url: "https://www.facebook.com/profile.php?id=61559791637578",
      label: "Facebook",
    },
    {
      icon: "snapchat",
      isBrand: true,
      url: "https://www.snapchat.com/add/phanikumar2122",
      label: "Snapchat",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-hidden relative transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Animated background glows - Responsive */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          background: isDark ? "#3B82F6" : "#60A5FA",
        }}
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        style={{
          background: isDark ? "#2563EB" : "#3B82F6",
        }}
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section - Responsive */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 sm:mb-12 lg:mb-16 w-full max-w-3xl"
        >
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
            style={{ color: "var(--accent-color)" }}
          >
            Let's Connect
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl px-2 sm:px-4 transition-colors duration-300"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Main Content Grid - Responsive */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-0 sm:px-4">
          {/* Left Side - Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 sm:space-y-6"
          >
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 transition-colors duration-300"
              style={{ color: "var(--text-primary)" }}
            >
              Contact Information
            </h2>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ translateX: 8 }}
                className="group relative rounded-2xl p-4 sm:p-5 lg:p-6 backdrop-blur-lg border transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.6)",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.borderColor = isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.6)";
                  e.currentTarget.style.borderColor = isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.4)";
                }}
                onClick={() => {
                  if (method.link) {
                    window.location.href = method.link;
                  }
                }}
              >
                <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(37, 99, 235, 0.2)"
                        : "rgba(37, 99, 235, 0.15)",
                      borderColor: isDark
                        ? "rgba(37, 99, 235, 0.4)"
                        : "rgba(37, 99, 235, 0.3)",
                    }}
                  >
                    <i
                      className={`${method.isBrand ? "fab" : "fas"} fa-${method.icon} text-base sm:text-lg`}
                      style={{ color: "var(--accent-color)" }}
                    ></i>
                  </div>
                  <div className="flex-1 pt-0 sm:pt-1 min-w-0">
                    <p
                      className="text-xs sm:text-sm font-semibold transition-colors duration-300"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {method.label}
                    </p>
                    <p
                      className="font-bold mt-1 transition-colors duration-300 break-words text-sm sm:text-base"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Call Button - Responsive */}
            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCallNow}
              className="w-full mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-white shadow-lg transition-all text-base sm:text-lg flex items-center justify-center gap-2 flex-shrink-0"
              style={{
                backgroundColor: "var(--color-primary)",
                boxShadow: isDark
                  ? "0 0 30px rgba(37, 99, 235, 0.3)"
                  : "0 0 20px rgba(37, 99, 235, 0.2)",
              }}
            >
              <i className="fas fa-phone"></i>
              Call Now
            </motion.button>
          </motion.div>

          {/* Right Side - Contact Form - Responsive */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border transition-all"
            style={{
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.7)",
              borderColor: isDark
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.7)";
            }}
          >
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 transition-colors duration-300"
              style={{ color: "var(--text-primary)" }}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 transition-all focus:outline-none text-sm sm:text-base"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 1)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-primary)";
                    e.target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(255, 255, 255, 1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)";
                    e.target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 1)";
                  }}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 transition-all focus:outline-none text-sm sm:text-base"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 1)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-primary)";
                    e.target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(255, 255, 255, 1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)";
                    e.target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 1)";
                  }}
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your message here..."
                  rows="4"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 transition-all focus:outline-none resize-none text-sm sm:text-base"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 1)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-primary)";
                    e.target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(255, 255, 255, 1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)";
                    e.target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 1)";
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-white shadow-lg transition-all mt-4 sm:mt-6 text-sm sm:text-base"
                style={{
                  backgroundColor: "var(--color-primary)",
                  boxShadow: isDark
                    ? "0 0 30px rgba(37, 99, 235, 0.3)"
                    : "0 0 20px rgba(37, 99, 235, 0.2)",
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Links Section - Responsive */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 w-full max-w-6xl px-4 sm:px-0"
          style={{
            borderTopColor: isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            Connect With Me On Social
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all"
                style={{
                  backgroundColor: isDark
                    ? "rgba(37, 99, 235, 0.1)"
                    : "rgba(37, 99, 235, 0.05)",
                  borderColor: isDark
                    ? "rgba(37, 99, 235, 0.3)"
                    : "rgba(37, 99, 235, 0.2)",
                  borderWidth: "1px",
                  color: "var(--accent-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(37, 99, 235, 0.2)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDark
                    ? "rgba(37, 99, 235, 0.1)"
                    : "rgba(37, 99, 235, 0.05)";
                  e.currentTarget.style.borderColor = isDark
                    ? "rgba(37, 99, 235, 0.3)"
                    : "rgba(37, 99, 235, 0.2)";
                }}
                title={link.label}
              >
                <i
                  className={`${link.isBrand ? "fab" : "fas"} fa-${link.icon}`}
                ></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 text-center"
        >
          <p
            className="text-xs sm:text-sm transition-colors duration-300"
            style={{ color: "var(--text-tertiary)" }}
          >
            I'll get back to you as soon as possible
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
