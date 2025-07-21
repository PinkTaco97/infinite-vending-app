// React
import { useContext } from "react";

// Context
import { ThemeContext } from "@/context/theme";

// useTheme hook to access theme context
export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
