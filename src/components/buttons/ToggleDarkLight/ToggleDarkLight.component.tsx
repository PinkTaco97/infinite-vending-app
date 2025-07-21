"use client";
// React
import React from "react";

// Next.js
import Image from "next/image";

// Icons
import { SunIcon, MoonIcon } from "@/components/icons";

// Hooks
import { useTheme } from "@/hooks";

export default function ToggleDarkLight() {
  const { theme, toggleTheme } = useTheme();
  const size = 10; // Size of the icon

  return (
    <div
      className={`bg-gradient-to-r  transition duration-300 ${
        theme === "dark"
          ? "from-red-500 to-orange-500"
          : "from-slate-900 to-slate-700"
      } p-1 rounded-full focus:outline-none hover:cursor-pointer hover:animate-wiggle`}
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-400  transition-colors duration-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-yellow-400 transition-colors duration-300" />
      )}
    </div>
  );
}
