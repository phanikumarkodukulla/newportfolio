import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { isDark } = useTheme();

  const handleCallNow = () => {
    window.location.href = "tel:+919876543210";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: "fab fa-instagram",
      type: "fa",
      url: "https://www.instagram.com/k.phani_kumar_?igsh=N251MjM2bHR6aHdw",
    },
    {
      icon: "fab fa-linkedin",
      type: "fa",
      url: "https://www.linkedin.com/in/kodukulla-phani-kumar-sharma-63a268302",
    },
    {
      icon: "fab fa-facebook",
      type: "fa",
      url: "https://www.facebook.com/profile.php?id=61559791637578",
    },
    {
      icon: "fab fa-snapchat",
      type: "fa",
      url: "https://www.snapchat.com/add/phanikumar2122",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated background glows */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto w-full backdrop-blur-xl border rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col items-center text-center">
          {/* Contact Info Header */}
          <div className="mb-12 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📧</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
                Contact
              </h1>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-8"></div>
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-lg max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Feel free to reach out for any questions, networking, or general
              inquiries!
            </p>
          </div>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 mb-12 w-full max-w-md"
          >
            {/* Location */}
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-icons text-2xl text-blue-400">
                  location_on
                </span>
              </div>
              <div>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Location
                </p>
                <p
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Parvathipuram manyam, Andhra Pradesh, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-icons text-2xl text-blue-400">
                  mail
                </span>
              </div>
              <div>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Email
                </p>
                <a
                  href="mailto:contact.phanikumarkodukulla@gmail.com"
                  className={`text-xs sm:text-base font-semibold hover:text-blue-400 transition ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  contact.phanikumarkodukulla@gmail.com
                </a>
              </div>
            </div>

            {/* Call Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallNow}
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-icons text-xl">phone</span>
              Call Now
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center w-full border-t border-white/10 pt-8"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all transform hover:scale-110"
              >
                {link.type === "fa" ? (
                  <i className={`${link.icon} text-lg`}></i>
                ) : (
                  <span className="material-icons text-xl">{link.icon}</span>
                )}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center text-white z-50 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="material-icons text-2xl">arrow_upward</span>
      </motion.button>
    </div>
  );
}
