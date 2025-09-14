import { CardsCarousel } from "@/components/custom/apple-cards-carousel";

const NicheDetail = ({ params }) => {
  const { niche } = params || {};
  const nicheMapping = {
    tech: {
      title: "Innovating Tomorrow: A Deep Dive into Tech Trends",
      description:
        "Craft compelling visual narratives that showcase the latest in technology. From AI breakthroughs to cybersecurity, these videos bring complex tech concepts to life, making them accessible and engaging for your audience.",
      videos:
        "https://drive.google.com/file/d/1slNxlLMu_OSpBRnYwwdNQEv528upUehO/preview, https://drive.google.com/file/d/1GAMuGhGpNSxScn-tXwklTLl3fKV_ymOn/preview, https://drive.google.com/file/d/1bPiSVDSXz5C_WqGOijuzjYPuYrfoFpy7/preview, https://drive.google.com/file/d/1a4GxEjtDDfDU-BIwpV4puol5TgwmIIz9/preview",
    },
    animation: {
      title: "Beyond the Frame: The Art of Animation",
      description:
        "Bring stories to life with vibrant animation. This collection of videos showcases the magic of animation, from intricate character designs to seamless motion, perfect for capturing the imagination of any audience.",
      videos:
        "https://drive.google.com/file/d/1TGhxd52RwOR4788kjMc1CmRTDJyOyr0D/preview, https://drive.google.com/file/d/1pSJiQqTyCy5lv-_WMb25r8hCI84GjxVA/preview",
    },
    youtube: {
      title: "YouTube Unscripted: The Rise of Digital Creators",
      description:
        "Editing dynamic YouTube content that stands out in a crowded space. These videos are tailored to engage viewers, optimizing storytelling and pacing to keep your audience hooked from start to finish.",
      videos:
        "https://drive.google.com/file/d/1KTXyv8tbh025YGj99JRdOOIpXNPmdG5r/preview, https://drive.google.com/file/d/18enxmZvKpKH1CAhxtT-VVn5Eesn2NlG6/preview",
    },
    history: {
      title: "Echoes of the Past: Unveiling History's Mysteries",
      description:
        "Expertly edited historical videos that transport viewers back in time. Each video is crafted to highlight significant events, using powerful visuals and narrative pacing to captivate and educate.",
      videos:
        "https://drive.google.com/file/d/1IbNSZn9OBEt1FskyhGwGmlJe77qbD8j8/preview, https://drive.google.com/file/d/1-gMz_ccf3xAM0s3s1QvtwkMNF2VqV2tn/preview, https://drive.google.com/file/d/1okjUo_m1fRDDV-GSdTsDlunGjGO1LF5J/preview, https://drive.google.com/file/d/1Q6l3N8RDRvCeJ7vrwmussY6Q5cK8rKYz/preview, https://drive.google.com/file/d/15CZg0FUoKwRvrwYElMxlOyq4b5snglNj/preview, https://drive.google.com/file/d/11_7p8jHKPQMQeEdstRv1b0u76hngEepz/preview, https://drive.google.com/file/d/1Zdwf8zzyMFOP6kkiCEkWpk76AN4WXLbZ/preview, https://drive.google.com/file/d/1y_wlqxuVnIe8vTbuFptBQOc1cumgCTMu/preview, https://drive.google.com/file/d/1FfmhbigNUl7aQA8GiSraCTBsnVA6Ka6d/preview",
    },
    crime: {
      title: "Inside the Mind: True Crime Uncovered",
      description:
        "Dive into the world of true crime with videos that unravel complex stories. These edits focus on building suspense and intrigue, turning real-life events into compelling narratives that keep viewers on the edge of their seats.",
      videos:
        "https://drive.google.com/file/d/13ZYuqfTlPWsUOGfZQxGz2INN9SSAeEnV/preview",
    },
    ecom: {
      title: "Digital Marketplaces: The Future of Commerce",
      description:
        "Editing videos that highlight the dynamic world of ecommerce. These videos focus on showcasing products, services, and strategies that drive online business success, with crisp visuals and engaging storytelling.",
      videos:
        "https://drive.google.com/file/d/1yUS0Hi-3eL-wI1NL0gIuH1KZNtXEH3AB/preview",
    },
    documentary: {
      title: "Through the Lens: Documenting the Real World",
      description:
        "Creating impactful documentaries that bring real-world stories to the screen. These videos are edited to convey powerful messages and deep emotions, providing viewers with a meaningful and immersive experience.",
      videos:
        "https://drive.google.com/file/d/1fxoWSs2Ht7e3J_vR6XGstn8nwIb568Jg/preview, https://drive.google.com/file/d/11VLGi1CxWg_X3VyL4B_0krdGopm-OV1a/preview, https://drive.google.com/file/d/1H2PMcepjAPlkbSHcITSOBALJPwJfrP5E/preview, https://drive.google.com/file/d/1RmvFfHIstNrLKuscD6n6AGL4tLfP6PPO/preview",
    },
  };

  let allNicheData = null;
  let mappedData = null;
  if (niche == "all")
    allNicheData = Object.keys(nicheMapping)?.flatMap((key) => {
      return {
        ...nicheMapping?.[key],
        videos: nicheMapping?.[key]?.videos?.split(",")?.map((item) => {
          const trimmed = item.trim();
          return {
            link: trimmed,
            thumbnail: trimmed,
          };
        }),
      };
    });
  else {
    mappedData = {
      ...nicheMapping[niche],
      videos: nicheMapping[niche]?.videos?.split(",")?.map((item) => {
        return {
          link: item,
          thumbnail: item,
        };
      }),
    };
  }

  return (
    <section className="py-20 px-4 md:py-20 bg-gradient-to-r from-black to-gray-900 text-white">
      <div>
        {allNicheData?.length &&
          allNicheData?.map((item) => {
            return (
              <>
                <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                  {item?.title}
                </h1>
                <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                  {item?.description}
                </p>
                <CardsCarousel renderDirectly data={item?.videos} />
              </>
            );
          })}
        {mappedData && (
          <>
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
              {mappedData?.title}
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
              {mappedData?.description}
            </p>
            <CardsCarousel renderDirectly data={mappedData?.videos} />
          </>
        )}
      </div>
    </section>
  );
};

export default NicheDetail;
