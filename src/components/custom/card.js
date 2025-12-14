"use client";
import { cn } from "@/lib/utils";
import { IconEye } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function VideoCard({ item }) {
  const { link, views, tags = [] } = item || {};
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <Card 
      className="p-4 md:p-6 group relative transition-all duration-500"
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video iframe */}
      <motion.div 
        className="relative w-full aspect-video overflow-hidden rounded-xl"
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <iframe
          className="rounded-xl"
          src={link || "https://www.youtube.com/embed/tQln4Z2EwA8"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width={isMobile ? "300" : "400"}
          height={"250"}
        />
      </motion.div>

      {/* Tags */}
      {tags.length > 0 && (
        <motion.div 
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-[9px] md:text-[11px] font-semibold tracking-wide uppercase rounded-lg
               bg-gradient-to-r from-white/20 to-white/5 dark:from-white/10 dark:to-white/0
               backdrop-blur-sm
               text-neutral-800 dark:text-neutral-200
               border border-white/20
               shadow-sm hover:text-[#02e8a3] hover:border-[#02e8a3]
               transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Views */}
      <motion.div 
        className="flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#02e8a3]/20 to-transparent text-[#02e8a3] font-medium w-fit"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.5 }}
        >
          <IconEye className="w-4 h-4" />
        </motion.div>
        <span className="text-sm">{views} views</span>
      </motion.div>
    </Card>
  );
}

export const Card = ({ className, children, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      className={cn(
        "max-w-md w-full mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.15)] dark:bg-[rgba(40,40,40,0.50)] bg-gray-100 shadow-md",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      animate={{
        borderColor: isHovered ? "rgba(2, 232, 163, 0.5)" : "rgba(255,255,255,0.15)",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(2, 232, 163, 0.2)" 
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
        y: isHovered ? -8 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
