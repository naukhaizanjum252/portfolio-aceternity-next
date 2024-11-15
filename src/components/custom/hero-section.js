"use client";
import Spotlight from "./spotlight";
import MovingBorderButton from "./moving-border-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import { theme } from "@/app/theme";


const darkMode = true;
const HeroSection = () => {
  const subTextArray = [
    {
      text: "Frame",
      className: `font-bold bg-clip-text ${theme(darkMode)?.["text-color"]}`,
    },
    {
      text: "by",
      className: `font-bold bg-clip-text ${theme(darkMode)?.["text-color"]}`,
    },
    {
      text: "Frame.",
      className: `font-bold bg-clip-text ${theme(darkMode)?.["text-color"]}`,
    },
  ];

  const renderAvatar = () => {
    return (
      <div className="mt-20 md:mt-44 ml-2 md:ml-32 p-6 md:p-8 relative z-10 w-full md:w-auto flex flex-col items-center md:items-start">
        <Image
          height="250"
          width="250"
          src="/images/3.png"
          alt="Profile Picture"
          className="rounded-full"
        />
        <h1
          className={`mt-4 md:mt-6 text-4xl md:text-5xl font-bold bg-clip-text ${
            theme(darkMode)?.["text-color"]
          }`}
        >
          Naukhaiz Anjum
        </h1>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-blue-500">
          Video Editor
        </p>
      </div>
    );
  };

  const subTextString =
    " Creating high-quality video content that tells your story in the most compelling way possible. From concept to final cut, I handle every aspect of video editing with meticulous attention to detail, ensuring your content resonates with your audience and stands out from the crowd.";
  return (
    <>
      {/* <Lamp /> */}
      <Spotlight />
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center md:items-start justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        {renderAvatar()}
        <div className="p-4 relative  z-10 w-full md:w-auto md:mr-0 md:ml-auto md:self-end">
          <h1
            className={`mt-20 md:mt-10 mb-8 text-4xl md:text-5xl font-bold bg-clip-text ${
              theme(darkMode)?.["text-color"]
            }`}
          >
            Bringing Your Vision to Life.
            <TypewriterEffectSmooth words={subTextArray} />
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-0">
            {subTextString}
          </p>

          <div className="mt-8 flex justify-start">
            <MovingBorderButton
              onClick={() =>
                document
                  .getElementById("short-form-content")
                  .scrollIntoView({ behavior: "smooth" })
              }
              btnText={"Explore"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
