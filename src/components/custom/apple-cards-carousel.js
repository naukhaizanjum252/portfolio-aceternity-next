"use client";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Spin } from "antd";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const convertGoogleDriveLink = (url) => {
  // Regular expression to match the Google Drive URL structure
  const regex =
    /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view.*?/;

  // Replace the matched link with the preview format
  const match = url.match(regex);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }

  // Return the original URL if it doesn't match the expected format
  return url;
};

// Extract file ID from Google Drive URL
const extractFileId = (url) => {
  const patterns = [/\/file\/d\/([a-zA-Z0-9_-]+)/, /id=([a-zA-Z0-9_-]+)/];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Get thumbnail URL from Google Drive file ID
const getThumbnailUrl = (url) => {
  const fileId = extractFileId(url);
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  }
  return url;
};

// Individual video card component with thumbnail overlay
const VideoCard = ({ card, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    setLoading(true);
    setIsPlaying(true);
  };

  return (
    <motion.div
      className="relative h-[20rem] w-[15rem] md:h-[40rem] md:w-[25rem] rounded-3xl overflow-hidden bg-gray-900 cursor-pointer"
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
            onClick={handlePlay}
          >
            {/* Thumbnail Image */}
            <div className="relative w-full h-full">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <Spin />
                </div>
              )}
              <Image
                src={getThumbnailUrl(card?.link)}
                alt={card?.name || "Video thumbnail"}
                fill
                className="object-cover"
                onLoad={() => setImageLoaded(true)}
                unoptimized
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

              {/* Play button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`
                  flex items-center justify-center 
                  w-16 h-16 md:w-20 md:h-20 
                  rounded-full 
                  bg-red-600 
                  shadow-lg shadow-red-600/50
                  transition-all duration-300
                  ${isHovered ? "bg-red-500 shadow-red-500/60" : ""}
                `}
                >
                  <IconPlayerPlayFilled className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                </div>
              </motion.div>

              {/* Video title (if available) */}
              {card?.name && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm md:text-base font-medium line-clamp-2 drop-shadow-lg">
                    {card.name}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900/80">
                <Spin />
              </div>
            )}
            <iframe
              id={`videoFrame-${index}`}
              className="h-full w-full rounded-3xl"
              src={convertGoogleDriveLink(card?.link)}
              allow="autoplay; encrypted-media"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              onLoad={() => setLoading(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const CardsCarousel = ({ data, renderDirectly = false }) => {
  const [playerVisible, setPlayerVisible] = useState(null);
  const [loading, setLoading] = useState(true);

  const cards = data?.map((card, index) =>
    renderDirectly ? (
      <VideoCard key={card?.id || index} card={card} index={index} />
    ) : (
      <>
        {playerVisible === index ? (
          <div className="relative h-[20rem] w-[15rem] md:h-[40rem] md:w-[25rem] rounded-3xl overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-3xl z-10 bg-gray-900/50">
                <Spin />
              </div>
            )}
            <iframe
              id="videoFrame"
              className="h-full w-full rounded-3xl"
              src={convertGoogleDriveLink(card?.link)}
              allow="autoplay; encrypted-media"
              onLoad={() => setLoading(false)}
            ></iframe>
          </div>
        ) : (
          <motion.div
            className="relative"
            whileHover={{ y: -20 }}
            onClick={() => {
              setLoading(true);
              setPlayerVisible(index);
            }}
          >
            <Card key={card.link} card={card} index={index} {...card} />
          </motion.div>
        )}
      </>
    )
  );

  return <Carousel items={cards} />;
};
