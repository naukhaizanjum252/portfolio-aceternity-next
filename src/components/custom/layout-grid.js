"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGridUI } from "../ui/layout-grid";
import MovingBorderButton from "./moving-border-button";

export function LayoutGrid() {
  return (
    <div className="py-20 w-full cursor-pointer">
      <LayoutGridUI cards={cards} />
    </div>
  );
}

const Skeleton = ({ title, description, button, folderUrl }) => {
  return (
    <div className="flex justify-between items-start px-10">
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {description}
        </p>
      </div>
      <div className="mt-8  flex items-center ">
        <a target="_blank" href={folderUrl}>
          {button && button}
        </a>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: (
      <Skeleton
        title="House in the woods"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
        // borderColor="green-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-green-700 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/18l6OQ28oR0VYwA6JJVbLw37Lww3AYK53?usp=drive_link"
      />
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://drive.google.com/uc?id=18KlARBcdQCjUkXAKWOduFXHHjBQrwcRb",
    position: "bottom",
    removeCover: true,
  },
  {
    id: 2,
    content: (
      <Skeleton
        title="House above the clouds"
        description="Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life."
        // borderColor="blue-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-indigo-800 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/1lXFU-UUfTzx4fPXCA76858ghH8ywJgcw?usp=drive_link"
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://drive.google.com/uc?id=18LSgp1NV1c6513VRuPxJlwAkN9_KkzgG",
  },
  {
    id: 3,
    content: (
      <Skeleton
        title="Greens all over"
        description="A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life."
        // borderColor="green-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-red-800 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/1y-R4Si3Co12gNPggEHi42a2y9iZ9d1Ru?usp=drive_link"
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://drive.google.com/uc?id=18M7rHSZzFG0A1ImL-tCgesDwyiURPHJa",
  },
  {
    id: 4,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
        // borderColor="red-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-red-900 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/1OY2EG9o6n0U367_tFqRhQyp718idw9kM?usp=drive_link"
      />
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://drive.google.com/uc?id=18No4E4Iit08UO5aHJ9P3KdLNvnAVQohk",
    removeCover: true,
  },
  {
    id: 5,
    content: (
      <Skeleton
        title="Cosmic"
        description="A house with a view of the cosmos. It's a place of wonder and awe."
        // borderColor="red-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-red-900 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/1WXPrCsQx9HxyWmmQE7gPb-mZXWYqts07?usp=drive_link"
      />
    ),
    className: "col-span-2",
    thumbnail:
      "https://drive.google.com/uc?id=18RImXxCn_7XZ1psz3CAezWTfc-cg3EBn",
    position: "bottom",
  },
  {
    id: 6,
    content: (
      <Skeleton
        title="Wildflower"
        description="A house surrounded by wildflowers and nature's beauty. It's the perfect place to relax, unwind, and enjoy life."
        // borderColor="green-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-green-500 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/1wQxJQ9WEO7JYkoJpH6-IJCWPauLAQTr0?usp=drive_link"
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://drive.google.com/uc?id=18VlZZRwqVQApeurilMf7zpaT7us9kyhS",
    removeCover: true,
  },
  {
    id: 7,
    content: (
      <Skeleton
        title="Sunset"
        description="A house with a view of the sunset. It's a place of serenity and tranquility."
        // borderColor="yellow-500"
        button={
          <button className="p-[3px] relative">
            <div className={`absolute inset-0 bg-yellow-600 rounded-lg`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Videos
            </div>
          </button>
        }
        folderUrl="https://drive.google.com/drive/folders/1bUq4FdPqG0of7w7xCgKUz2fbOuE80Wmj?usp=drive_link"
      />
    ),
    className: "col-span-3 h-96",
    thumbnail:
      "https://drive.google.com/uc?id=18VvVIIvEwVNxZGfhTv0W26x7uEIVsfK_",
    removeCover: true,
  },
];
