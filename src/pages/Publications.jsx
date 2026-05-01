import { motion } from "framer-motion";
import { Book, Terminal, BookOpen, Code, Layers, Shield } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const books = [
  {
    id: 1,
    title: "The Alphabet of Python",
    description:
      "A comprehensive guide for beginners to master Python programming from scratch. Learn through practical projects and real-world applications with step-by-step guidance.",
    features: [
      "Complete Python Coverage",
      "25+ Real Projects",
      "Jarvis AI Assistant",
      "Beginner Friendly",
    ],
    stats: [
      { number: "300+", label: "Pages" },
      { number: "25+", label: "Projects" },
      { number: "15", label: "Chapters" },
    ],
    icon: <Code size={40} className="text-white" />,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "The Essentials Of Prompting",
    description:
      "Master the art of AI communication with this comprehensive guide to prompt engineering. Learn the language of AI and discover how to craft effective prompts for optimal results.",
    features: [
      "AI Communication Mastery",
      "Core Prompting Topics",
      "Language of AI",
      "Essential Techniques",
    ],
    stats: [
      { number: "100+", label: "Pages" },
      { number: "5", label: "Chapters" },
      { number: "AI", label: "Prompting" },
    ],
    icon: <BookOpen size={40} className="text-white" />,
    color: "from-purple-600 to-pink-600",
  },
];

const packages = [
  {
    id: 1,
    name: "code-complexity-analyzer",
    type: "Python Package",
    description:
      "A zero-dependency toolkit that measures Big-O, cyclomatic & Halstead complexity, maintainability index, and detects code smells in one sweep.",
    tags: ["Analysis", "Quality", "Zero Deps"],
    installCmd: "pip install code-complexity-analyzer",
    link: "https://pypi.org/project/code-complexity-analyzer/1.0.0/",
  },
  {
    id: 2,
    name: "PyVoiceCraft",
    type: "Python Package",
    description:
      "Complete voice-based toolkit for designing voice assistants with speech recognition, text-to-speech, voice profiles, audio processing, and conversation management.",
    tags: ["Voice AI", "TTS/STT", "Assistants"],
    installCmd: "pip install pyvoicecraft",
    link: "https://pypi.org/project/pyvoicecraft/1.0.0/",
  },
  {
    id: 3,
    name: "APIProtector",
    type: "Python Package",
    description:
      "Protect your Python APIs with rate limiting, authentication, request validation, and basic security tools. Works seamlessly with any Python framework.",
    tags: ["Security", "Rate Limiting", "Framework Agnostic"],
    installCmd: "pip install apiprotector",
    link: "https://pypi.org/project/apiprotector/1.0.0/",
  },
];

export default function Publications() {
  const { isDark } = useTheme();

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300 bg-transparent`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold font-display inline-block relative transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Publications & <span className="text-gradient">Open Source</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mt-4 max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Python packages, books, and tools I've created for the developer
          community
        </motion.p>
      </div>

      {/* Books Section */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <Book
            className={isDark ? "text-blue-500" : "text-blue-600"}
            size={32}
          />
          <h3
            className={`text-3xl font-bold font-display transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Books I Published
          </h3>
        </div>

        <div className="space-y-12">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card rounded-2xl border overflow-hidden flex flex-col md:flex-row transition-colors duration-300 ${isDark ? 'border-white/10 hover:border-blue-500/50' : 'border-black/10 hover:border-blue-500/50 bg-white shadow-sm'}`}
            >
              {/* 3D Book Visual */}
              <div
                className={`p-12 flex items-center justify-center shrink-0 md:w-1/3 relative overflow-hidden group transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-blue-900/40 to-indigo-900/40' : 'bg-gradient-to-br from-blue-100 to-indigo-100'}`}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                <div className="relative z-10 w-48 h-64 perspective-1000">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${book.color} rounded-lg shadow-[20px_0_30px_rgba(0,0,0,0.5),_0_20px_30px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out group-hover:-rotate-y-12 group-hover:scale-105 flex flex-col items-center justify-center text-center p-6 border flex-col border-white/20`}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 to-transparent rounded-l-lg"></div>
                    {book.icon}
                    <h4
                      className={`mt-4 text-xl font-bold leading-tight drop-shadow-md transition-colors duration-300 text-white`}
                    >
                      {book.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Book Content */}
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <h4
                  className={`text-2xl font-bold mb-4 font-display transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  {book.title}
                </h4>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {book.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {book.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div
                  className={`flex gap-8 pt-6 border-t transition-colors duration-300 ${isDark ? 'border-white/10' : 'border-black/10'}`}
                >
                  {book.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-2xl font-bold text-gradient">
                        {stat.number}
                      </span>
                      <span
                        className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-300 text-gray-500`}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div>
        <div className="flex items-center gap-3 mb-10 justify-center">
          <Layers
            className={isDark ? "text-indigo-500" : "text-indigo-600"}
            size={32}
          />
          <h3
            className={`text-3xl font-bold font-display transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Python Packages
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden group border ${isDark ? 'border-white/10 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.2)]' : 'border-black/10 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] bg-white/50'}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center border transition-colors duration-300 ${isDark ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-200'}`}
                >
                  <Terminal
                    size={28}
                    className={isDark ? "text-indigo-400" : "text-indigo-600"}
                  />
                </div>
                <div>
                  <h4
                    className={`text-xl font-bold mb-1 font-display leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  >
                    {pkg.name}
                  </h4>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 text-indigo-400`}
                  >
                    {pkg.type}
                  </span>
                </div>
              </div>

              <p
                className={`text-sm mb-6 flex-grow leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {pkg.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {pkg.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs transition-colors duration-300 ${isDark ? 'bg-white/5 border-white/10 text-blue-300' : 'bg-black/5 border-black/10 text-blue-700'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mt-auto">
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-shadow duration-300"
                >
                  <BookOpen size={18} />
                  View Documentation
                </a>

                <div
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl font-mono text-sm border-l-2 border-l-indigo-500 transition-colors duration-300 ${isDark ? 'bg-black/40 border-white/10 text-indigo-300' : 'bg-gray-100 border-black/10 text-indigo-700'}`}
                >
                  <Terminal
                    size={16}
                    className={isDark ? "text-gray-500" : "text-gray-400"}
                  />
                  {pkg.installCmd}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
