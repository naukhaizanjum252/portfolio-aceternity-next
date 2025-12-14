import { NextResponse } from "next/server";

const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folderId = searchParams.get("folderId");

  if (!folderId) {
    return NextResponse.json(
      { error: "Folder ID is required" },
      { status: 400 }
    );
  }

  if (!GOOGLE_DRIVE_API_KEY) {
    return NextResponse.json(
      { error: "Google Drive API key not configured" },
      { status: 500 }
    );
  }

  try {
    // Fetch files from the Google Drive folder
    // Filter for video files only (mimeType contains 'video')
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'video'&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,mimeType,thumbnailLink)`
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Google Drive API error:", error);
      return NextResponse.json(
        { error: "Failed to fetch videos from Google Drive" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform the files into the format needed for the carousel
    const videos = data.files.map((file) => ({
      id: file.id,
      name: file.name,
      link: `https://drive.google.com/file/d/${file.id}/preview`,
      thumbnail: file.thumbnailLink || `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching drive videos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

