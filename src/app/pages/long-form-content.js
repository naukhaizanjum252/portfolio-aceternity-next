import { BentoGridCustom } from "@/components/custom/bento-grid";
import { LayoutGrid } from "@/components/custom/layout-grid";
import React from "react";


const LongFormContent = () => {
  const renderHeader = () => {
    return (
      <div className="max-w-7xl relative mx-auto pt-20  px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          Comprehensive Creations
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Discover an array of extended content pieces, each a testament to the
          art of storytelling through video. These in-depth
          <span className="text-blue-400"> Long Form </span>
          projects provide a detailed exploration of editing techniques,
          narrative structures, and the creative processes behind our most
          ambitious works.
        </p>
      </div>
    );
  };
  return (
    <>
      {renderHeader()}
      <BentoGridCustom />
      {/* <LayoutGrid /> */}
    </>
  );
};

export default LongFormContent;
