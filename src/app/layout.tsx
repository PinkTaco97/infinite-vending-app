// Next.js
import type { Metadata } from "next";

// Global Styles
import "./globals.css";

// Context
import { ThemeProvider } from "@/context";

export const metadata: Metadata = {
  title: "Infinite Vending",
  description:
    "Your trusted vending partner for quality, service & convenience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
