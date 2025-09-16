import { VideoCard } from "@/components/custom/card";
import { Carousel } from "@/components/ui/apple-cards-carousel";

const TopPerformingVideos = () => {
  const data = [
    {
      link: "https://www.youtube.com/embed/TFA7olTnqas",
      views: "5.2M+",
      tags: [
        "Long-form",
        "Celebrity",
        "High-Energy",
        "Captions",
        "TikTok Style",
      ],
    },
    {
      link: "https://www.youtube.com/embed/iH8vU5ezfRY",
      views: "1M+",
      tags: ["Finance", "Talking Head", "Long Form Content", "Business"],
    },
    {
      link: "https://www.youtube.com/embed/L8PUet-YUSE",
      views: "785k",
      tags: ["Talking Head", "YouTube Long-form", "Politics", "Informational"],
    },
    {
      link: "https://www.youtube.com/embed/tQln4Z2EwA8",
      views: "333k",
      tags: [
        "Talking Head",
        "News Style",
        "YouTube Long-form",
        "Informational",
      ],
    },
    {
      link: "https://www.youtube.com/embed/HPlXGaIozJI",
      views: "151k",
      tags: ["Short-form", "High-Energy", "Captions", "YouTube Shorts"],
    },
    {
      link: "https://www.youtube.com/embed/MlHfmoLFcKY",
      views: "44k",
      tags: [
        "Podcast Style",
        "Talking Head",
        "Long-form",
        "Content Repurposing",
      ],
    },
    {
      link: "https://www.youtube.com/embed/KrPqnzT-W8A",
      views: "37k",
      tags: [
        "Storytelling",
        "B-Roll",
        "Documentary Style",
        "YouTube Long-form",
      ],
    },
  ];

  const cards = data?.map((card, index) => (
    <div>
      <VideoCard key={card.link} item={card} />
    </div>
  ));

  const renderHeader = () => {
    return (
      <div className="max-w-7xl relative mx-auto pt-20 md:pt-40 px-4 w-full left-0 top-0">
        <h2 className="text-2xl md:text-6xl font-bold dark:text-white">
          My Top Performing Videos
        </h2>
        <p className="max-w-5xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Here are some of my most impactful edits that have gained high
          engagement and recognition. Each video highlights my expertise in
          crafting compelling stories, optimized for different platforms and
          audiences.
        </p>
      </div>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Carousel items={cards} />
    </div>
  );
};

export default TopPerformingVideos;
