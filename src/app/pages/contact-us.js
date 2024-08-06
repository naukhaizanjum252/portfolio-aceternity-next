import { ThreeDPin } from "@/components/custom/3d-pin";
import Form from "@/components/custom/form";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  const platforms = [
    {
      title: "Upwork",
      thumbnail:
        "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
      urlTitle: "Check Upwork Profile",
      cardTitle: "Upwork",
      description: "",
      href: "",
    },
    {
      title: "Linkedin",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png",
      urlTitle: "Check Linkedin Profile",
      cardTitle: "Linkedin",
      description: "",
      href: "",
    },
    {
      title: "Whatsapp",
      thumbnail:
        "https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png",
      urlTitle: "wa.me/+923314411708",
      cardTitle: "Whatsapp",
      description: "",
      href: "wa.me/+923314411708",
    },
    {
      title: "Email",
      thumbnail:
        "https://cdn1.iconfinder.com/data/icons/material-apps/512/icon-email-material-design-512.png",
      urlTitle: "Check Email Profile",
      cardTitle: "Email Us",
      description: "",
      href: "",
    },
  ];

  const formData = {
    title: "Welcome to Aceternity",
    description:
      " Login to aceternity if you can because we don't have a login flow yet",
    btnText: "Submit",
  };
  return (
    <>
      <h1 className="mt-20 ml-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-2/3">
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 ml-20 ">
            We build beautiful products with the latest technologies and
            frameworks. We are a team of passionate developers and designers
            that love to build amazing products.
          </p>
          <div className="flex flex-row flex-wrap ml-20">
            {platforms.map((platform) => (
              <ThreeDPin
                key={platform.urlTitle}
                urlTitle={platform.urlTitle}
                href={platform?.href}
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[7rem] h-[8rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {platform?.cardTitle}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      {platform?.description}
                    </span>
                  </div>
                  <Image height="150" width="150" src={platform?.thumbnail} />
                  {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                </div>
              </ThreeDPin>
            ))}
          </div>
        </div>
        <Form {...formData} />
      </div>
    </>
  );
};

export default ContactUs;
