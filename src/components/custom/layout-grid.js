"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGridUI } from "../ui/layout-grid";

export function LayoutGrid() {
  return (
    <div className="h-screen py-20 w-full cursor-pointer">
      <LayoutGridUI cards={cards} />
    </div>
  );
}

const Skeleton = ({ title, description }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <Skeleton title="House in the woods" description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life." />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <Skeleton title="House above the clouds" description="Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a place where the sky meets home, and tranquility is a way of life." />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <Skeleton title="Greens all over" description="A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy life." />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <Skeleton title="Rivers are serene" description="A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and enjoy life." />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

