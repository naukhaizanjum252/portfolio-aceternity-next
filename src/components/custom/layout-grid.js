"use client";
import { LayoutGridUI } from "../ui/layout-grid";

export function LayoutGrid() {

  const cards = [
    {
      id: 1,
      content: (
        <Skeleton
          title="Innovating Tomorrow: A Deep Dive into Tech Trends"
          description="Craft compelling visual narratives that showcase the latest in technology. From AI breakthroughs to cybersecurity, these videos bring complex tech concepts to life, making them accessible and engaging for your audience."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-green-700 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/18l6OQ28oR0VYwA6JJVbLw37Lww3AYK53?usp=drive_link"
        />
      ),
      className: "col-span-2 md:col-span-2",
      thumbnail:
        "https://drive.google.com/uc?id=18KlARBcdQCjUkXAKWOduFXHHjBQrwcRb",
      position: "bottom",
      removeCover: true,
    },
    {
      id: 2,
      content: (
        <Skeleton
          title="Beyond the Frame: The Art of Animation"
          description="Bring stories to life with vibrant animation. This collection of videos showcases the magic of animation, from intricate character designs to seamless motion, perfect for capturing the imagination of any audience."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-indigo-800 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/1lXFU-UUfTzx4fPXCA76858ghH8ywJgcw?usp=drive_link"
        />
      ),
      className: "col-span-2 md:col-span-1",
      thumbnail:
        "https://drive.google.com/uc?id=18LSgp1NV1c6513VRuPxJlwAkN9_KkzgG",
    },
    {
      id: 3,
      content: (
        <Skeleton
          title="YouTube Unscripted: The Rise of Digital Creators"
          description="Editing dynamic YouTube content that stands out in a crowded space. These videos are tailored to engage viewers, optimizing storytelling and pacing to keep your audience hooked from start to finish."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-red-800 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/1y-R4Si3Co12gNPggEHi42a2y9iZ9d1Ru?usp=drive_link"
        />
      ),
      className: "col-span-2 md:col-span-1",
      thumbnail:
        "https://drive.google.com/uc?id=18M7rHSZzFG0A1ImL-tCgesDwyiURPHJa",
    },
    {
      id: 4,
      content: (
        <Skeleton
          title="Echoes of the Past: Unveiling History's Mysteries"
          description="Expertly edited historical videos that transport viewers back in time. Each video is crafted to highlight significant events, using powerful visuals and narrative pacing to captivate and educate."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-red-900 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/1OY2EG9o6n0U367_tFqRhQyp718idw9kM?usp=drive_link"
        />
      ),
      className: "col-span-2",
      thumbnail:
        "https://drive.google.com/uc?id=18No4E4Iit08UO5aHJ9P3KdLNvnAVQohk",
      removeCover: true,
    },
    {
      id: 5,
      content: (
        <Skeleton
          title="Inside the Mind: True Crime Uncovered"
          description="Dive into the world of true crime with videos that unravel complex stories. These edits focus on building suspense and intrigue, turning real-life events into compelling narratives that keep viewers on the edge of their seats."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-red-900 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/1WXPrCsQx9HxyWmmQE7gPb-mZXWYqts07?usp=drive_link"
        />
      ),
      className: "col-span-2",
      thumbnail:
        "https://drive.google.com/uc?id=18RImXxCn_7XZ1psz3CAezWTfc-cg3EBn",
      position: "bottom",
      removeCover: true,
    },
    {
      id: 6,
      content: (
        <Skeleton
          title="Digital Marketplaces: The Future of Commerce"
          description="Editing videos that highlight the dynamic world of ecommerce. These videos focus on showcasing products, services, and strategies that drive online business success, with crisp visuals and engaging storytelling."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-green-500 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/1wQxJQ9WEO7JYkoJpH6-IJCWPauLAQTr0?usp=drive_link"
        />
      ),
      className: "col-span-2 md:col-span-1",
      thumbnail:
        "https://drive.google.com/uc?id=18VlZZRwqVQApeurilMf7zpaT7us9kyhS",
      removeCover: true,
    },
    {
      id: 7,
      content: (
        <Skeleton
          title="Through the Lens: Documenting the Real World"
          description="Creating impactful documentaries that bring real-world stories to the screen. These videos are edited to convey powerful messages and deep emotions, providing viewers with a meaningful and immersive experience."
          button={
            <button className="p-[3px] relative">
              <div className={`absolute inset-0 bg-yellow-600 rounded-lg`} />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Videos
              </div>
            </button>
          }
          folderUrl="https://drive.google.com/drive/folders/1bUq4FdPqG0of7w7xCgKUz2fbOuE80Wmj?usp=drive_link"
        />
      ),
      className: "col-span-3 h-96",
      thumbnail:
        "https://drive.google.com/uc?id=18VvVIIvEwVNxZGfhTv0W26x7uEIVsfK_",
      removeCover: true,
    },
  ];

  return (
    <div className="py-20 w-full cursor-pointer">
      <LayoutGridUI cards={cards} />
    </div>
  );
}

const Skeleton = ({ title, description, button, folderUrl }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-start md:px-10">
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {description}
        </p>
      </div>
      <div className="md:mt-8 flex items-center ">
        <a target="_blank" href={folderUrl}>
          {button && button}
        </a>
      </div>
    </div>
  );
};
