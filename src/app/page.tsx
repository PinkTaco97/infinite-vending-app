// Next.js
import Image from "next/image";

// Components.
import { Navbar } from "@/components";

export default function Home() {
  const gradientStyle = "from-stone-800 to-stone-900"; //from-slate-900 to-slate-800";
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
        <div
          className={`snap-start w-screen h-screen flex items-center justify-center bg-cover bg-center shadow-lg content-center
          bg-gradient-to-b ${gradientStyle}`}
          style={{ backgroundImage: "url('/bg-3.jpg')" }}
        >
          <div className="container mx-auto p-6 text-center">
            {/* <Image
              className="mx-auto object-contain"
              src="/logo.svg"
              alt="logo"
              width={750}
              height={750}
              priority
            /> */}

            {/* <Image
              src="/logo-text.svg"
              alt="logo text"
              className="mx-auto object-contain"
              width={500}
              height={500}
              priority
            /> */}
          </div>
        </div>
        <div
          className={`snap-start flex flex-col items-center justify-start content-center py-5 bg-cover bg-center min-h-screen
          bg-gradient-to-t ${gradientStyle}`}
          style={{ backgroundImage: "url('/bg-4.jpg')" }}
        ></div>
      </div>
    </main>
  );
}
