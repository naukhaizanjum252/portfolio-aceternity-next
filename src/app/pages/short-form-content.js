"use client";
import HeroParallax from "@/components/custom/hero-parallex";
import React from "react";

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
      <HeroParallax renderVideo={false} renderHeader={renderHeader} />
    </>
  );
};

export default ShortFormContent;
