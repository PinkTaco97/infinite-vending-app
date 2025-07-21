"use client";

// React
import { useState } from "react";

// Next.js
import Link from "next/link";
import Image from "next/image";

// Components
import { ToggleDarkLight } from "@/components/buttons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background max-w-7xl m-5 px-4 rounded-full sm:px-6 lg:px-8">
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
            {/* <Image
              src="/logo-text.svg"
              alt="logo text"
              className="mx-auto object-contain"
              width={100}
              height={50}
              priority
            /> */}
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex space-x-6 align-items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-full px-4 py-2">
            <Link href="/suggestions" className="text-text hover:text-blue-600">
              Suggestions
            </Link>
            <Link href="/contact" className="text-text hover:text-blue-600">
              Contact
            </Link>
            <ToggleDarkLight />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
