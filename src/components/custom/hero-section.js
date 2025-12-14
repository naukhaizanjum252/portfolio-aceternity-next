"use client";
import Spotlight from "./spotlight";
import MovingBorderButton from "./moving-border-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const subTextArray = [
    {
      text: "Frame",
      className:
        "font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
    },
    {
      text: "by",
      className:
        "font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
    },
    {
      text: "Frame.",
      className:
        "font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
    },
  ];

  const renderAvatar = () => {
    return (
      <motion.div 
        className="mt-20 md:mt-44 ml-2 md:ml-32 p-6 md:p-8 relative z-10 w-full md:w-auto flex flex-col items-center md:items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          {/* Glow effect behind avatar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#02e8a3]/30 to-cyan-500/30 blur-2xl scale-110" />
          <Image
            height="250"
            width="250"
            src="/images/5.png"
            alt="Profile Picture"
            className="rounded-full relative z-10"
          />
        </motion.div>
        
        <motion.h1 
          className="mt-4 md:mt-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Naukhaiz Anjum
        </motion.h1>
        
        <motion.div 
          className="flex justify-center align-center items-center gap-4 mt-2 md:mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-base md:text-lg text-[#02e8a3]">Video Editor</p>
          <div className="flex gap-2 justify-center align-center items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                height="25"
                width="30"
                src="/images/top-rated-plus-badge.png"
              />
            </motion.div>
            <div className="w-4 h-4 bg-white/90 absolute left-[185px] md:left-[158px] -z-10"></div>
            <p className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Top Rated Plus
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const subTextString =
    " Creating high-quality video content that tells your story in the most compelling way possible. From concept to final cut, I handle every aspect of video editing with meticulous attention to detail, ensuring your content resonates with your audience and stands out from the crowd.";
  
  return (
    <>
      <Spotlight />
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center md:items-start justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        {renderAvatar()}
        <motion.div 
          className="p-4 relative z-10 w-full md:w-auto md:mr-0 md:ml-auto md:self-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.h1 
            className="mt-20 md:mt-10 mb-8 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Bringing Your Vision to Life.
            <TypewriterEffectSmooth words={subTextArray} />
          </motion.h1>
          
          <motion.p 
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {subTextString}
          </motion.p>

          <motion.div 
            className="mt-8 flex justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MovingBorderButton
                onClick={() =>
                  document
                    .getElementById("short-form-content")
                    .scrollIntoView({ behavior: "smooth" })
                }
                btnText={"Explore"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
