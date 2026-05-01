import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../styles/materialIcons.css";

const skillsData = [
  {
    name: "C",
    category: "programming language",
    level: "Intermediate",
    percentage: 70,
    icon: "terminal",
    description:
      "Foundational knowledge of low-level programming, memory management, and embedded systems using the C language.",
  },
  {
    name: "C++",
    category: "programming language",
    level: "Intermediate",
    percentage: 78,
    icon: "code",
    description:
      "Strong grasp of OOP principles, STL, and algorithmic problem-solving using C++, especially for systems and competitive programming.",
  },
  {
    name: "Python",
    category: "programming language",
    level: "Advanced",
    percentage: 90,
    icon: "language",
    description:
      "Proficient in scripting, backend development, data analysis, and automation with Python. Experienced with scientific computing and simulations.",
  },
  {
    name: "HTML",
    category: "frontend",
    level: "Advanced",
    percentage: 95,
    icon: "language",
    description:
      "Expert in semantic HTML5, accessibility best practices, and modern web standards for structuring web content.",
  },
  {
    name: "CSS",
    category: "frontend",
    level: "Advanced",
    percentage: 90,
    icon: "style",
    description:
      "Advanced CSS3 skills including Flexbox, Grid, animations, responsive design, and modern layout techniques.",
  },
  {
    name: "JavaScript",
    category: "programming language",
    level: "Advanced",
    percentage: 88,
    icon: "language",
    description:
      "Expert in modern JavaScript ES6+, DOM manipulation, async programming, and building interactive web applications.",
  },
  {
    name: "Java",
    category: "programming language",
    level: "Intermediate",
    percentage: 75,
    icon: "language",
    description:
      "Solid understanding of OOP principles, data structures, and enterprise application development with Java.",
  },
  {
    name: "React",
    category: "frontend",
    level: "Basics",
    percentage: 75,
    icon: "settings",
    description:
      "Proficient in React hooks, component lifecycle, state management, and building scalable single-page applications.",
  },
  {
    name: "jQuery",
    category: "framework",
    level: "Intermediate",
    percentage: 75,
    icon: "call_split",
    description:
      "Experienced with jQuery for DOM manipulation, event handling, and AJAX requests in web applications.",
  },
  {
    name: "Bootstrap",
    category: "framework",
    level: "Advanced",
    percentage: 88,
    icon: "widgets",
    description:
      "Expert in Bootstrap framework for rapid responsive web development and component-based UI design.",
  },
  {
    name: "Tailwind CSS",
    category: "framework",
    level: "Intermediate",
    percentage: 80,
    icon: "palette",
    description:
      "Proficient in utility-first CSS framework for building custom designs rapidly and efficiently.",
  },
  {
    name: "Font Awesome",
    category: "framework",
    level: "Intermediate",
    percentage: 80,
    icon: "star",
    description:
      "Expert at using the Font Awesome library to create a highly iconic look with a wide range of icons, delivering a sleek, polished user interface",
  },
  {
    name: "Django",
    category: "backend",
    level: "Advanced",
    percentage: 85,
    icon: "dns",
    description:
      "Experience building robust web applications with Django's MVC architecture, ORM, and admin customization.",
  },
  {
    name: "Flask",
    category: "backend",
    level: "Intermediate",
    percentage: 78,
    icon: "local_fire_department",
    description:
      "Skilled in lightweight Python web framework for building APIs and microservices with custom architecture.",
  },
  {
    name: "Node.js",
    category: "backend",
    level: "Intermediate",
    percentage: 75,
    icon: "lan",
    description:
      "Competent in server-side JavaScript development, building REST APIs, and working with npm ecosystem.",
  },
  {
    name: "SQL",
    category: "database",
    level: "Advanced",
    percentage: 88,
    icon: "storage",
    description:
      "Expert in writing complex queries, database design, optimization, and working with relational databases.",
  },
  {
    name: "SQLite",
    category: "database",
    level: "Intermediate",
    percentage: 80,
    icon: "database",
    description:
      "Experienced with lightweight database for development, testing, and small-scale applications.",
  },
  {
    name: "Git",
    category: "devops",
    level: "Advanced",
    percentage: 90,
    icon: "source_control",
    description:
      "Expert in version control, branching strategies, merge conflict resolution, and collaborative development workflows.",
  },
  {
    name: "GitHub",
    category: "devops",
    level: "Advanced",
    percentage: 88,
    icon: "hub",
    description:
      "Proficient in repository management, CI/CD workflows, project collaboration, and GitHub Actions.",
  },
  {
    name: "MS Azure",
    category: "cloud",
    level: "Beginner",
    percentage: 60,
    icon: "cloud",
    description:
      "Basic understanding of Microsoft Azure cloud services and deployment strategies.",
  },
  {
    name: "Docker",
    category: "devops",
    level: "Intermediate",
    percentage: 75,
    icon: "dashboard",
    description:
      "Competent in containerizing applications, creating Dockerfiles, and managing container orchestration.",
  },
  {
    name: "NumPy",
    category: "ml",
    level: "Advanced",
    percentage: 85,
    icon: "calculate",
    description:
      "Expert in numerical computing, array operations, and mathematical functions for scientific applications.",
  },
  {
    name: "Pandas",
    category: "ml",
    level: "Advanced",
    percentage: 88,
    icon: "table_chart",
    description:
      "Proficient in data manipulation, analysis, and cleaning using pandas DataFrames and Series.",
  },
  {
    name: "Matplotlib",
    category: "ml",
    level: "Intermediate",
    percentage: 80,
    icon: "bar_chart",
    description:
      "Skilled in creating comprehensive data visualizations, plots, and charts for data analysis.",
  },
  {
    name: "BeautifulSoup",
    category: "ml",
    level: "Intermediate",
    percentage: 78,
    icon: "search",
    description:
      "Experienced in web scraping, HTML parsing, and data extraction from web pages.",
  },
  {
    name: "AJAX",
    category: "framework",
    level: "Intermediate",
    percentage: 75,
    icon: "swap_horiz",
    description:
      "Proficient in asynchronous web requests, dynamic content loading, and creating responsive user interfaces.",
  },
  {
    name: "Android Development",
    category: "mobile",
    level: "Beginner",
    percentage: 65,
    icon: "phone_android",
    description:
      "Basic knowledge of Android app development, UI design, and mobile application architecture.",
  },
  {
    name: "Postman",
    category: "tools",
    level: "Intermediate",
    percentage: 80,
    icon: "send",
    description:
      "Experienced in API testing, debugging, documentation, and automated testing workflows.",
  },
  {
    name: "AI Prompting",
    category: "tools",
    level: "Advanced",
    percentage: 90,
    icon: "smart_toy",
    description:
      "Expert in crafting effective prompts for AI models, understanding AI capabilities, and optimizing AI interactions for various tasks.",
  },
  {
    name: "Render",
    category: "tools",
    level: "Advanced",
    percentage: 85,
    icon: "cloud_upload",
    description:
      "Proficient in deploying and scaling web applications on the Render platform, configuring infrastructure-as-code, managing environments, and optimizing performance.",
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Advanced",
    percentage: 95,
    icon: "code",
    description:
      "Expert in using Visual Studio Code for efficient development—customizing extensions, leveraging integrated debugging, remote development, and productivity workflows.",
  },
];

