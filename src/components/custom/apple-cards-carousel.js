"use client";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { useState } from "react";
import { Spin } from "antd";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

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
export const CardsCarousel = ({ data, renderDirectly = false }) => {
  const [playerVisible, setPlayerVisible] = useState(null);
  const [loading, setLoading] = useState(true);

  const cards = data?.map((card, index) =>
    renderDirectly ? (
      <>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl  h-[20rem] w-[15rem] md:h-[40rem] md:w-[25rem]  z-10">
            <Spin />
          </div>
        )}
        <div className="relative h-[20rem] w-[15rem] md:h-[40rem] md:w-[25rem] rounded-3xl overflow-hidden">
          <iframe
            id="videoFrame"
            class="h-full w-full rounded-3xl"
            src={convertGoogleDriveLink(card?.link)}
            allow="autoplay; encrypted-media"
            onLoad={() => setLoading(false)}
          ></iframe>
        </div>
      </>
    ) : (
      <>
        {playerVisible === index ? (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-3xl  h-[20rem] w-[15rem] md:h-[40rem] md:w-[25rem]  z-10">
                <Spin />
              </div>
            )}
            <div className="relative h-[20rem] w-[15rem] md:h-[40rem] md:w-[25rem] rounded-3xl overflow-hidden">
              <iframe
                id="videoFrame"
                class="h-full w-full rounded-3xl"
                src={convertGoogleDriveLink(card?.link)}
                allow="autoplay; encrypted-media"
                onLoad={() => setLoading(false)}
              ></iframe>
            </div>
          </>
        ) : (
          <motion.div
            //   style={{ x: translate }}
            whileHover={{ y: -20 }}
            onClick={() => {
              setLoading(true);
              setPlayerVisible(index);
            }}
            //   key={product.title}
            //   className="group/product h-[30rem] w-[16rem] flex-shrink-0"
          >
            <Card key={card.link} card={card} index={index} {...card} />
            <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          </motion.div>
        )}
      </>
    )
  );

  return (
    // <div className="w-full h-full py-20">
    //   <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
    //     Get to know your iSad.
    //   </h2>
    // </div>
    <Carousel items={cards} />
  );
};

// const DummyContent = ({ url }) => {
//   return (
//     <>
//       <iframe
//         src={url}
//         width="80%"
//         height="780"
//         frameBorder="0"
//         className="object-cover object-left-top absolute h-full w-full inset-0"
//       ></iframe>
//       content of card
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://drive.google.com/file/d/1rUW-BbMRrue8wTQi1xKOerYWLD8FtfPb/view?usp=drive_link",
//     content: (
//       <DummyContent
//         url={
//           "https://drive.google.com/file/d/15eODuMf9Xgm12J4S3poXrhB1daNyCena/view?usp=drive_link"
//         }
//       />
//     ),
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];
