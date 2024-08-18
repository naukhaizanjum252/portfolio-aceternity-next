"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const LayoutGridUI = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn("h-72 ", card.className)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="200"
        width="500"
        className={cn(
          `${card.removeCover ? "" : "object-cover"} object-${
            card.position || "top"
          } absolute inset-0 h-full w-full transition duration-200`
        )}
        alt="thumbnail"
      />
      {hover && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: -10,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="absolute mt-2.5 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
        >
          <p className="text-white text-lg font-bold">Click to Expand</p>
        </motion.div>
      )}
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[50]">
      {/* Overlay with background opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selected ? 0.7 : 0 }}
        className="absolute inset-0 h-full w-full bg-black z-10"
      />
      {/* Content with separate styling */}
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70] bg-transparent" // Ensure the background of content is transparent
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
