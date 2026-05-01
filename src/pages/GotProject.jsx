import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Globe,
  BrainCircuit,
  Wrench,
  Server,
  Users,
  Rocket,
  Send,
  Search,
  Cpu,
  Database,
} from "lucide-react";

export default function GotProject() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    description: "",
    budget: 5000,
    teamSize: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Project Inquiry: ${formData.title}`,
    );
    const body = encodeURIComponent(
      `Hello K.V.K. Phani Kumar,\n\n` +
        `I have a new project inquiry. Here are the details:\n\n` +
        `Project Title: ${formData.title}\n` +
        `Client Email: ${formData.email}\n` +
        `Budget Range: $${formData.budget}\n` +
        `Team Size: ${formData.teamSize || "Not specified"}\n\n` +
        `Project Description:\n${formData.description}\n\n` +
        `Best regards,`,
    );
    const mailtoLink = `mailto:contact.phanikumarkodukulla@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const services = [
    { title: "Web Application Development", icon: <Globe size={24} /> },
    { title: "ML Project Development", icon: <BrainCircuit size={24} /> },
    { title: "Website Maintenance", icon: <Wrench size={24} /> },
    { title: "Deploying Systems", icon: <Server size={24} /> },
    { title: "Collaboration with Team", icon: <Users size={24} /> },
    { title: "Web Scraping", icon: <Search size={24} /> },
    { title: "API Development", icon: <Cpu size={24} /> },
    { title: "Database Design", icon: <Database size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? "" : "bg-gray-50/30"}`}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Rocket
              size={40}
              className={isDark ? "text-blue-400" : "text-blue-600"}
            />
            <h1
              className={`text-4xl sm:text-5xl font-bold font-display ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Got a Project?
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Let's turn your ideas into reality. Whether you need a web
            application, machine learning model, or system deployment, I'm here
            to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Services Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2
              className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              My Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-blue-500/50"
                      : "bg-white border-black/10 hover:border-blue-500/50 shadow-sm"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className={`backdrop-blur-xl border rounded-2xl p-8 sm:p-10 ${
              isDark
                ? "bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-blue-950/40 border-blue-500/20"
                : "bg-white border-blue-200 shadow-xl"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              Project Details
            </h2>

            <form onSubmit={handleSendEmail} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  className={`block font-semibold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  Your Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all ${
                    isDark
                      ? "bg-slate-900/50 border-blue-500/30 text-white placeholder-gray-500 focus:border-blue-400"
                      : "bg-gray-50 border-blue-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Title */}
              <div>
                <label
                  className={`block font-semibold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. E-commerce Website, ML Prediction Model"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all ${
                    isDark
                      ? "bg-slate-900/50 border-blue-500/30 text-white placeholder-gray-500 focus:border-blue-400"
                      : "bg-gray-50 border-blue-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Description */}
              <div>
                <label
                  className={`block font-semibold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  Project Description
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all resize-none ${
                    isDark
                      ? "bg-slate-900/50 border-blue-500/30 text-white placeholder-gray-500 focus:border-blue-400"
                      : "bg-gray-50 border-blue-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Budget Range */}
              <div>
                <label
                  className={`block font-semibold mb-2 flex justify-between ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  <span>Budget Range (USD)</span>
                  <span className={isDark ? "text-white" : "text-gray-900"}>
                    ${Number(formData.budget).toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  name="budget"
                  min="500"
                  max="50000"
                  step="500"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full accent-blue-500 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div
                  className={`flex justify-between text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  <span>$500</span>
                  <span>$50,000+</span>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label
                  className={`block font-semibold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  Team Size (Optional)
                </label>
                <input
                  type="text"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  placeholder="e.g. 1-3 members"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all ${
                    isDark
                      ? "bg-slate-900/50 border-blue-500/30 text-white placeholder-gray-500 focus:border-blue-400"
                      : "bg-gray-50 border-blue-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
