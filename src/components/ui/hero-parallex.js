"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

const HeroParallaxUI = ({
  products,
  renderHeader,
  renderVideo = false,
  renderThumbnail,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

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

  const renderCard = React.useCallback(
    (product, translate) => {
      return (
        <motion.div
          style={{ x: translate }}
          whileHover={{ y: -20 }}
          key={product.title}
          className="group/product h-96 w-[15rem] relative flex-shrink-0"
        >
          {renderVideo ? (
            <VideoPlayer url={product.link} />
          ) : renderThumbnail ? (
            <Thumbnail {...product} />
          ) : (
            <ProductCard product={product} />
          )}
        </motion.div>
      );
    },
    [renderVideo, renderThumbnail]
  );

  return (
    <div
      ref={ref}
      className="md:pt-40  overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] md:mb-40"
    >
      {renderHeader()}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          scale: isMobile ? 0.7 : 1, // Adjust this value as needed
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 md:mb-20">
          {firstRow.map((product) => renderCard(product, translateX))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => renderCard(product, translateXReverse))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => renderCard(product, translateX))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => (
  <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
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

const VideoPlayer = ({ url }) => (
  <div className="relative">
    <iframe
      src={url}
      width="80%"
      height="380"
      frameBorder="0"
      className="object-cover object-left-top absolute h-full w-full inset-0"
    ></iframe>
  </div>
);

const ProductCard = React.memo(({ product }) => (
  <Link href={product.link} className="block group-hover/product:shadow-2xl">
    <Image
      src={product.thumbnail}
      height="600"
      width="600"
      className="object-cover object-left-top absolute h-full w-full inset-0"
      alt={product.title}
    />
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {product.title}
    </h2>
  </Link>
));

const Thumbnail = ({ thumbnail, link, title }) => (
  <Link
    href={link}
    target="__blank"
    className="relative flex gap-10 h-full group/image"
  >
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
        <Image
          src={thumbnail}
          alt={title}
          width={800}
          height={800}
          className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
        />
      </div>
    </div>
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {title}
    </h2>
  </Link>
);

export default HeroParallaxUI;
export { Header, VideoPlayer, ProductCard, Thumbnail };
