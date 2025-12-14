"use client";
import { AnimatedTestimonials } from "@/components/custom/animated-testimonials";
import { CardStack, Highlight } from "@/components/custom/card-stack";
import InfiniteMovingCards from "@/components/custom/infinite-moving-cards";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/custom/animate-on-scroll";

const testimonials = [
  {
    quote: (
      <p>
        Naukhaiz does an outstanding job when it comes to editing, took videos
        to another level and whats most important for me, He{" "}
        <Highlight>works very fast</Highlight>. Been a pleasure to work with
        Him! 🎯
      </p>
    ),
    name: "Borys",
    title: "Founder - BTG Media",
  },
  {
    quote: (
      <>
        Naukhaiz has been a great editor for my agency who I've worked with for
        around 6 months. He is always happy to make edits and tweaks until the
        video is perfect and I'd definitely <Highlight>recommend</Highlight> him
        to anyone needing video editing.
      </>
    ),
    name: "Aaron McCullough",
    title: "Founder - McCullough Marketing",
  },
  {
    quote: (
      <p>
        From something that was supposed to be a test video, I continued working
        with Naukhaiz for a long time on multiple projects. <br />
        <br />
        Most important things are:{" "}
        <Highlight>
          Reliability, fast turnaround time, English proficiency
        </Highlight>{" "}
        and that He can listen to instructions and feedback very good, and from
        my feedback and instructions apply his{" "}
        <Highlight>creativity and editing knowledge</Highlight> to create good
        videos, daily. <br />
        <br />I give my <Highlight>recommendations</Highlight> for Naukhaiz.
      </p>
    ),
    name: "Luka Pecirep",
    title: "Upwork",
  },
  {
    quote: (
      <p>
        Naukhaiz has been amazing to work with. He is very{" "}
        <Highlight>prompt at providing revisions</Highlight> and{" "}
        <Highlight>understood the brief almost immediately</Highlight>.
      </p>
    ),
    name: "Christian Fitzgerald",
    title: "Evolve Technik / Upwork",
  },
  {
    quote: (
      <p>
        Great person to work with. Completely{" "}
        <Highlight>understands the needs</Highlight> of the project and works
        toward fulfilling it. Has some{" "}
        <Highlight>cool animations and typography</Highlight> that he uses to
        give a great look to the videos.
      </p>
    ),
    name: "Jaskeerat Singh",
    title: "Upwork",
  },
  {
    quote: (
      <p>
        He does <Highlight>excellent work</Highlight>. He did a{" "}
        <Highlight>good job</Highlight> according to the contract and went the{" "}
        <Highlight>extra mile</Highlight> to ensure everything was completed.
      </p>
    ),
    name: "Kyle Hanson",
    title: "Upwork",
  },
  {
    quote: (
      <p>
        After consistent communication and rounds of revision, Naukhaiz has
        really <Highlight>found his rhythm</Highlight>. Our workflow is much{" "}
        <Highlight>smoother</Highlight> now, and we're very happy with how our{" "}
        <Highlight>collaboration</Highlight> is progressing. Thank you for your{" "}
        <Highlight>dedication and hard work</Highlight>!
      </p>
    ),
    name: "Eric Lee",
    title: "Upwork",
  },
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
      "Naukhaiz has been a great editor for my agency who I've worked with for around 6 months. He is always happy to make edits and tweaks until the video is perfect and I'd definitely  recommend  him to anyone needing video editing.",

    name: "Aaron McCullough",
    designation: "Founder - McCullough Marketing",
    src: "https://drive.google.com/file/d/1o_9FVrYFpvqegt_NkZfmNjWAxJ6y96-B/view?usp=drive_link",
  },
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
      <div className="md:ml-8 flex flex-col p-10 md:p-20">
        <StaggerContainer staggerDelay={0.15} className="flex flex-col md:flex-row justify-between items-start mt-8">
          <div className="flex-2">
            <StaggerItem animation="fadeUp">
              <h1 className="md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:mb-12">
                Testimonials
              </h1>
            </StaggerItem>

            <StaggerItem animation="fadeUp">
              <p className="text-base md:text-xl mt-8 dark:text-neutral-200 mb-4 md:ml-4">
                Discover the transformative impact of working with me through the
                words of those who have experienced my unwavering passion,
                dedication, and commitment to excellence firsthand. Their stories
                and testimonials highlight how I bring creativity, expertise, and
                reliability to every of their project.
              </p>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
      
      <AnimateOnScroll animation="fadeIn" delay={0.2}>
        <InfiniteMovingCards testimonials={testimonials} />
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="fadeIn" delay={0.3}>
        <InfiniteMovingCards dir={"right"} testimonials={testimonials} />
      </AnimateOnScroll>
    </>
  );
};

export default Testimonials;
