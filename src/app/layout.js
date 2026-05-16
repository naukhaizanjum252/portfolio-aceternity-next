"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

        {/* Default SEO */}
        <meta name="theme-color" content="#02e8a3" />
        <meta name="author" content="Naukhaiz Anjum" />
      </head>
      <body className={inter.className}>
        {!isMobile && (
          <div className="relative w-full justify-center flex items-center">
            {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
