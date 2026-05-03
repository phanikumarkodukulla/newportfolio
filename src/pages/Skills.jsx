import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";
import { Layout, Server, Cpu, BrainCircuit, Cloud, Layers } from "lucide-react";

const techEcosystem = [
  {
    category: "MERN Stack",
    icon: Layers,
    description:
      "Full-stack JavaScript development for modern web applications.",
    gradient: "from-green-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-green-400/50",
    skills: [
      { name: "MongoDB", slug: "mongodb", hex: "47A248" },
      { name: "Express.js", slug: "express", hex: "000000" },
      { name: "React", slug: "react", hex: "61DAFB" },
      { name: "Node.js", slug: "nodedotjs", hex: "339933" },
    ],
  },
  {
    category: "Frontend Architecture",
    icon: Layout,
    description:
      "Building semantic, responsive, and highly interactive interfaces.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-blue-400/50",
    skills: [
      { name: "JavaScript", slug: "javascript", hex: "F7DF1E" },
      { name: "HTML5", slug: "html5", hex: "E34F26" },
      { name: "CSS3", slug: "css3", hex: "1572B6" },
      { name: "Tailwind", slug: "tailwindcss", hex: "06B6D4" },
      { name: "Bootstrap", slug: "bootstrap", hex: "7952B3" },
      { name: "jQuery", slug: "jquery", hex: "0769AD" },
      { name: "Font Awesome", slug: "fontawesome", hex: "339AF0" },
      { name: "AJAX", slug: "json", hex: "000000" },
    ],
  },
  {
    category: "Backend & Databases",
    icon: Server,
    description:
      "Architecting robust APIs, microservices, and scalable data layers.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-teal-400/50",
    skills: [
      { name: "Django", slug: "django", hex: "092E20" },
      { name: "Flask", slug: "flask", hex: "000000" },
      { name: "REST API", slug: "swagger", hex: "85EA2D" }, // Swagger logo represents REST API standards
      { name: "PostgreSQL", slug: "postgresql", hex: "4169E1" },
      { name: "SQL", slug: "mysql", hex: "4479A1" }, // MySQL logo used as standard representation for SQL
      { name: "SQLite", slug: "sqlite", hex: "003B57" },
    ],
  },
  {
    category: "Core Languages",
    icon: Cpu,
    description:
      "Low-level processing, object-oriented design, and algorithms.",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-400/50",
    skills: [
      { name: "Python", slug: "python", hex: "3776AB" },
      { name: "C++", slug: "cplusplus", hex: "00599C" },
      { name: "C", slug: "c", hex: "A8B9CC" },
      { name: "Java", slug: "java", hex: "007396" },
    ],
  },
  {
    category: "Data Science & ML",
    icon: BrainCircuit,
    description: "Numerical computing, data analysis, and predictive models.",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    borderGlow: "group-hover:border-orange-400/50",
    skills: [
      { name: "TensorFlow", slug: "tensorflow", hex: "FF6F00" },
      { name: "Scikit-Learn", slug: "scikitlearn", hex: "F7931E" },
      { name: "NumPy", slug: "numpy", hex: "013243" },
      { name: "Pandas", slug: "pandas", hex: "150458" },
      { name: "Matplotlib", slug: "plotly", hex: "3F4F75" },
      { name: "BeautifulSoup", slug: "python", hex: "3776AB" },
    ],
  },
  {
    category: "Cloud, DevOps & Mobile",
    icon: Cloud,
    description: "Version control, containerization, deployment, and app dev.",
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "group-hover:border-indigo-400/50",
    skills: [
      { name: "Git", slug: "git", hex: "F05032" },
      { name: "GitHub", slug: "github", hex: "181717" },
      { name: "Docker", slug: "docker", hex: "2496ED" },
      { name: "Render", slug: "render", hex: "46E3B7" },
      { name: "Android Dev", slug: "android", hex: "3DDC84" },
    ],
  },
];

export default function Skills() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial 3D Entrance for Cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 100, rotationX: -15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          transformPerspective: 1000,
        },
      );

      // 2. Staggered pop-in for the individual tech icons
      gsap.fromTo(
        iconsRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.015,
          ease: "back.out(1.7)",
          delay: 0.5,
        },
      );

      // 3. Continuous floating animation for the background elements
      gsap.to(".floating-blob", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Effect on Mouse Move for the Category Cards
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeaveCard = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      className="relative min-h-screen py-24 overflow-hidden perspective-1000"
      ref={containerRef}
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating-blob pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-blob pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl floating-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1
            className={`text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 drop-shadow-sm">
              Tech Ecosystem
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            The tools, languages, and frameworks I use to architect intelligent
            and scalable digital solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {techEcosystem.map((dept, deptIndex) => {
            const CategoryIcon = dept.icon;

            return (
              <div
                key={dept.category}
                ref={(el) => (cardsRef.current[deptIndex] = el)}
                onMouseMove={(e) => handleMouseMove(e, deptIndex)}
                onMouseLeave={() => handleMouseLeaveCard(deptIndex)}
                className={`group relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 transition-colors duration-500 border backdrop-blur-xl ${
                  isDark
                    ? "bg-[#0f172a]/70 border-slate-700/50 hover:bg-[#0f172a]/90 shadow-2xl shadow-black/50"
                    : "bg-white/80 border-slate-200/80 hover:bg-white shadow-xl shadow-slate-200/60"
                } ${dept.borderGlow}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Dynamic Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}
                />

                <div
                  className="relative z-10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`p-3 rounded-xl ${isDark ? "bg-slate-800/80 text-cyan-400" : "bg-blue-50 text-blue-600"} shadow-inner`}
                    >
                      <CategoryIcon size={24} strokeWidth={2} />
                    </div>
                    <h2
                      className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-800"}`}
                    >
                      {dept.category}
                    </h2>
                  </div>

                  <p
                    className={`mb-10 text-sm font-medium pl-1 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {dept.description}
                  </p>

                  {/* Logo Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-2">
                    {dept.skills.map((skill, skillIndex) => {
                      // Handle black/dark logos in dark mode (like Express, Flask, JSON)
                      const iconColor =
                        isDark &&
                        (skill.hex === "000000" || skill.hex === "181717")
                          ? "FFFFFF"
                          : skill.hex;

                      return (
                        <div
                          key={skill.name}
                          ref={(el) =>
                            (iconsRef.current[deptIndex * 15 + skillIndex] = el)
                          }
                          className="flex flex-col items-center justify-start gap-3 cursor-default"
                        >
                          <div className="relative w-12 h-12 flex items-center justify-center">
                            {/* The SVG Logo */}
                            <img
                              src={`https://cdn.simpleicons.org/${skill.slug}/${iconColor}`}
                              alt={`${skill.name} logo`}
                              className="w-full h-full object-contain relative z-10 drop-shadow-md"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback for simpleicons error (like for Java)
                                e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug.replace("dotjs", "")}/${skill.slug.replace("dotjs", "")}-original.svg`;
                              }}
                            />
                          </div>

                          {/* Skill Name */}
                          <span
                            className={`text-[11px] sm:text-xs font-semibold text-center leading-tight ${
                              isDark ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
