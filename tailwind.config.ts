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
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-25px)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.3s ease-out forwards",
        "fade-out-up": "fade-out-up 0.3s ease-in forwards",
      },
    },
  },
  darkMode: "class",
};
