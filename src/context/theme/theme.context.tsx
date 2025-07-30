"use client";
// React
import { createContext, useEffect, ReactNode } from "react";

// Hooks
import { useLocalStorage } from "@/hooks";

// Types
import { Theme, ThemeContextType } from "@/types";

// Utils
import { getSystemTheme } from "@/utils/common.utils";

// Create a context for the theme
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// ThemeProvider component to provide theme context
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark"); //getSystemTheme());

  // Apply theme to document root
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
