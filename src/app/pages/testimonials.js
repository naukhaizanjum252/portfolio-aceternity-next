import { CardStack } from "@/components/custom/card-stack";
import InfiniteMovingCards from "@/components/custom/infinite-moving-cards";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className=" ml-8 flex flex-col p-20">
        <div className="flex justify-between items-start mt-8">
          <div className="flex-1">
            <h1 className="md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Testimonials
            </h1>
            <p className="max-w-xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-4">
              Discover the impact of working with me through the words of those
              who've experienced my passion and dedication firsthand.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <CardStack />
            {/* <InfiniteMovingCards /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
