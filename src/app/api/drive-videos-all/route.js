import { NextResponse } from "next/server";

const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

const FOLDER_IDS = {
  tech: "18l6OQ28oR0VYwA6JJVbLw37Lww3AYK53",
  animation: "1lXFU-UUfTzx4fPXCA76858ghH8ywJgcw",
  youtube: "1y-R4Si3Co12gNPggEHi42a2y9iZ9d1Ru",
  history: "1OY2EG9o6n0U367_tFqRhQyp718idw9kM",
  "true-crime": "1WXPrCsQx9HxyWmmQE7gPb-mZXWYqts07",
  ecommerce: "1wQxJQ9WEO7JYkoJpH6-IJCWPauLAQTr0",
  documentary: "1bUq4FdPqG0of7w7xCgKUz2fbOuE80Wmj",
};

async function fetchVideosInFolder(folderId) {
  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'video'&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,mimeType,thumbnailLink)`
  );
  if (!response.ok) return [];
  const data = await response.json();
  return (data.files || []).map((file) => ({
    id: file.id,
    name: file.name,
    link: `https://drive.google.com/file/d/${file.id}/preview`,
    thumbnail: file.thumbnailLink || `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
  }));
}

export async function GET() {
  if (!GOOGLE_DRIVE_API_KEY) {
    return NextResponse.json(
      { error: "Google Drive API key not configured" },
      { status: 500 }
    );
  }

  try {
    const result = {};
    await Promise.all(
      Object.entries(FOLDER_IDS).map(async ([key, folderId]) => {
        result[key] = await fetchVideosInFolder(folderId);
      })
    );
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching drive videos (all):", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
