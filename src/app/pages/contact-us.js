"use client";
import { ThreeDPin } from "@/components/custom/3d-pin";
import { FloatingDock } from "@/components/custom/floating-dock";
import Form from "@/components/custom/form";
import { Globe } from "@/components/custom/globe";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      href: "https://www.linkedin.com/in/naukhaiz-anjum-b4b921117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
        {platforms.map((platform) => (
          <>
            <ThreeDPin
              key={platform.urlTitle}
              urlTitle={platform.cardTitle}
              href={platform?.href}
            >
              <div className="flex basis-full  flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem]  ">
                {/* <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {platform?.cardTitle}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {platform?.description}
                  </span>
                </div> */}
                <Image
                  height="150"
                  className="rounded-3xl"
                  width="150"
                  src={platform?.thumbnail}
                />
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              </div>
            </ThreeDPin>
          </>
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
        <div className="flex flex-col md:mt-20 ">
          <h1 className=" ml-12 md:ml-28 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Let's Connect
          </h1>
          <div className="flex flex-col">
            <p className="max-w-2xl ml-12 md:ml-28 text-base md:text-xl mt-8 dark:text-neutral-200  ">
              Have a video project in mind? Let’s bring your vision to life.
              Whether it’s social media content, promotional videos, or
              something unique, I’m here to help. Reach out through the
              platforms below or contact me directly. Let’s create something
              great together!
            </p>

            {/* <FloatingDock
            // platforms={platforms}
            /> */}
            <div className="ml-8 md:ml-24 flex flex-row mb-40">
              {renderPins()}
            </div>
          </div>
          {/* <Form {...formData} /> */}
        </div>
        {!isMobile && (
          <div className="ml-auto mr-20  w-[40rem]">
            <Globe />
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUs;
