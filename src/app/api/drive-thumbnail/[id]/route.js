import { NextResponse } from "next/server";

const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET(request, { params }) {
  const { id } = await params;

  if (!GOOGLE_DRIVE_API_KEY || !id) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    // Fetch file metadata with thumbnailLink from Google Drive API
    const metaRes = await fetch(
      `https://www.googleapis.com/drive/v3/files/${id}?key=${GOOGLE_DRIVE_API_KEY}&fields=thumbnailLink`,
      { next: { revalidate: 86400 } } // cache for 24 hours
    );

    if (!metaRes.ok) {
      return new NextResponse("Not found", { status: 404 });
    }

    const meta = await metaRes.json();
    const thumbUrl = meta.thumbnailLink;

    if (!thumbUrl) {
      return new NextResponse("No thumbnail", { status: 404 });
    }

    // Fetch the actual thumbnail image server-side (with auth token intact)
    const imgRes = await fetch(thumbUrl.replace("=s220", "=s400"));

    if (!imgRes.ok) {
      return new NextResponse("Thumbnail fetch failed", { status: 502 });
    }

    const imgBuffer = await imgRes.arrayBuffer();
    const contentType = imgRes.headers.get("content-type") || "image/jpeg";

    return new NextResponse(imgBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}