export default function Skills() {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // New state for mobile modal

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "programming language", label: "Programming Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "framework", label: "Frameworks" },
    { id: "ml", label: "AI/ML" },
    { id: "devops", label: "DevOps" },
    { id: "cloud", label: "Cloud" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Tools" },
  ];

  useEffect(() => {
    const filtered = skillsData.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        activeFilter === "all" || skill.category === activeFilter;

      return matchesSearch && matchesFilter;
    });

    setFilteredSkills(filtered);
  }, [searchTerm, activeFilter]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isFilterModalOpen]);

  const stats = [
    { label: "Total Skills", value: skillsData.length },
    {
      label: "Advanced Level",
      value: skillsData.filter((s) => s.level === "Advanced").length,
    },
    {
      label: "Programming Languages",
      value: skillsData.filter((s) => s.category === "programming language")
        .length,
    },
    {
      label: "Frameworks & Libraries",
      value: skillsData.filter((s) => s.category === "framework").length,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300 bg-transparent">
      {/* Page Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          &lt;/ My <span className="text-blue-500">Tech Stack</span> &gt;
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Showcasing my expertise across various technologies, frameworks, and
          programming languages with proficiency levels and detailed insights.
        </motion.p>
      </div>

      {/* Controls Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border rounded-2xl p-6 mb-12 backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10 shadow-sm'}`}
      >
        {/* Search Bar & Mobile Filter Button */}
        <div className="flex gap-3 mb-2 md:mb-0">
          <div className="relative flex-1">
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500"></i>
            <input
              type="text"
              placeholder="Search skills (e.g., Python, React, Database...)"
              className={`w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors ${isDark ? 'bg-black/30 border-white/10 text-white placeholder-gray-500' : 'bg-white border-black/10 text-gray-900 placeholder-gray-400 shadow-sm'}`}
            />
          </div>

          {/* Mobile Filter Trigger */}
          <button
            className={`md:hidden flex items-center justify-center w-12 border rounded-xl text-blue-500 transition-colors ${isDark ? 'bg-black/30 border-white/10 hover:bg-white/10' : 'bg-white border-black/10 hover:bg-black/5 shadow-sm'}`}
          >
            <span className="material-icons">filter_list</span>
          </button>
        </div>

        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex flex-wrap gap-2 justify-center mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeFilter === cat.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : isDark
                  ? "bg-black/30 text-gray-300 hover:bg-black/50 border border-white/10"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-black/10 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Filter Modal Popup */}
      <AnimatePresence>
        {isFilterModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Modal Drawer */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              className={`fixed bottom-0 left-0 right-0 border-t p-6 rounded-t-3xl z-50 md:hidden max-h-[85vh] flex flex-col ${isDark ? 'bg-[#111] border-white/10' : 'bg-white border-black/10'}`}
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <h3 className={`text-xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <span className="material-icons text-blue-500">
                    filter_list
                  </span>
                  Filters
                </h3>
                <button
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isDark ? 'bg-white/10 text-gray-400 hover:text-white' : 'bg-black/5 text-gray-600 hover:text-black'}`}
                >
                  <span className="material-icons text-sm">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto pb-6 custom-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setIsFilterModalOpen(false); // Auto-close modal after selection
                    }}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 font-medium text-left flex justify-between items-center ${
                      activeFilter === cat.id
                        ? "bg-blue-600 text-white"
                        : isDark
                        ? "bg-black/30 text-gray-300 hover:bg-black/50 border border-white/10"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-black/10"
                    }`}
                  >
                    {cat.label}
                    {activeFilter === cat.id && (
                      <span className="material-icons text-sm">check</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Skills Grid */}
      {filteredSkills.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`border rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-2 ${isDark ? 'bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/10' : 'bg-white border-black/10 hover:border-blue-500/50 shadow-sm'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${isDark ? 'bg-black/40' : 'bg-gray-100'}`}>
                  <span className="material-icons text-3xl text-blue-500">
                    {skill.icon}
                  </span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                  <p className="text-sm text-blue-400 capitalize">
                    {skill.category}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <i className="fas fa-search-minus text-4xl text-blue-500 mb-4 block"></i>
          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>No skills found</h3>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Try adjusting your search terms or filters
          </p>
        </motion.div>
      )}

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-500 mb-8">
          Skills Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`border rounded-xl p-6 transition-all ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-black/10 hover:bg-gray-50 shadow-sm'}`}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
