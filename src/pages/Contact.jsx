import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { isDark } = useTheme();
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
      className={`min-h-screen overflow-hidden relative transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"}`}
    >
      {/* Animated background glows */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-600">
            Let's Connect
          </h1>
          <p
            className={`text-lg sm:text-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2
              className={`text-2xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Contact Information
            </h2>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ translateX: 8 }}
                className={`group relative rounded-2xl p-6 backdrop-blur-lg border transition-all duration-300 cursor-pointer ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-white/60 border-white/40 hover:bg-white/80 hover:border-white/60 shadow-lg"
                }`}
                onClick={() => {
                  if (method.link) {
                    window.location.href = method.link;
                  }
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-to-r, var(--tw-gradient-stops)`,
                  }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <i
                      className={`${method.isBrand ? "fab" : "fas"} fa-${method.icon} text-lg text-blue-500`}
                    ></i>
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className={`text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {method.label}
                    </p>
                    <p
                      className={`font-bold mt-1 transition-colors ${isDark ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"}`}
                    >
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Call Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCallNow}
              className="w-full mt-8 px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 text-lg"
            >
              <i className="fas fa-phone"></i>
              Call Now
            </motion.button>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            className={`rounded-3xl p-8 backdrop-blur-xl border transition-all ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-white/70 border-white/50 shadow-xl"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
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
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-blue-500 ${
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-500 focus:bg-white/15"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                  }`}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
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
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-blue-500 ${
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-500 focus:bg-white/15"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                  }`}
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
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
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-blue-500 resize-none ${
                    isDark
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-500 focus:bg-white/15"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                  }`}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-600/50 transition-all mt-6"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-12 border-t border-white/10 w-full max-w-6xl"
        >
          <h2
            className={`text-2xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Connect With Me On Social
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-2xl transition-all hover:bg-blue-500/20 hover:border-blue-500/60 ${isDark ? "text-blue-400" : "text-blue-600"}`}
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
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p
            className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}
          >
            I'll get back to you as soon as possible
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
