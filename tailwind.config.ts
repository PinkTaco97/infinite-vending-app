// Tailwind CSS Configuration File
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSerif: ["DM Serif Text", "sans-serif"],
      },
      colors: {
        brandV: "var(--brand-v)",
        background: "var(--background)",
        background2: "var(--background-2)",
        background3: "var(--background-3)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        primary: "var(--primary)",
        ["text-secondary"]: "var(--text-secondary)",
        ["primary-hover"]: "var(--primary-hover)",
        secondary: "var(--secondary)",
        ["secondary-hover"]: "var(--secondary-hover)",
      },
    },
  },
  darkMode: "class",
};
