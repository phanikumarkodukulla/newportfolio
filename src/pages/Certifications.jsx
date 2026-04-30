import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "../styles/materialIcons.css";

const certificates = [
  {
    id: 1,
    title: "Supervised Machine Learning",
    image: "/assets/stanford-ml.png",
    ribbon: "Supervised ML",
    category: "machine-learning",
    description:
      "Comprehensive course on supervised machine learning techniques, algorithms, and practical applications from Stanford University.",
    issued: "2025",
    organization: "Stanford Online",
    skills: [
      "Supervised Learning",
      "Regression",
      "Classification",
      "Neural Networks",
      "Model Evaluation",
    ],
    icon: "fas fa-brain",
    featured: true,
  },
  {
    id: 2,
    title: "C Programming Certificate",
    image: "/assets/c.png",
    ribbon: "C Programming",
    category: "others",
    description:
      "Comprehensive course covering C programming fundamentals, data structures, and memory management.",
    issued: "February 2025",
    organization: "ScholarHat",
    skills: [
      "C Programming",
      "Data Structures",
      "Memory Management",
      "Algorithms",
    ],
    icon: "fas fa-code",
  },
  {
    id: 3,
    title: "C++ Programming Certificate",
    image: "/assets/cpp.png",
    ribbon: "C++ Programming",
    category: "others",
    description:
      "Advanced C++ programming concepts including OOP, templates, and STL implementation.",
    issued: "February 2025",
    organization: "ScholarHat",
    skills: ["C++", "Object-Oriented Programming", "Templates", "STL"],
    icon: "fas fa-code",
  },
  {
    id: 4,
    title: "Python Mastery Certificate",
    image: "/assets/python.jpg",
    ribbon: "Python Mastery",
    category: "machine-learning",
    description:
      "Complete Python programming course covering basics to advanced topics and data science libraries.",
    issued: "November 2024",
    organization: "Scalar School of Technology",
    skills: ["Python", "Data Science", "NumPy", "Pandas", "Matplotlib"],
    icon: "fab fa-python",
  },
  {
    id: 5,
    title: "React JS Projects",
    image: "/assets/react.jpg",
    ribbon: "React JS Projects",
    category: "web-development",
    description:
      "Hands-on React projects building complex interactive UIs with modern React patterns.",
    issued: "December 2024",
    organization: "Udemy",
    skills: ["React", "JavaScript", "State Management", "React Hooks"],
    icon: "fab fa-react",
  },
  {
    id: 6,
    title: "Git Version Control",
    image: "/assets/git.jpg",
    ribbon: "Git Version Control",
    category: "software-development",
    description:
      "Version control mastery with Git and GitHub, including collaboration workflows and best practices.",
    issued: "March 2025",
    organization: "LetsUpgrade",
    skills: ["Git", "GitHub", "Version Control", "Collaboration", "Branching"],
    icon: "fab fa-git-alt",
  },
  {
    id: 7,
    title: "JavaScript Essentials",
    image: "/assets/javascript.jpg",
    ribbon: "JavaScript Essentials",
    category: "web-development",
    description:
      "Deep dive into JavaScript fundamentals, ES6+ features, and modern JavaScript development.",
    issued: "January 2025",
    organization: "Udemy",
    skills: ["JavaScript", "ES6+", "Async Programming", "DOM Manipulation"],
    icon: "fab fa-js-square",
  },
  {
    id: 8,
    title: "Database Fundamentals",
    image: "/assets/database.jpg",
    ribbon: "Database Fundamentals",
    category: "databases",
    description:
      "SQL and database design principles for building scalable and efficient data systems.",
    issued: "February 2025",
    organization: "Great Learning Academy",
    skills: ["SQL", "Database Design", "Normalization", "Query Optimization"],
    icon: "fas fa-database",
  },
  {
    id: 9,
    title: "ChatGPT Bootcamp Certificate",
    image: "/assets/chatgpt.jpg",
    ribbon: "ChatGPT Bootcamp",
    category: "machine-learning",
    description:
      "Comprehensive course on AI prompt engineering and effective ChatGPT utilization for productivity.",
    issued: "February 2025",
    organization: "LetsUpgrade",
    skills: ["AI Prompting", "ChatGPT", "Prompt Engineering", "AI Tools"],
    icon: "fas fa-robot",
  },
  {
    id: 10,
    title: "Web Development Certificate",
    image: "/assets/web.jpg",
    ribbon: "Web Development",
    category: "web-development",
    description:
      "Full-stack web development course covering HTML, CSS, JavaScript, and modern frameworks.",
    issued: "November 2024",
    organization: "Udemy",
    skills: ["HTML", "CSS", "JavaScript", "Full-Stack", "Responsive Design"],
    icon: "fas fa-globe",
  },
  {
    id: 11,
    title: "Django Certificate",
    image: "/assets/django.png",
    ribbon: "Django",
    category: "web-development",
    description:
      "Django web framework certification covering MVT architecture, ORM, and web application development.",
    issued: "2024",
    organization: "GeeksforGeeks",
    skills: [
      "Django",
      "Python Web Framework",
      "ORM",
      "MVT Architecture",
      "Web APIs",
    ],
    icon: "fab fa-python",
  },
  {
    id: 12,
    title: "Web Scraping with Python",
    image: "/assets/webscrap.jpg",
    ribbon: "Web Scraping",
    category: "machine-learning",
    description:
      "Advanced web scraping techniques using Python, BeautifulSoup, Selenium, and data extraction methods.",
    issued: "October 2024",
    organization: "Great Learning Academy",
    skills: [
      "Web Scraping",
      "BeautifulSoup",
      "Selenium",
      "Data Extraction",
      "Python",
    ],
    icon: "fas fa-spider",
  },
  {
    id: 13,
    title: "Prompting Certificate",
    image: "/assets/prompt.png",
    ribbon: "Prompting",
    category: "machine-learning",
    description:
      "Advanced AI prompt engineering certification covering techniques for effective AI communication.",
    issued: "October 2024",
    organization: "SimpliLearn and SkillUp",
    skills: [
      "Prompt Engineering",
      "AI Communication",
      "ChatGPT",
      "AI Optimization",
    ],
    icon: "fas fa-brain",
  },
  {
    id: 14,
    title: "New Product Development",
    image: "/assets/npd.jpg",
    ribbon: "New Product Development",
    category: "others",
    description:
      "Product development lifecycle, market research, and innovation management certification.",
    issued: "March 2025",
    organization: "Industrial Academia Community",
    skills: [
      "Product Development",
      "Market Research",
      "Innovation",
      "Project Management",
    ],
    icon: "fas fa-lightbulb",
  },
  {
    id: 15,
    title: "Digital Business Skills",
    image: "/assets/dbs.jpg",
    ribbon: "Digital Business Skills",
    category: "others",
    description:
      "Digital transformation, online business strategies, and e-commerce fundamentals.",
    issued: "September 2024",
    organization: "HP Life",
    skills: [
      "Digital Marketing",
      "E-commerce",
      "Business Strategy",
      "Digital Transformation",
    ],
    icon: "fas fa-chart-line",
  },
  {
    id: 16,
    title: "Inventory Management",
    image: "/assets/im.jpg",
    ribbon: "Inventory Management",
    category: "others",
    description:
      "Supply chain management, inventory optimization, and logistics planning certification.",
    issued: "September 2024",
    organization: "HP Life",
    skills: [
      "Inventory Management",
      "Supply Chain",
      "Logistics",
      "Optimization",
    ],
    icon: "fas fa-boxes",
  },
  {
    id: 17,
    title: "C++ and Java Basics",
    image: "/assets/java.png",
    ribbon: "C++ and Java Basics",
    category: "others",
    description:
      "Fundamental programming concepts in both C++ and Java with practical implementations.",
    issued: "August 2024",
    organization: "Coding School",
    skills: [
      "C++",
      "Java",
      "Object-Oriented Programming",
      "Programming Fundamentals",
    ],
    icon: "fab fa-java",
  },
  {
    id: 18,
    title: "SQL With AI Workshop",
    image: "/assets/sqlwithaicert.png",
    ribbon: "SQL with AI",
    category: "databases",
    description:
      "Modern SQL techniques enhanced with AI tools for advanced data analysis and automation.",
    issued: "June 2025",
    organization: "AI for Techies",
    skills: [
      "SQL",
      "AI Integration",
      "Data Analysis",
      "Automation",
      "Advanced Queries",
    ],
    icon: "fas fa-database",
  },
  {
    id: 19,
    title: "PhonePay data analysis using powerBI",
    image: "/assets/pbi.png",
    ribbon: "PowerBI",
    category: "machine-learning",
    description:
      "Business intelligence and data visualization using PowerBI with real-world PhonePay data analysis.",
    issued: "June 2025",
    organization: "WS Cube Tech",
    skills: [
      "PowerBI",
      "Data Visualization",
      "Business Intelligence",
      "Data Analysis",
      "DAX",
    ],
    icon: "fas fa-chart-bar",
  },
  {
    id: 20,
    title: "EXCEL using AI Workshop",
    image: "/assets/excel.png",
    ribbon: "Excel with AI",
    category: "others",
    description:
      "Advanced Excel techniques enhanced with AI tools for data analysis and automation.",
    issued: "June 2025",
    organization: "Office Master",
    skills: [
      "Excel",
      "AI Integration",
      "Data Analysis",
      "Automation",
      "Advanced Functions",
    ],
    icon: "fas fa-file-excel",
  },
  {
    id: 21,
    title: "Pandas for Machine Learning",
    image: "/assets/pandas-cert.jpeg",
    ribbon: "Pandas for ML",
    category: "machine-learning",
    description:
      "Data manipulation and analysis using Pandas library for machine learning applications.",
    issued: "June 2025",
    organization: "Intellipaat",
    skills: [
      "Pandas",
      "Data Manipulation",
      "Machine Learning",
      "Data Preprocessing",
      "Python",
    ],
    icon: "fab fa-python",
  },
  {
    id: 22,
    title: "Generative AI Essentials",
    image: "/assets/google-cert.png",
    ribbon: "GenAI",
    category: "machine-learning",
    description: "Generative AI essentials by Google for Machine Learning",
    issued: "June 2025",
    organization: "Google",
    skills: ["AI vs GenAI", "ML Basics", "LLMs Intro", "Prompting", "Text Gen"],
    icon: "fab fa-google",
  },
  {
    id: 23,
    title: "LLM Essentials",
    image: "/assets/llm.png",
    ribbon: "Large Language Models",
    category: "machine-learning",
    description: "LLM Essentials by Google for Machine Learning",
    issued: "June 2025",
    organization: "Google",
    skills: [
      "LLM Fundamentals",
      "Transformer Architecture",
      "Fine‑Tuning & Alignment",
      "Prompt Engineering",
    ],
    icon: "fas fa-brain",
  },
  {
    id: 24,
    title: "Python Developer Virtual Internship",
    image: "/assets/delloite-intern.png",
    ribbon: "Python Internship",
    category: "software-development",
    description: "Python Developer Virtual Internship by Deloitte",
    issued: "June 2025",
    organization: "Deloitte",
    skills: ["Python Programming", "Data Structures", "Communication"],
    icon: "fab fa-python",
  },
  {
    id: 25,
    title: "Power BI for Business Analysis",
    image: "/assets/powerbi-analysis.png",
    ribbon: "Power BI Analytics",
    category: "databases",
    description:
      "Business intelligence and analytics using Power BI for data-driven decision making.",
    issued: "May 2025",
    organization: "Microsoft Learn",
    skills: ["Power BI", "Data Analysis", "Analytics", "Visualization"],
    icon: "fas fa-chart-pie",
  },
];

