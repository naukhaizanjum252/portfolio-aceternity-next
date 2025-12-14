"use client";
import { ThreeDPin } from "@/components/custom/3d-pin";
import { FloatingDock } from "@/components/custom/floating-dock";
import Form from "@/components/custom/form";
import { Globe } from "@/components/custom/globe";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/custom/animate-on-scroll";

const ContactUs = () => {
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  const platforms = [
    {
      title: "Upwork",
      thumbnail:
        "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
      urlTitle: "Check Upwork Profile",
      cardTitle: "Upwork",
      description: "",
      href: "https://www.upwork.com/freelancers/naukhaiz",
    },
    {
      title: "Linkedin",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png",
      urlTitle: "Check Linkedin Profile",
      cardTitle: "Linkedin",
      description: "",
      href: "https://www.linkedin.com/in/naukhaiz-anjum-302218158/",
    },
    {
      title: "Whatsapp",
      thumbnail:
        "https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png",
      urlTitle: "wa.me/+923314411708",
      cardTitle: "Whatsapp",
      description: "",
      href: "https://wa.me/+923314411708",
    },
    {
      title: "Email",
      thumbnail:
        "https://cdn1.iconfinder.com/data/icons/material-apps/512/icon-email-material-design-512.png",
      urlTitle: "Check Email Profile",
      cardTitle: "Email",
      description: "",
      href: "mailto:naukhaizanjum252@gmail.com",
    },
  ];

  const renderPins = () => {
    return (
      <>
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.urlTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <ThreeDPin
              urlTitle={platform.cardTitle}
              href={platform?.href}
            >
              <motion.div 
                className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  height="150"
                  className="rounded-3xl"
                  width="150"
                  src={platform?.thumbnail}
                />
              </motion.div>
            </ThreeDPin>
          </motion.div>
        ))}
      </>
    );
  };

  const formData = {
    title: "Welcome to Aceternity",
    description:
      " Login to aceternity if you can because we don't have a login flow yet",
    btnText: "Submit",
  };

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col md:mt-20">
          <AnimateOnScroll animation="fadeLeft" delay={0}>
            <h1 className="ml-12 md:ml-28 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Let's Connect
            </h1>
          </AnimateOnScroll>
          
          <div className="flex flex-col">
            <AnimateOnScroll animation="fadeUp" delay={0.2}>
              <p className="max-w-2xl ml-12 md:ml-28 text-base md:text-xl mt-8 dark:text-neutral-200">
                Have a video project in mind? Let's bring your vision to life.
                Whether it's social media content, promotional videos, or
                something unique, I'm here to help. Reach out through the
                platforms below or contact me directly. Let's create something
                great together!
              </p>
            </AnimateOnScroll>

            <div className="ml-8 md:ml-24 flex flex-row mb-40">
              {renderPins()}
            </div>
          </div>
        </div>
        
        {!isMobile && (
          <motion.div 
            className="ml-auto mr-20 w-[40rem]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Globe />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContactUs;
