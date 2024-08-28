"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BottomGradient } from "./form";

const Navbar = ({ darkMode, setDarkMode }) => {
  //useeffect to change the site to desktop mode
  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     const viewport = document.querySelector('meta[name="viewport"]');
  //     if (viewport) {
  //       viewport.setAttribute(
  //         "content",
  //         "width=1024, initial-scale=0.3, minimum-scale=0.3, maximum-scale=5, user-scalable=yes"
  //       );
  //       // window.location.reload(); // Reload for the new viewport to take effect
  //     }
  //   }
  // }, []);
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarElement
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        className="top-10"
      />
    </div>
  );
};

function NavbarElement({ className, darkMode, setDarkMode }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 group/btn  text-white",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={false} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              onClick={() =>
                document
                  .getElementById("short-form-content")
                  .scrollIntoView({ behavior: "smooth" })
              }
              href=""
            >
              Short Form Content
            </HoveredLink>
            <HoveredLink
              onClick={() =>
                document
                  .getElementById("long-form-content")
                  .scrollIntoView({ behavior: "smooth" })
              }
              href=""
            >
              Long Form Content
            </HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        {/* <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <MenuItem
            setActive={setActive}
            active={false}
            item="Dark Mode"
          ></MenuItem>
        </div> */}
        <a
          onClick={() =>
            document
              .getElementById("contact-us")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <MenuItem
            setActive={setActive}
            active={false}
            item="Contact Us"
          ></MenuItem>
        </a>
        <BottomGradient />
      </Menu>
    </div>
  );
}
export default Navbar;
