"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCardsUI } from "../ui/infinite-moving-cards";

const InfiniteMovingCards = ({testimonials}) => {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCardsUI
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
};


export default InfiniteMovingCards;
