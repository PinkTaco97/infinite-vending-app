"use client";

// React
import React from "react";

// Next.js
import { useSearchParams } from "next/navigation";

// Components
import { Navbar, Overlay } from "@/components";

// Forms
import { SuggestionForm } from "@/components/forms";

// Hooks
import { useTheme } from "@/hooks";

export default function SuggestionPage() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || undefined;
  const brandSize = 150;

  console.log("Location:", location);

  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="snap-y snap-mandatory h-lvh w-lvw overflow-y-scroll overflow-x-hidden scroll-smooth overscroll-contain">
        {/* Suggestion Form */}
        <section
          className="snap-start h-lvh w-lvw  bg-cover bg-center shadow-lg text-white text-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          {/* Overlay for better text visibility */}
          <Overlay>
            <h2 className="text-5xl font-bold mb-4">
              Have a<br />
              Suggestion?
            </h2>

            <div className="w-48 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-10" />

            <SuggestionForm location={location} />
          </Overlay>
        </section>
      </div>
    </main>
  );
}
