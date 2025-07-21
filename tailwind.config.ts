// Tailwind CSS Configuration File
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        ["text-secondary"]: "var(--text-secondary)",
        primary: "var(--primary)",
        ["primary-hover"]: "var(--primary-hover)",
        secondary: "var(--secondary)",
        ["secondary-hover"]: "var(--secondary-hover)",
      },
    },
  },
  darkMode: "class",
};
