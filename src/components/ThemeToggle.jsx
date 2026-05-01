import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer z-50 ${
        isDark ? "bg-[#0F2942]/80 border-white/10" : "bg-white/80 border-black/10"
      } ${className || "fixed top-6 right-6"}`}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="text-yellow-400" size={24} />
      ) : (
        <Moon className="text-[#2563EB]" size={24} />
      )}
    </button>
  );
}
