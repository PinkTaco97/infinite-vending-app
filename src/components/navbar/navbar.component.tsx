"use client";

// Next.js
import Image from "next/image";

// Components
import { ToggleDarkLight } from "@/components/buttons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div className="bg-background transition-colors duration-300 px-3 min-w-sm max-w-5xl m-5 rounded-full sm:px-3 lg:px-3">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logos */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-icon.svg"
              alt="logo icon"
              className="mx-auto object-contain"
              width={100}
              height={50}
              priority
            />
            <Image
              src="/logo-text.svg"
              alt="logo text"
              className="mx-auto object-contain"
              width={100}
              height={50}
              priority
            />
          </div>
          <div className="flex  align-items-center justify-center rounded-full  ">
            <ToggleDarkLight />
          </div>
        </div>
      </div>
    </nav>
  );
}
