import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function convertGoogleDriveLink(link) {
  // Check if the link contains 'drive.google.com' and 'usp=drive_link'
  if (link.includes("drive.google.com") && link.includes("usp=drive_link")) {
    // Extract the file ID from the provided link
    const fileIdMatch = link.match(/\/d\/(.+?)\/view/);
    // If the file ID is found, return the direct link
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  // Return the original link if it doesn't meet conditions
  return link;
}
