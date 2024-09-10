import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function convertGoogleDriveLink(link) {
  let fileId = "";

  // Check if the link contains 'drive.google.com'
  if (link.includes("drive.google.com")) {
    // Extract the file ID from links with '/file/d/'
    const fileIdMatch1 = link.match(/\/d\/(.+?)\/view/);
    if (fileIdMatch1 && fileIdMatch1[1]) {
      fileId = fileIdMatch1[1];
    }

    // Extract the file ID from links with '/open?id='
    const fileIdMatch2 = link.match(/open\?id=(.+?)(&|$)/);
    if (fileIdMatch2 && fileIdMatch2[1]) {
      fileId = fileIdMatch2[1];
    }

    // If a file ID is found, return the direct link
    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }

  // Return the original link if it doesn't meet conditions
  return link;
}
