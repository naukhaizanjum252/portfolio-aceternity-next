"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function ThreeDPin(props) {
  const { children, urlTitle, href } = props;
  return (
    <div className="flex items-center justify-center w-24 ">
      <PinContainer title={urlTitle} href={href}>
        {children}
      </PinContainer>
    </div>
  );
}