const categories = [
  { id: "all", label: "All Certifications" },
  { id: "web-development", label: "Web Development" },
  { id: "machine-learning", label: "Machine Learning & AI" },
  { id: "databases", label: "Databases" },
  { id: "software-development", label: "Software Development" },
  { id: "others", label: "Others" },
];

export default function Certifications() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filteredCerts =
    filter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === filter);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isFilterModalOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300 bg-transparent`}
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold font-display inline-block relative transition-colors duration-300 text-white`}
        >
          Professional <span className="text-gradient">Certifications</span>
          <div
            className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r rounded-full from-blue-600 to-indigo-600`}
          />
        </motion.h2>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col items-center justify-center mb-12">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className={`md:hidden flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-medium transition-colors w-full max-w-xs ${
            isDark
              ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
              : "bg-black/5 border-black/10 text-gray-800 hover:bg-black/10"
          }`}
        >
          <span className="material-icons text-blue-500">filter_list</span>
          Filter Certifications
        </button>

        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                filter === cat.id
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border-transparent"
                  : isDark
                    ? "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-blue-500/50"
                    : "bg-black/5 text-gray-700 hover:bg-black/10 border border-black/10 hover:border-blue-500/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

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
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed bottom-0 left-0 right-0 border-t p-6 rounded-t-3xl z-50 md:hidden max-h-[85vh] flex flex-col ${
                isDark
                  ? "bg-[#111] border-white/10"
                  : "bg-white border-black/10"
              }`}
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <h3
                  className={`text-xl font-bold flex items-center gap-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  <span className="material-icons text-blue-500">
                    filter_list
                  </span>
                  Filters
                </h3>
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    isDark
                      ? "bg-white/10 text-gray-400 hover:text-white"
                      : "bg-black/5 text-gray-600 hover:text-black"
                  }`}
                >
                  <span className="material-icons text-sm">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto pb-6 custom-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setFilter(cat.id);
                      setIsFilterModalOpen(false); // Auto-close modal after selection
                    }}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 font-medium text-left flex justify-between items-center ${
                      filter === cat.id
                        ? "bg-blue-600 text-white"
                        : isDark
                          ? "bg-black/30 text-gray-300 hover:bg-black/50 border border-white/10"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-black/5"
                    }`}
                  >
                    {cat.label}
                    {filter === cat.id && (
                      <span className="material-icons text-sm">check</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={cert.id}
              className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 group flex flex-col ${
                isDark
                  ? "border border-white/10 hover:border-blue-500/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  : "border border-black/10 hover:border-blue-500/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-xl p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border ${
                    isDark
                      ? "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20"
                      : "bg-gradient-to-br from-blue-400/10 to-indigo-400/10 border-blue-400/20"
                  }`}
                >
                  <Award
                    size={32}
                    className={isDark ? "text-blue-400" : "text-blue-600"}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3
                      className={`text-lg font-bold leading-tight transition-colors duration-300 text-white`}
                    >
                      {cert.title}
                    </h3>
                    {cert.featured && (
                      <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900">
                        Featured
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm font-medium transition-colors duration-300 text-blue-400`}
                  >
                    Issued by: {cert.organization}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 text-xs mb-4 font-mono transition-colors duration-300 text-gray-400`}
              >
                <Calendar size={14} />
                <span>{cert.issued}</span>
              </div>

              <p
                className={`text-sm mb-6 flex-grow transition-colors duration-300 text-gray-400`}
              >
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs border transition-colors duration-300 ${
                      isDark
                        ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                        : "bg-blue-400/10 text-blue-700 border-blue-400/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
