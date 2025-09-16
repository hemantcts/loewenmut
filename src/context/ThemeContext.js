import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const ThemeContext = createContext();

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("yellow"); // default theme

  // Load theme from localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("app-theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   }, []);

  // Update theme + save in localStorage
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("app-theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
