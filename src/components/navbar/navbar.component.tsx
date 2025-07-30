"use client";

// Components
import { ToggleDarkLight } from "@/components/buttons"; // Buttons
import { InfiniteVendingIcon, InfiniteVendingText } from "@/components/logos"; // Logos

// Hooks
import { useTheme } from "@/hooks";

export default function Navbar() {
  const { theme } = useTheme(); // Get the current theme
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full p-4">
      <div className="relative m-auto px-4 max-w-4xl w-full h-16 flex items-center justify-between rounded-full bg-background transition-colors duration-300">
        {/* Left: Icon Logo */}
        <div className="flex items-center pl-1 z-10">
          <InfiniteVendingIcon className="h-15 sm:h-25" />
        </div>

        {/* Center: Text Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <InfiniteVendingText
            className={`h-50 transition-colors duration-300 z-20  ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          />
        </div>

        {/* Right: Theme Toggle */}
        {/* <div className="z-10">
          <ToggleDarkLight />
        </div> */}
      </div>
    </nav>
  );
}
