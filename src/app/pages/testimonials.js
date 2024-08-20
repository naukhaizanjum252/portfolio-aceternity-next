import { CardStack, Highlight } from "@/components/custom/card-stack";

const CARDS = [
  {
    id: 0,
    name: "Borys",
    designation: "Founder - BTG Media",
    content: (
      <p>
        Naukhaiz does an outstanding job when it comes to editing, took videos
        to another level and whats most important for me, He{" "}
        <Highlight>works very fast</Highlight>
        Been a pleasure to work with Him! 🎯
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

const Testimonials = () => {
  return (
    <>
      <div className=" ml-8 flex flex-col p-20">
        <div className="flex justify-between items-start mt-8">
          <div className="flex-1">
            <h1 className="md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Testimonials
            </h1>
            <p className="max-w-xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-4">
              Discover the impact of working with me through the words of those
              who've experienced my passion and dedication firsthand.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <CardStack cards={CARDS} />
            {/* <InfiniteMovingCards /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
