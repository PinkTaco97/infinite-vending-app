"use client";

// React
import React from "react";

// Next.js
import Image from "next/image";

// Components
import { Navbar, Overlay } from "@/components";

// Constants
import { sellingPoints, brands } from "@/constants";

// Forms
import { GetInTouchForm } from "@/components/forms";

// Icons
import { CheckIcon } from "@/components/icons";

// Hooks
import { useTheme } from "@/hooks";

export default function Home() {
  const { theme } = useTheme();
  const brandSize = 150;

  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="snap-y snap-mandatory h-lvh w-lvw overflow-y-scroll overflow-x-hidden scroll-smooth overscroll-contain">
        {/* Hero Section */}
        <section
          className="snap-start h-lvh w-lvw bg-cover bg-center shadow-lg text-white text-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <Overlay>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl w-full">
              {/* Vending Machines for Modern Workspaces */}
              {/* The Future of Vending.<br />Delivered Today. */}
              Your trusted vending partner for {""}
              <span className="bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
                quality
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                service
              </span>{" "}
              & {/* from-violet-600 to-indigo-600 */}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                convenience
              </span>
            </h1>
            <a
              href="#contact"
              // href="mailto:contact@infinitevending.com.au"
              className="bg-gradient-to-r from-red-500 to-orange-500  text-white font-semibold px-6 py-3 rounded-full hover:cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </a>
          </Overlay>
        </section>

        {/* About Section */}
        <section
          className="snap-start h-lvh w-lvw  bg-cover bg-center shadow-lg text-white text-center"
          style={{ backgroundImage: "url('/bg-2.jpg')" }}
        >
          <Overlay>
            <h2 className="text-5xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-10" />
            <p className="max-w-2xl text-center text-lg sm:text-xl font-semibold">
              Locally owned and operated in SEQ, Infinite Vending provides
              modern, efficient, and fully serviced vending solutions to
              offices, gyms, and schools. Our smart inventory system ensures
              your machines are always stocked so you never have to think about
              it.
            </p>
          </Overlay>
        </section>

        {/* Product Gallery */}
        <section
          className="snap-start h-lvh w-lvw  bg-cover bg-center relative bg-gradient-to-t from-slate-700 to-slate-800"
          // style={{ backgroundImage: "url('/bg-5.jpg')" }}
        >
          {/* Parallax Snacks - Top */}
          <Image
            src="/all-food-snacks.png"
            alt="Snacks Top"
            width={1920}
            height={300}
            className="absolute top-0 left-0 min-w-[1000] w-full h-auto object-top rotate-180 parallax"
          />

          {/* Parallax Snacks - Bottom */}
          <Image
            src="/all-food-snacks.png"
            alt="Snacks Bottom"
            width={1920}
            height={300}
            className="absolute bottom-0 left-0 min-w-[1000] w-full h-auto object-bottom parallax"
          />
          {/* Overlay for better text visibility */}
          <Overlay>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white text-center">
              Your Favorite Brands
              <br />
              Always Stocked
            </h2>
            <div className="w-72 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-8" />
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-6 max-w-4xl">
              {brands.map((item) => (
                <Image
                  key={item}
                  src={`/brands/${item}.png`}
                  alt={item}
                  width={brandSize}
                  height={brandSize}
                  className="bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full"
                />
              ))}
            </div>
          </Overlay>
        </section>

        {/* Why Choose Us */}
        <section
          className="snap-start h-lvh w-lvw flex flex-col items-center justify-center bg-cover bg-center shadow-lg text-white text-center transition duration-300"
          style={{ backgroundImage: "url('/bg-3.jpg')" }}
        >
          <Overlay>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              We Do More Than Just <br /> Stock Snacks
            </h2>

            <div className="w-48 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-10" />

            <ul className="max-w-2xl text-left space-y-4 text-lg sm:text-xl font-semibold">
              {sellingPoints.map((item, id) => (
                <li key={id} className="flex items-center gap-3">
                  <CheckIcon className="h-6 w-6 text-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Overlay>
        </section>

        {/* Contact Form */}
        <section
          id="contact"
          className="snap-start h-lvh w-lvw  bg-cover bg-center shadow-lg text-white text-center"
          style={{ backgroundImage: "url('/bg-4.jpg')" }}
        >
          <Overlay>
            <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
            <div className="w-48 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-10" />
            <GetInTouchForm />
          </Overlay>
        </section>
      </div>
    </main>
  );
}
