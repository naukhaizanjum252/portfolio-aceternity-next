import { CardsCarousel } from "@/components/custom/apple-cards-carousel";
import {
  AnimatedSection,
  AnimatedTitle,
  AnimatedParagraph,
  AnimatedNicheItem,
} from "@/components/custom/animated-section";

// Your main portfolio Google Drive folder ID
const PARENT_FOLDER_ID = "1G69LbpSQUtl6OlXPNCMxpiYX6qR5D8BA";

// Niche metadata - titles and descriptions for each folder
// The key should match the folder name (case-insensitive, normalized)
const nicheMetadata = {
  "tech related videos": {
    key: "tech",
    title: "Innovating Tomorrow: A Deep Dive into Tech Trends",
    description:
      "Craft compelling visual narratives that showcase the latest in technology. From AI breakthroughs to cybersecurity, these videos bring complex tech concepts to life, making them accessible and engaging for your audience.",
  },
  animated: {
    key: "animation",
    title: "Beyond the Frame: The Art of Animation",
    description:
      "Bring stories to life with vibrant animation. This collection of videos showcases the magic of animation, from intricate character designs to seamless motion, perfect for capturing the imagination of any audience.",
  },
  history: {
    key: "history",
    title: "Echoes of the Past: Unveiling History's Mysteries",
    description:
      "Expertly edited historical videos that transport viewers back in time. Each video is crafted to highlight significant events, using powerful visuals and narrative pacing to captivate and educate.",
  },
  crime: {
    key: "crime",
    title: "Inside the Mind: True Crime Uncovered",
    description:
      "Dive into the world of true crime with videos that unravel complex stories. These edits focus on building suspense and intrigue, turning real-life events into compelling narratives that keep viewers on the edge of their seats.",
  },
  "e commerce": {
    key: "ecom",
    title: "Digital Marketplaces: The Future of Commerce",
    description:
      "Editing videos that highlight the dynamic world of ecommerce. These videos focus on showcasing products, services, and strategies that drive online business success, with crisp visuals and engaging storytelling.",
  },
  documentary: {
    key: "documentary",
    title: "Through the Lens: Documenting the Real World",
    description:
      "Creating impactful documentaries that bring real-world stories to the screen. These videos are edited to convey powerful messages and deep emotions, providing viewers with a meaningful and immersive experience.",
  },
  captioning: {
    key: "captioning",
    title: "Words That Speak: Professional Captioning & Subtitles",
    description:
      "Precision captioning that enhances accessibility and engagement. From perfectly timed subtitles to creative text animations, these videos demonstrate the art of visual storytelling through typography and motion graphics.",
  },
  "explanation niche": {
    key: "explanation",
    title: "Clarity in Motion: Explainer Videos That Educate",
    description:
      "Transform complex ideas into digestible visual content. These explainer videos break down intricate concepts with clear narration, engaging visuals, and structured storytelling that makes learning effortless.",
  },
  "gig videos": {
    key: "gig",
    title: "Portfolio Showcase: Professional Gig Videos",
    description:
      "A curated collection of professional video editing samples showcasing versatility and expertise. These gig videos demonstrate a range of styles and techniques tailored to meet diverse client needs.",
  },
  "growth/fitness": {
    key: "fitness",
    title: "Peak Performance: Fitness & Growth Content",
    description:
      "High-energy fitness content that motivates and inspires. From workout tutorials to transformation stories, these videos capture the intensity and dedication of the fitness journey with dynamic editing and powerful visuals.",
  },
  "motivational videos": {
    key: "motivational",
    title: "Rise & Inspire: Motivational Video Content",
    description:
      "Powerful motivational content designed to uplift and inspire. These videos combine compelling narratives, emotional storytelling, and impactful visuals to create content that resonates deeply with audiences.",
  },
  psyche: {
    key: "psyche",
    title: "Mind Matters: Psychology & Human Behavior",
    description:
      "Exploring the depths of the human mind through captivating video content. These psychology-focused videos delve into behavior, emotions, and mental wellness with thought-provoking narratives and engaging visuals.",
  },
  "seminar\\conference vids": {
    key: "seminar",
    title: "Stage Presence: Seminar & Conference Videos",
    description:
      "Professional editing for seminars, conferences, and speaking engagements. These videos transform live events into polished content with multi-camera edits, speaker highlights, and audience engagement moments.",
  },
  sports: {
    key: "sports",
    title: "Game On: Dynamic Sports Content",
    description:
      "Adrenaline-pumping sports videos that capture the thrill of competition. From highlight reels to full game edits, these videos showcase athletic excellence with fast-paced editing and dramatic storytelling.",
  },
  war: {
    key: "war",
    title: "Frontline Stories: War & Military Documentaries",
    description:
      "Compelling war and military content that honors history and sacrifice. These videos combine archival footage, powerful narration, and respectful storytelling to create impactful documentaries about conflict and courage.",
  },
};

