import { NextResponse } from "next/server";

const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const parentFolderId = searchParams.get("parentFolderId");

  if (!parentFolderId) {
    return NextResponse.json(
      { error: "Parent folder ID is required" },
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
    // Fetch subfolders from the parent Google Drive folder
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${parentFolderId}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name)`
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Google Drive API error:", error);
      return NextResponse.json(
        { error: "Failed to fetch folders from Google Drive" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform folders into a mapping object
    const folders = data.files.map((folder) => ({
      id: folder.id,
      name: folder.name,
    }));

    return NextResponse.json({ folders });
  } catch (error) {
    console.error("Error fetching drive folders:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

