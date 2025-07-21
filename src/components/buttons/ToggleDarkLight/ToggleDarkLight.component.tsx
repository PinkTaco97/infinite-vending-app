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
    <button
      className="bg-text rounded-full focus:outline-none hover:cursor-pointer"
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-400 transition-colors duration-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-yellow-400 transition-colors duration-300" />
      )}
    </button>
  );
}
