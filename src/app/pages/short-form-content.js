"use client";
import HeroParallax from "@/components/custom/hero-parallex";
import React from "react";

const products = [
  {
    title: "Moonbeam",
    link: "https://drive.google.com/file/d/15eODuMf9Xgm12J4S3poXrhB1daNyCena/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1rUW-BbMRrue8wTQi1xKOerYWLD8FtfPb/view?usp=drive_link",
  },
  {
    title: "Cursor",
    link: "https://drive.google.com/file/d/1_S4s9eOYB_9Y3uJHxHn0c4-jlidSgJOg/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/18K3t-MYQbpxoP4MBzeqXhyAVPeSat5Si/view?usp=drive_link",
  },
  {
    title: "Rogue",
    link: "https://drive.google.com/file/d/11yOSpU2lsBeeoI-U1-jx5jNOzMGLr7eF/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1maYQuNH2g6UZde6foYES9CRzT0rIaGEE/view?usp=drive_link",
  },
  {
    title: "Editorially",
    link: "https://drive.google.com/file/d/1PLnpYyCBxbfJsdxW6vPFv61Tw72MZmx8/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/12P1HMW1d9hWKHcbt3SApekQJyK-l2VzT/view?usp=drive_link",
  },
  {
    title: "Editrix AI",
    link: "https://drive.google.com/file/d/1dvuLw3Yr4hKBwfTUYM2eHKMMSGj-AMfe/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1ysn669N6neEpq8HrzjguslrEVmMjRVjH/view?usp=drive_link",
  },
  {
    title: "Pixel Perfect",
    link: "https://drive.google.com/file/d/1xawA3DCigqyVS8Amhw3euE_6lMTkJmOg/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1bNdiHxnJKGA2OZDjGQM_CaUBMeVLTz7D/view?usp=drive_link",
  },
  {
    title: "Algochurn",
    link: "https://drive.google.com/file/d/1qyyCP-J3xsjFhGY-GPm4m-yPSS7HfE20/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1JHcsOYIJqNgDqCI0tMIHdNaKSq5gCt_g/view?usp=drive_link",
  },
  {
    title: "Aceternity UI",
    link: "https://drive.google.com/file/d/1wOB6vR1HqU4pm5g-ElsinmNZ0yMy9UG3/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/13TsJzXn2RWzuV5MRkLdkl1mGBj95a2vm/view?usp=drive_link",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://drive.google.com/file/d/1xBfKLvsphbhKskk9fJSjyhc-nzt6448z/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1yGwt978ThC2YYGKeGmmm3WovVxMBZYQZ/view?usp=drive_link",
  },
  {
    title: "SmartBridge",
    link: "https://drive.google.com/file/d/1UxPsOhpQsRW4ENdPaePD9zSreqO4XtuT/view?usp=drive_link",
    thumbnail:
      "https://drive.google.com/file/d/1MO4eUU_Jnk5hUASt2Lb30U8aXEV9i_P4/view?usp=drive_link",
  },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },
  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
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
