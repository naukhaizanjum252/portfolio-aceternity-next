"use client";
import React from "react";
import { Button } from "../ui/moving-border";

const MovingBorderButton = (props) => {
  const { btnText } = props;
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {btnText}
      </Button>
    </div>
  );
};

export default MovingBorderButton;
