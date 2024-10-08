import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  hovered,
  folderUrl,
  ...rest
}) => {
  return (
    <>
      <div
        className={cn(
          " row-span-2 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-10  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
        {...rest}
      >
        {header && header()}
        <div className="group-hover/bento:translate-x-0 transition duration-200 ">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        {/* {hovered && (
          <div className="self-start">
            <a
              href={folderUrl}
              target="_blank"
              className="inline-flex items-center bg-transparent border-2 border-blue-100 text-blue-100 text-sm font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-100 hover:text-black"
            >
              View All Videos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2 transition-transform transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        )} */}
      </div>
    </>
  );
};
