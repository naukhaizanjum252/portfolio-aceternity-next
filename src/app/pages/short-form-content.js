"use client";
import HeroParallax from "@/components/custom/hero-parallex";
import React from "react";

export const products = [
  {
    title: "Moonbeam",
    link: "https://drive.google.com/file/d/1CQARk81vZ_WUwVXpqHq3iu7XDKdzefg0/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1rUW-BbMRrue8wTQi1xKOerYWLD8FtfPb/view?usp=drive_link",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://drive.google.com/file/d/18K3t-MYQbpxoP4MBzeqXhyAVPeSat5Si/view?usp=drive_link",
  },
  {
    title: "Rogue",
    link: "https://drive.google.com/file/d/16ecPC5hxMFJ06OHNSj6KuXplOgIYz2i3/preview",
    thumbnail:
      "https://drive.google.com/file/d/1maYQuNH2g6UZde6foYES9CRzT0rIaGEE/view?usp=drive_link",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://drive.google.com/file/d/16ecPC5hxMFJ06OHNSj6KuXplOgIYz2i3/preview",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
const ShortFormContent = () => {
  const renderHeader = () => {
    return (
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          The Ultimate Video Editing
          <br /> Experience
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          I specialize in creating visually stunning videos using the latest
          techniques and tools. With a passion for storytelling and a keen eye
          for detail, I transform raw footage into captivating narratives.
          Whether it's a corporate video, a cinematic project, or dynamic social
          media content, I bring your vision to life with precision and
          creativity.
        </p>
      </div>
    );
  };
  return (
    <>
      <HeroParallax
        products={products}
        renderVideo={false}
        renderHeader={renderHeader}
      />
    </>
  );
};

export default ShortFormContent;