// Helper function to normalize folder names for matching
function normalizeKey(name) {
  return name.toLowerCase().trim();
}

// Helper function to fetch subfolders from the parent folder
async function getFoldersFromParent() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(
      `${baseUrl}/api/drive-folders?parentFolderId=${PARENT_FOLDER_ID}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      console.error("Failed to fetch folders");
      return [];
    }

    const data = await response.json();
    return data.folders || [];
  } catch (error) {
    console.error("Error fetching folders:", error);
    return [];
  }
}

// Helper function to fetch videos from a Google Drive folder
async function getVideosFromFolder(folderId) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(
      `${baseUrl}/api/drive-videos?folderId=${folderId}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      console.error("Failed to fetch videos for folder:", folderId);
      return [];
    }

    const data = await response.json();
    return data.videos || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}

// Build the niche mapping by combining folder data with metadata
async function buildNicheMapping() {
  const folders = await getFoldersFromParent();
  const nicheMapping = {};

  for (const folder of folders) {
    const normalizedName = normalizeKey(folder.name);
    const metadata = nicheMetadata[normalizedName];

    if (metadata) {
      nicheMapping[metadata.key] = {
        title: metadata.title,
        description: metadata.description,
        folderId: folder.id,
        folderName: folder.name,
      };
    } else {
      // For folders without predefined metadata, generate a basic entry
      const key = folder.name.toLowerCase().replace(/[^a-z0-9]/g, "_");
      nicheMapping[key] = {
        title: folder.name,
        description: `Video content from the ${folder.name} collection.`,
        folderId: folder.id,
        folderName: folder.name,
      };
    }
  }

  return nicheMapping;
}

const NicheDetail = async ({ params }) => {
  const { niche } = params || {};

  // Build the niche mapping dynamically from Google Drive
  const nicheMapping = await buildNicheMapping();

  let allNicheData = null;
  let mappedData = null;

  if (niche === "all") {
    // Fetch videos for all niches
    const nichePromises = Object.keys(nicheMapping).map(async (key) => {
      const videos = await getVideosFromFolder(nicheMapping[key].folderId);
      return {
        key,
        ...nicheMapping[key],
        videos,
      };
    });
    allNicheData = await Promise.all(nichePromises);
    // Filter out niches with no videos
    allNicheData = allNicheData.filter((item) => item.videos.length > 0);
  } else if (nicheMapping[niche]) {
    // Fetch videos for a single niche
    const videos = await getVideosFromFolder(nicheMapping[niche].folderId);
    mappedData = {
      ...nicheMapping[niche],
      videos,
    };
  }

  return (
    <section className="py-20 px-4 md:py-20 bg-gradient-to-r from-black to-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {allNicheData?.length > 0 &&
          allNicheData.map((item, index) => (
            <AnimatedNicheItem
              key={item.key || index}
              item={item}
              index={index}
            >
              <AnimatedTitle
                delay={index * 0.15}
                className="text-2xl md:text-7xl font-bold dark:text-white"
              >
                {item?.title}
              </AnimatedTitle>
              <AnimatedParagraph
                delay={index * 0.15 + 0.1}
                className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
              >
                {item?.description}
              </AnimatedParagraph>
              {item?.videos?.length > 0 && (
                <AnimatedSection delay={index * 0.15 + 0.2}>
                  <CardsCarousel renderDirectly data={item.videos} />
                </AnimatedSection>
              )}
            </AnimatedNicheItem>
          ))}

        {mappedData && (
          <AnimatedSection>
            <AnimatedTitle className="text-2xl md:text-7xl font-bold dark:text-white">
              {mappedData?.title}
            </AnimatedTitle>
            <AnimatedParagraph
              delay={0.1}
              className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
            >
              {mappedData?.description}
            </AnimatedParagraph>
            {mappedData?.videos?.length > 0 && (
              <AnimatedSection delay={0.2}>
                <CardsCarousel renderDirectly data={mappedData.videos} />
              </AnimatedSection>
            )}
          </AnimatedSection>
        )}

        {!allNicheData?.length && !mappedData && (
          <AnimatedSection className="text-center py-20">
            <AnimatedTitle className="text-2xl md:text-4xl font-bold text-gray-400">
              Niche not found
            </AnimatedTitle>
            <AnimatedParagraph delay={0.1} className="mt-4 text-gray-500">
              The requested category does not exist.
            </AnimatedParagraph>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default NicheDetail;
