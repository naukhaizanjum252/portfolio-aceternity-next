"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

const HeroParallaxUI = ({
  products,
  renderHeader,
  renderVideo = false,
  renderThumbnail,
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const renderCard = (product, translate) => {
    return (
      <>
        <motion.div
          style={{
            x: translate,
          }}
          whileHover={{
            y: -20,
          }}
          key={product.title}
          className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
          {renderVideo ? (
            <VideoPlayer url={product.link} />
          ) : renderThumbnail ? (
            <Thumbnail {...product} />
          ) : (
            <ProductCard product={product} key={product.title} />
          )}
        </motion.div>
      </>
    );
  };

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 50]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] mb-40"
    >
      {renderHeader()}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => renderCard(product, translateX))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => renderCard(product, translateXReverse))}
        </motion.div>
        <motion.div className="flex flex-row-reverse  space-x-reverse space-x-20 ">
          {thirdRow.map((product) => renderCard(product, translateX))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};
export const VideoPlayer = ({ url }) => {
  return (
    <div>
      <iframe
        src={url}
        width="80%"
        height="380"
        // allow="autoplay"
        frameBorder="0"
        className="object-cover object-left-top absolute h-full w-full inset-0"
      ></iframe>
    </div>
  );
};

export const ProductCard = ({ product }) => {
  return (
    <>
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </>
  );
};
export const Thumbnail = (product) => {
  return (
    <>
      <Link
        href={product.link}
        target="__blank"
        className="relative flex gap-10  h-full group/image"
      >
        <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
            {/* TODO */}
            <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
            <Image
              src={product.thumbnail}
              alt="header"
              width={800}
              height={800}
              className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
            />
          </div>
        </div>
      </Link>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </>
  );
};
export default HeroParallaxUI;
