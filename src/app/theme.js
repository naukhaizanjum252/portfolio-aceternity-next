export const theme = (darkMode) => {
  console.log(darkMode, "darkMode");
  return {
    "text-color": darkMode
      ? "text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      : "text-black",

      paragraph :darkMode ? "text-neutral-300"  : "text-black"
  };
};
