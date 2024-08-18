import React from "react";
import { FloatingDockUI } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { ThreeDPin } from "./3d-pin";

export function FloatingDock(props) {
  const { platforms } = props;
  const links = [
    {
      title: "Home",
      icon: (
        // <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        <Image
          height="50"
          width="50"
          src={
            "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg"
          }
        />
        // <ThreeDPin
        //   key={1}
        // // urlTitle={platform.urlTitle}
        // // href={platform?.href}
        // >
        // </ThreeDPin>
      ),
      thumbnail:
        "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[7rem]  w-[25rem]">
      <FloatingDockUI
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={platforms || links}
      />
    </div>
  );
}
