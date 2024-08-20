"use client";
import { CardStackUI } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export const CardStack = ({ cards }) => {
  return (
    <div className="flex items-center justify-center ml-auto">
      <CardStackUI items={cards} />
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
