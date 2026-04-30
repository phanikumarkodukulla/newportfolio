import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AI Powered Industrial and Business Management System",
    description: "AI hub for industries and bussinesses",
    technologies: [
      "Full-Stack Web Development",
      "Machine Learning",
      "AI Integration",
    ],
    liveDemo: "#",
  },
  {
    name: "Anti Ragging Portal",
    description:
      "A secure grievance portal for confidential complaint submission, tracking, and transparent management.",
    technologies: ["Full-Stack Web Development"],
    liveDemo: "https://anits-antiragging-portal.onrender.com/",
  },
  {
    name: "CURSORS-2K26",
    description:
      "A scalable full-stack technical fest website built for ANITS with modern web technologies and cloud deployment.",
    technologies: ["Full-Stack Web Development"],
    liveDemo: "https://cursors2k26.onrender.com/",
  },
  {
    name: "ICANITS Website",
    description:
      "Official conference website for ICANITS 2026 with responsive design and seamless event information management.",
    technologies: ["Full-Stack Web Development"],
    liveDemo: "https://anits.org/ICANITS2026/",
  },
  {
    name: "Phanolink",
    description:
      "A comprehensive web application for connecting and sharing resources within a community. Features include user profiles, messaging, and resource sharing capabilities.",
    technologies: [
      "Django",
      "Pandas",
      "BeautifulSoup",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    liveDemo: "https://phanolink.onrender.com/",
  },
  {
    name: "Write Out",
    description:
      "A minimalist writing application designed to enhance focus and creativity with distraction-free interface.",
    technologies: [
      "Django",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "Google API",
    ],
    liveDemo: "#",
  },
  {
    name: "Cook Book",
    description:
      "A recipe collection and meal planning application with search functionality, nutrition information, and cooking tips.",
    technologies: [
      "Django",
      "Pandas",
      "BeautifulSoup",
      "JavaScript",
      "Bootstrap",
    ],
    liveDemo: "#",
  },
  {
    name: "Spax",
    description:
      "A Comprehensive student progress designer with qr providing functionality which generates student's progress with Excel sheet.",
    technologies: ["Django", "Pandas", "BeautifulSoup", "QR library"],
    liveDemo: "#",
  },
  {
    name: "Dogs Tunnel",
    description:
      "An interactive platform for dog lovers to browse, search, and learn about different dog breeds. Includes comprehensive information, care tips, and community features.",
    technologies: ["Flask", "Js-Advanced", "HTML", "CSS", "Bootstrap"],
    liveDemo: "https://dogs-tunnel.onrender.com",
  },
  {
    name: "Flames Online",
    description:
      "A modern web implementation of the classic FLAMES game (Friendship, Love, Affection, Marriage, Enemy, Sibling). Features interactive UI and shareable results.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://flames-online.onrender.com",
  },
  {
    name: "Pen Fight Online",
    description:
      "A nostalgic digital recreation of the classic pen fight game. Play against AI or other players in this physics-based web game.",
    technologies: ["HTML", "CSS", "JavaScript", "Math Applications"],
    liveDemo: "https://pen-fight-online.onrender.com",
  },
  {
    name: "Quadrix Ultra",
    description:
      "A modern puzzle game inspired by Tetris with added features, special blocks, and multiple game modes for enhanced gameplay experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://quadrix-ultra.onrender.com",
  },
  {
    name: "Resume Generator",
    description:
      "A professional resume creation tool that helps users build and customize their resumes with various templates, fonts, and export options.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://resumegenerator-official.onrender.com",
  },
  {
    name: "Today's Forecast",
    description:
      "A weather application providing real-time forecasts, hourly updates, and weekly predictions with a clean, intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://todaysforcast.onrender.com",
  },
  {
    name: "Ellipse",
    description:
      "A creative project management platform designed for teams to collaborate efficiently on design and development projects.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://ellipse-ej6p.onrender.com",
  },
  {
    name: "Tech Tool Kits",
    description:
      "A collection of web-based developer tools including formatters, converters, and utilities to streamline the development process.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "XML", "Ajax"],
    liveDemo: "https://techtoolkits.onrender.com",
  },
  {
    name: "AIO QR",
    description:
      "An all-in-one QR code generator and scanner with customization options, analytics, and batch processing capabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://phanikumar-sharma.github.io/AIO-QR/",
  },
  {
    name: "Popup Game",
    description:
      "A tool for web developers to create and customize modal popups with various animations, styles, and trigger options.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"],
    liveDemo: "https://phanikumarkodukulla.github.io/popup/",
  },
  {
    name: "Chakra Educations",
    description:
      "An educational platform focused on holistic learning with courses on mindfulness, well-being, and personal development.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo:
      "https://phanikumar-sharma.github.io/Chakra-Educations/index.html",
  },
  {
    name: "Hand Cricket",
    description:
      "A digital version of the popular hand game where players compete against the computer with strategic number choices.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
    liveDemo: "https://phanikumar-sharma.github.io/Hand-cricket/",
  },
  {
    name: "Personal Portfolio",
    description:
      "A showcase of my work, skills, and accomplishments with a modern, responsive design and interactive elements.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveDemo: "https://phanikumar-sharma.github.io/phanikumar01.github.io/",
  },
  {
    name: "NOBEL",
    description:
      "An informative web application about Nobel Prize winners, their achievements, and historical significance.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://phanikumar-sharma.github.io/NOBEL/",
  },
  {
    name: "Scrappy Web",
    description: "A code scrapping website to scrapp code from the website.",
    technologies: ["BeautifulSoup", "Pandas", "Django"],
    liveDemo: "#",
  },
  {
    name: "Stock Market Analyzing System",
    description:
      "A Real-time stock market data prediction and analyzation platform.",
    technologies: ["BeautifulSoup", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    liveDemo: "#",
  },
  {
    name: "Other small projects",
    description: "30+ Small projects on webdev, data science",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    liveDemo: "#",
  },
  {
    name: "Master's Key Board",
    description:
      "Typing and learning typing for free and write tests and play games.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Accessibility Features"],
    liveDemo: "#",
  },
];

function ProjectCard({ project }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    // Calculate rotation (-15 to 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="perspective-1000 w-full h-[400px]"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`w-full h-full glass-card rounded-2xl overflow-hidden flex flex-col group transform-style-3d shadow-2xl transition-colors duration-300 border border-white/10 bg-white/[0.03]`}
      >
        <div
          className={`p-6 border-b transform-style-3d transition-colors duration-300 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-white/5`}
          style={{ transform: "translateZ(30px)" }}
        >
          <h3
            className={`text-2xl font-bold mb-2 tracking-wide font-display transition-colors duration-300 text-white`}
          >
            {project.name}
          </h3>
        </div>

        <div
          className="p-6 flex-grow flex flex-col relative"
          style={{ transform: "translateZ(20px)" }}
        >
          <p
            className={`mb-6 flex-grow leading-relaxed transition-colors duration-300 text-gray-300`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs border font-mono transition-colors duration-300 bg-blue-500/10 text-blue-300 border-blue-500/20`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 pt-0" style={{ transform: "translateZ(40px)" }}>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors text-sm font-semibold tracking-wider uppercase transition-all duration-300 bg-blue-600 hover:bg-blue-500 text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]`}
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>

        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-blue-500/0 via-white/5 to-white/0`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300 bg-transparent`}
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold font-display inline-block relative transition-colors duration-300 text-white`}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mt-4 max-w-2xl mx-auto transition-colors duration-300 text-gray-400`}
        >
          Explore some of my recent work showcasing interactive web
          applications, AI models, and robust backend systems.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
