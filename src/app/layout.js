"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <body className={inter.className}>
        <div className="relative w-full justify-center flex items-center">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        {children}
      </body>
    </html>
  );
}
