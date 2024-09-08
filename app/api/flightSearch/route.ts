import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // This opts out of static generation

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const departure_id = searchParams.get("departure_id") || "";
  const arrival_id = searchParams.get("arrival_id") || "";
  const adults = searchParams.get("adults") || "1";
  const outbound_date = searchParams.get("outbound_date") || "";
  const return_date = searchParams.get("return_date") || "";

  // Validate parameters
  if (!departure_id || !arrival_id || !outbound_date) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  const apiKey = process.env.SERP_API_KEY;
  const url = `https://serpapi.com/search?engine=google_flights&api_key=${apiKey}&departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}&currency=USD`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching flight data:", error);
    return NextResponse.json(
      { error: "Error fetching flight data" },
      { status: 500 }
    );
  }
}
