"use client";

// Next.js
import Image from "next/image";

// Components
import { ToggleDarkLight } from "@/components/buttons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full p-4">
      <div className="relative m-auto px-4 max-w-4xl w-full h-16 flex items-center justify-between rounded-full bg-background transition-colors duration-300">
        {/* Left: Icon Logo */}
        <div className="flex items-center space-x-2 z-10">
          <Image
            src="/logo-icon.svg"
            alt="logo icon"
            className="object-contain"
            width={100}
            height={50}
            priority
          />
        </div>

        {/* Center: Text Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo-text.svg"
            alt="logo text"
            className="object-contain"
            width={200}
            height={100}
            priority
          />
        </div>

        {/* Right: Theme Toggle */}
        <div className="z-10">
          <ToggleDarkLight />
        </div>
      </div>
    </nav>
  );
}
