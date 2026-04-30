import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Always use dark mode
  const isDark = true;

  useEffect(() => {
    // Set dark mode on DOM
    const root = document.documentElement;
    root.setAttribute("data-theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
