import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Flame,
  Mail,
  Rocket,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { isDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Skills", path: "/skills", icon: <Code2 size={20} /> },
    { name: "Projects", path: "/projects", icon: <Briefcase size={20} /> },
    {
      name: "Education",
      path: "/education",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Certifications",
      path: "/certifications",
      icon: <Award size={20} />,
    },
    {
      name: "Publications",
      path: "/publications",
      icon: <BookOpen size={20} />,
    },
    // { name: "Priest", path: "/priest", icon: <Flame size={20} /> },
    {
      name: "Got a Project?",
      path: "/got-project",
      icon: <Rocket size={20} />,
    },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  const activeIndex = navLinks.findIndex(
    (link) => location.pathname === link.path,
  );
  const safeActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  // State to track continuous infinite rotation without rewinding
  const [dialRotation, setDialRotation] = useState(0);

  useEffect(() => {
    // 360 degrees / 9 items = exactly 40 degrees per item
    const targetAngle = -safeActiveIndex * 40;

    setDialRotation((prev) => {
      // Shortest-path calculation to make it endlessly loop forward/backward
      let diff = (targetAngle - prev) % 360;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      return prev + diff;
    });
  }, [safeActiveIndex]);

  return (
    <>
      {/* =========================================
          DESKTOP NAVIGATION
          ========================================= */}
      <div className="hidden md:flex fixed bottom-6 left-0 right-0 z-50 justify-center pointer-events-none px-4 items-center gap-4">
        <nav className={`backdrop-blur-xl border rounded-full p-2 flex items-center gap-1 sm:gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] pointer-events-auto overflow-x-auto hide-scrollbar max-w-full ${isDark ? 'bg-[#020817]/80 border-[rgba(255,255,255,0.1)]' : 'bg-white/80 border-black/10'}`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`relative px-4 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 ${
                  isActive
                    ? isDark ? "text-white" : "text-gray-900"
                    : isDark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#6366F1] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.icon}</span>
                {isActive && (
                  <span className="relative z-10 hidden sm:block text-sm font-semibold tracking-wide">
                    {link.name}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
        <div className="pointer-events-auto flex items-center justify-center">
          <ThemeToggle className="relative" />
        </div>
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>

      {/* =========================================
          MOBILE ROTARY DIAL NAVIGATION
          ========================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[105px] overflow-hidden z-50 pointer-events-none select-none touch-none font-['Inter',sans-serif]">
        {/* Pointer / Indicator Needle */}
        <div className="absolute bottom-[65px] left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center">
          <div className="w-[12px] h-[20px] bg-gradient-to-b from-[#3B82F6] to-[#2563EB] rounded-t-sm shadow-[0_2px_4px_rgba(0,0,0,0.6)] border border-[#1E3A5F]"></div>
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-[#2563EB] drop-shadow-md"></div>
        </div>

        {/* Center Hub - Completely Empty */}
        <div className={`absolute -bottom-[105px] left-1/2 -translate-x-1/2 w-[110px] h-[110px] rounded-full z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.8),inset_0_4px_10px_rgba(0,0,0,0.5)] pointer-events-auto border-[4px] ${isDark ? 'bg-gradient-to-br from-[#0A1929] to-[#020817] border-[#1E3A5F]' : 'bg-gradient-to-br from-gray-100 to-gray-300 border-gray-400 shadow-[0_-5px_15px_rgba(0,0,0,0.2),inset_0_4px_10px_rgba(0,0,0,0.1)]'}`}></div>

        {/* The Rotating Mechanical Dial */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.06}
          onDragEnd={(e, info) => {
            const swipeThreshold = 15;
            const velocityThreshold = 300;

            if (
              info.offset.x < -swipeThreshold ||
              info.velocity.x < -velocityThreshold
            ) {
              // Swipe left -> go forward (wraps around perfectly)
              const nextIndex = (safeActiveIndex + 1) % navLinks.length;
              navigate(navLinks[nextIndex].path);
            } else if (
              info.offset.x > swipeThreshold ||
              info.velocity.x > velocityThreshold
            ) {
              // Swipe right -> go backward (wraps around perfectly)
              const prevIndex =
                (safeActiveIndex - 1 + navLinks.length) % navLinks.length;
              navigate(navLinks[prevIndex].path);
            }
          }}
          animate={{ rotate: dialRotation }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 26,
            mass: 0.8,
          }}
          whileTap={{ cursor: "grabbing" }}
          className={`absolute -bottom-[255px] left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full pointer-events-auto cursor-grab shadow-[inset_0_5px_20px_rgba(255,255,255,0.05),0_15px_30px_rgba(0,0,0,0.9)] border-[2px] ${isDark ? 'bg-[#0F2942] border-[rgba(255,255,255,0.1)]' : 'bg-gray-200 border-black/10 shadow-[inset_0_5px_20px_rgba(0,0,0,0.05),0_15px_30px_rgba(0,0,0,0.2)]'}`}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          {/* Inner Ring Detail */}
          <div className={`absolute inset-[25px] rounded-full border shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] pointer-events-none ${isDark ? 'border-[#1E3A5F]' : 'border-gray-300'}`}></div>

          {/* Render Actual Nav Links in a 360-degree perfect loop */}
          {navLinks.map((link, i) => {
            const angle = i * 40;
            return (
              <div
                key={link.name}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[50px] h-[170px]"
                style={{
                  transformOrigin: "bottom center",
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className={`w-[46px] h-[46px] mx-auto mt-[16px] rounded-full border flex items-center justify-center transition-transform active:scale-90 ${isDark ? 'bg-[#020817] shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)] border-[#2C5282]' : 'bg-white shadow-[inset_0_2px_5px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)] border-gray-300'}`}
                  onClick={() => navigate(link.path)}
                >
                  {/* Icon has no internal counter-rotation, meaning it naturally stays upright when it reaches the top (0 degrees) */}
                  <div
                    className={`transition-colors duration-300 ${
                      safeActiveIndex === i
                        ? "text-[#3B82F6] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        : isDark ? "text-[#E8F1F5] opacity-50" : "text-gray-600 opacity-70"
                    }`}
                  >
                    {link.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
