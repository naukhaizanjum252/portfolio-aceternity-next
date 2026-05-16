import { NextResponse } from "next/server";

const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
const SHORT_FORM_FOLDER_ID = "1QRT8at05oEc1gp2ISrexqdBFkkecu30z";

export async function GET() {
  if (!GOOGLE_DRIVE_API_KEY) {
    return NextResponse.json(
      { error: "Google Drive API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${SHORT_FORM_FOLDER_ID}'+in+parents+and+mimeType+contains+'video'&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name)&pageSize=100&orderBy=name`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Google Drive" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const videos = (data.files || []).map((file) => ({
      id: file.id,
      name: file.name,
      embed: `https://drive.google.com/file/d/${file.id}/preview`,
    }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching short-form videos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
