"use client";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const longFormCards = [
  {
    id: 1,
    title: "Innovating Tomorrow: A Deep Dive into Tech Trends",
    description:
      "Craft compelling visual narratives that showcase the latest in technology. From AI breakthroughs to cybersecurity, these videos bring complex tech concepts to life, making them accessible and engaging for your audience.",
    folderUrl:
      "https://drive.google.com/drive/folders/18l6OQ28oR0VYwA6JJVbLw37Lww3AYK53?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18KlARBcdQCjUkXAKWOduFXHHjBQrwcRb",
    link: "/detail/tech",
  },
  {
    id: 2,
    title: "Beyond the Frame: The Art of Animation",
    description:
      "Bring stories to life with vibrant animation. This collection of videos showcases the magic of animation, from intricate character designs to seamless motion, perfect for capturing the imagination of any audience.",
    folderUrl:
      "https://drive.google.com/drive/folders/1lXFU-UUfTzx4fPXCA76858ghH8ywJgcw?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18LSgp1NV1c6513VRuPxJlwAkN9_KkzgG",
    link: "/detail/animation",
  },
  {
    id: 3,
    title: "YouTube Unscripted: The Rise of Digital Creators",
    description:
      "Editing dynamic YouTube content that stands out in a crowded space. These videos are tailored to engage viewers, optimizing storytelling and pacing to keep your audience hooked from start to finish.",
    folderUrl:
      "https://drive.google.com/drive/folders/1y-R4Si3Co12gNPggEHi42a2y9iZ9d1Ru?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18M7rHSZzFG0A1ImL-tCgesDwyiURPHJa",
    link: "/detail/youtube",
  },
  {
    id: 4,
    title: "Echoes of the Past: Unveiling History's Mysteries",
    description:
      "Expertly edited historical videos that transport viewers back in time. Each video is crafted to highlight significant events, using powerful visuals and narrative pacing to captivate and educate.",
    folderUrl:
      "https://drive.google.com/drive/folders/1OY2EG9o6n0U367_tFqRhQyp718idw9kM?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18No4E4Iit08UO5aHJ9P3KdLNvnAVQohk",
    link: "/detail/history",
  },
  {
    id: 5,
    title: "Inside the Mind: True Crime Uncovered",
    description:
      "Dive into the world of true crime with videos that unravel complex stories. These edits focus on building suspense and intrigue, turning real-life events into compelling narratives that keep viewers on the edge of their seats.",
    folderUrl:
      "https://drive.google.com/drive/folders/1WXPrCsQx9HxyWmmQE7gPb-mZXWYqts07?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18RImXxCn_7XZ1psz3CAezWTfc-cg3EBn",
    link: "/detail/crime",
  },
  {
    id: 6,
    title: "Digital Marketplaces: The Future of Commerce",
    description:
      "Editing videos that highlight the dynamic world of ecommerce. These videos focus on showcasing products, services, and strategies that drive online business success, with crisp visuals and engaging storytelling.",
    folderUrl:
      "https://drive.google.com/drive/folders/1wQxJQ9WEO7JYkoJpH6-IJCWPauLAQTr0?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18VlZZRwqVQApeurilMf7zpaT7us9kyhS",
    link: "/detail/ecom",
  },
  {
    id: 7,
    title: "Through the Lens: Documenting the Real World",
    description:
      "Creating impactful documentaries that bring real-world stories to the screen. These videos are edited to convey powerful messages and deep emotions, providing viewers with a meaningful and immersive experience.",
    folderUrl:
      "https://drive.google.com/drive/folders/1bUq4FdPqG0of7w7xCgKUz2fbOuE80Wmj?usp=drive_link",
    thumbnail:
      "https://drive.google.com/uc?id=18VvVIIvEwVNxZGfhTv0W26x7uEIVsfK_",
    link: "/detail/documentary",
  },
];

export function BentoGridCustom() {
  const [hovered, setHovered] = useState(null);

  return (
    <BentoGrid className="max-w-7xl mx-auto mt-12">
      {longFormCards.map((item, i) => (
        <>
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={() => renderImage(item?.thumbnail, item?.link)}
            className={
              (i === 3 || i === 6 ? "md:col-span-2" : "") +
              (hovered !== null && hovered !== i ? " blur-sm scale-[0.98]" : "")
            }
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(null)}
            hovered={hovered == i}
            folderUrl={item?.link}
          />

          {/* {hovered == i && (
            <a
              href="/videos"
              className="self-end bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
            >
              View All Videos
            </a>
          )} */}
        </>
      ))}
    </BentoGrid>
  );
}
const renderImage = (url, folderUrl) => {
  return (
    <Link target="_blank" href={folderUrl}>
      <div className="flex flex-1 w-full h-full max-h-[20rem] min-h-[18rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image height="50" className="rounded-xl" width="1050" src={url} />;
      </div>
    </Link>
  );
};
