"use client";
import { cn } from "@/lib/utils";
import { IconEye } from "@tabler/icons-react";

export function VideoCard({ item }) {
  const { link, views, tags = [] } = item || {};
  return (
    <Card className="group relative hover:shadow-2xl hover:border-[#02e8a3]/50 transition-all duration-500">
      {/* Video iframe */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <iframe
          className="rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
          src={link || "https://www.youtube.com/embed/tQln4Z2EwA8"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width={"400"}
          height={"250"}
        />
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-lg
             bg-gradient-to-r from-white/20 to-white/5 dark:from-white/10 dark:to-white/0
             backdrop-blur-sm
             text-neutral-800 dark:text-neutral-200
             border border-white/20
             shadow-sm hover:text-[#02e8a3] hover:border-[#02e8a3]
             transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Views */}
      <div className="flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#02e8a3]/20 to-transparent text-[#02e8a3] font-medium w-fit">
        <IconEye className="w-4 h-4" />
        <span className="text-sm">{views} views</span>
      </div>
    </Card>
  );
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "max-w-md w-full mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.15)] dark:bg-[rgba(40,40,40,0.50)] bg-gray-100 shadow-md transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
