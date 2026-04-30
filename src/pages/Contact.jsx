import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:phanikumark715@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

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
    { icon: "fab fa-instagram", type: "fa", url: "https://instagram.com" },
    { icon: "fab fa-linkedin", type: "fa", url: "https://linkedin.com" },
    { icon: "fab fa-facebook", type: "fa", url: "https://facebook.com" },
    { icon: "fab fa-snapchat", type: "fa", url: "https://snapchat.com" },
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
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📧</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
                  Contact
                </h1>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>

            {/* Get In Touch */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-lg">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-8 mb-12">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-2xl text-blue-400">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">
                    Parvathipuram manyam, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-2xl text-blue-400">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:phanikumark715@gmail.com"
                    className="text-white font-semibold hover:text-blue-400 transition"
                  >
                    phanikumark715@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
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
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-blue-950/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 sm:p-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Let's start a conversation
            </p>

            {/* Form */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-blue-400 font-semibold mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-blue-400 font-semibold mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, question, or how I can help you..."
                  rows="6"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendEmail}
                  className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-xl">mail</span>
                  Send Email
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCallNow}
                  className="px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-xl">phone</span>
                  Call Now
                </motion.button>
              </div>
            </div>
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
