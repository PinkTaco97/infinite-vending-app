"use client";

// React
import React from "react";

// Next.js
import Image from "next/image";

// Components
import { Navbar } from "@/components";

// Constants
import { sellingPoints, brands } from "@/constants";

// Hooks
import { useTheme } from "@/hooks";

export default function Home() {
  const { theme } = useTheme();
  const brandSize = 150;

  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden scroll-smooth overscroll-contain">
        {/* Hero Section */}
        <section
          className="snap-start w-screen h-screen  bg-cover bg-center shadow-lg text-white text-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          {/* Overlay for better text visibility */}
          <div
            className={`w-full h-full px-6 flex flex-col items-center justify-center transition-all duration-300
              ${
                theme === "dark"
                  ? "backdrop-brightness-33"
                  : "backdrop-brightness-50"
              }
            `}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-10">
              {/* Vending Machines for Modern Workspaces */}
              {/* The Future of Vending.<br />Delivered Today. */}
              Your trusted vending partner for
              <br />
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
              href="mailto:contact@infinitevending.com.au"
              className="bg-gradient-to-r from-red-500 to-orange-500  text-white font-semibold px-6 py-3 rounded-full hover:cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section
          className="snap-start w-screen h-screen  bg-cover bg-center shadow-lg text-white text-center"
          style={{ backgroundImage: "url('/bg-8.jpg')" }}
        >
          <div
            className={`w-full h-full px-6 flex flex-col items-center justify-center transition-all duration-300
              ${
                theme === "dark"
                  ? "backdrop-brightness-33"
                  : "backdrop-brightness-50"
              }
            `}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-10" />
            <p className="max-w-2xl text-center text-lg sm:text-xl font-semibold">
              Locally owned and operated in SEQ, Infinite Vending provides
              modern, efficient, and fully serviced vending solutions to
              offices, gyms, and schools. Our smart inventory system ensures
              your machines are always stocked — so you never have to think
              about it.
            </p>
          </div>
        </section>

        {/* Product Gallery */}
        <section
          className="snap-start w-screen h-screen bg-cover bg-center relative bg-gradient-to-t from-slate-700 to-slate-800"
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
          <div
            className={`w-full h-full px-6 flex flex-col items-center justify-center transition-all duration-300 z-10
              ${
                theme === "dark"
                  ? "backdrop-brightness-33"
                  : "backdrop-brightness-50"
              }
            `}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-white text-center">
              Your Favorite Brands
              <br />
              Always Stocked
            </h2>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-6 max-w-4xl">
              {brands.map((item) => (
                <Image
                  src={`/brands/${item}.png`}
                  alt={item}
                  width={brandSize}
                  height={brandSize}
                  className="bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className="snap-start w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center shadow-lg text-white text-center transition duration-300"
          style={{ backgroundImage: "url('/bg-7.jpg')" }}
        >
          {/* Overlay for better text visibility */}
          <div
            className={`w-full h-full px-6 flex flex-col items-center justify-center transition-all duration-300
              ${
                theme === "dark"
                  ? "backdrop-brightness-33"
                  : "backdrop-brightness-50"
              }
            `}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">
              We Do More Than Just Stock Snacks
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-10" />

            <ul className="max-w-2xl text-left space-y-4 text-lg sm:text-xl font-semibold">
              {sellingPoints.map((item, id) => (
                <li key={id} className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        {/* <section className="snap-start w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center shadow-lg text-white px-6 text-center transition duration-300">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-stone-700 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-stone-700 text-white"
            />
            <input
              type="text"
              placeholder="Business Type / Location"
              className="w-full px-4 py-2 rounded bg-stone-700 text-white"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500"
            >
              Submit
            </button>
          </form>
        </section> */}
      </div>
    </main>
  );
}
