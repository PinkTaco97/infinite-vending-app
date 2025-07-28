"use client";

// React
import React from "react";

// Next.js
import Image from "next/image";
import { redirect } from "next/navigation";

// Components
import { Navbar } from "@/components";

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
          className={`snap-start w-screen h-screen  bg-cover bg-center shadow-lg text-white text-center
            ${theme === "dark" ? "" : ""}
          `}
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
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                service
              </span>{" "}
              & {/* from-violet-600 to-indigo-600 */}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                convenience
              </span>
            </h1>
            {/* <p className="text-lg md:text-xl mb-6">
              Reliable, contactless vending machines tailored for your business
            </p> */}
            <button
              className="bg-gradient-to-r from-red-500 to-orange-500  text-white font-semibold px-6 py-3 rounded-full hover:cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => redirect("mailto:contact@infinitevending.com.au")}
            >
              Get in Touch
            </button>
          </div>
        </section>

        {/* About Section */}
        {/* <section className="bg-background snap-start w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center shadow-lg text-text px-6 text-center transition duration-300">
          <h2 className="text-3xl font-bold mb-4">About Infinite Vending</h2>
          <p className="max-w-2xl text-center text-lg">
            Locally owned and operated in SEQ, Infinite Vending provides modern,
            efficient, and fully serviced vending solutions to offices, gyms,
            and schools. Our smart inventory system ensures your machines are
            always stocked — so you never have to think about it.
          </p>
        </section> */}

        {/* How It Works Section */}
        {/* <section className="snap-start w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center shadow-lg text-text px-6 text-center transition duration-300">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <ol className="space-y-4 text-lg max-w-xl">
            <li>1. We deliver and install for free</li>
            <li>2. You choose the products you want</li>
            <li>3. We monitor and restock remotely</li>
            <li>4. You earn commission (optional)</li>
          </ol>
        </section> */}

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
              <Image
                src="/brands/Coke.png"
                alt="Product 1"
                width={brandSize}
                height={brandSize}
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
              />
              <Image
                src="/brands/Pepsi.png"
                alt="Product 2"
                width={brandSize}
                height={brandSize}
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
              />
              <Image
                src="/brands/Smiths.png"
                alt="Product 3"
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
                width={brandSize}
                height={brandSize}
              />
              <Image
                src="/brands/Red Rock Deli.png"
                alt="Product 3"
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
                width={brandSize}
                height={brandSize}
              />
              <Image
                src="/brands/Cadbury.png"
                alt="Product 3"
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
                width={brandSize}
                height={brandSize}
              />
              <Image
                src="/brands/V Energy.png"
                alt="Product 3"
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
                width={brandSize}
                height={brandSize}
              />
              <Image
                src="/brands/Monster.png"
                alt="Product 3"
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
                width={brandSize}
                height={brandSize}
              />
              <Image
                src="/brands/Mother.png"
                alt="Product 3"
                className={`bg-background rounded-full shadow-lg bg-cover bg-center size-[75] sm:size-full`}
                width={brandSize}
                height={brandSize}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className="snap-start w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center shadow-lg text-white text-center transition duration-300"
          style={{ backgroundImage: "url('/bg-6.jpg')" }}
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-white text-center">
              We Do More Than Just Stock Snacks
            </h2>
            <ul className="max-w-xl space-y-2 text-lg sm:text-1xl list-none font-bold">
              <li>24/7 Monitoring</li>
              <li>Custom Product Selection</li>
              <li>Modern Cashless Payments</li>
              <li>Fast Restocking Guarantee</li>
              <li>Local SEQ Support</li>
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
