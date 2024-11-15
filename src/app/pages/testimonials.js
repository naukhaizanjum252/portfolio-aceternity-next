import { AnimatedTestimonials } from "@/components/custom/animated-testimonials";
import { CardStack, Highlight } from "@/components/custom/card-stack";
import InfiniteMovingCards from "@/components/custom/infinite-moving-cards";
const testimonials = [
  {
    quote: (
      <p>
        Naukhaiz does an outstanding job when it comes to editing, took videos
        to another level and whats most important for me, He{" "}
        <Highlight>works very fast</Highlight>
        Been a pleasure to work with Him! 🎯
      </p>
    ),
    name: "Borys",
    title: "Founder - BTG Media",
  },
  {
    quote: (
      <>
        Naukhaiz has been a great editor for my agency who I’ve worked with for
        around 6 months. He is always happy to make edits and tweaks until the
        video is perfect and I’d definitely <Highlight> recommend </Highlight>{" "}
        him to anyone needing video editing.
      </>
    ),
    name: "Aaron McCullough",
    title: "Founder - McCullough Marketing",
  },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
const animatedTestimonials = [
  {
    quote:
      "Naukhaiz does an outstanding job when it comes to editing, took videos to another level and whats most important for me, He works very fast. Been a pleasure to work with Him! 🎯",

    name: "Borys",
    designation: "Founder - BTG Media",
    src: "https://drive.google.com/file/d/1XJ96jL6Pd70-e8ymX8VqPmiDx7xm0Zry/view?usp=drive_link",
  },
  {
    quote:
      "Naukhaiz has been a great editor for my agency who I’ve worked with for around 6 months. He is always happy to make edits and tweaks until the video is perfect and I’d definitely  recommend  him to anyone needing video editing.",

    name: "Aaron McCullough",
    designation: "Founder - McCullough Marketing",
    src: "https://drive.google.com/file/d/1o_9FVrYFpvqegt_NkZfmNjWAxJ6y96-B/view?usp=drive_link",
  },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];

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
      <div className=" md:ml-8 flex flex-col  p-10 md:p-20">
        <div className="flex flex-col md:flex-row justify-between items-start mt-8">
          <div className="flex-2 ">
            <h1 className="md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:mb-12">
              Testimonials
            </h1>

            <p className="md:max-w-xl max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-4 md:ml-4 ">
              Discover the transformative impact of working with me through the
              words of those who have experienced my unwavering passion,
              dedication, and commitment to excellence firsthand. Their stories
              and testimonials highlight how I bring creativity, expertise, and
              reliability to every of their project.
            </p>
          </div>
          {/* <div className="flex-1 flex-col justify-end"> */}
          {/* <CardStack cards={CARDS} /> */}
          {/* <InfiniteMovingCards testimonials={testimonials} /> */}
          {/* </div> */}
          <div className=" md:ml-32">
            <AnimatedTestimonials testimonials={animatedTestimonials} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
