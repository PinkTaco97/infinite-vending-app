"use client";

// Hooks
import { useTheme } from "@/hooks";

// Types
import { OverlayProps } from "./overlay.types";

export default function Overlay({ children }: OverlayProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-full px-6 flex flex-col items-center justify-center transition-all duration-300 z-10
        ${
          theme === "dark" ? "backdrop-brightness-33" : "backdrop-brightness-50"
        }`}
    >
      {children}
    </div>
  );
}
