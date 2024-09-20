import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("API route hit: /api/flights");

  const { searchParams } = new URL(req.url);
  const departure_id = searchParams.get("departure_id");
  const arrival_id = searchParams.get("arrival_id");
  const adults = searchParams.get("adults");
  const outbound_date = searchParams.get("outbound_date");
  const return_date = searchParams.get("return_date");

  console.log("Query params:", {
    departure_id,
    arrival_id,
    adults,
    outbound_date,
    return_date,
  });

  const url = `https://serpapi.com/search?engine=google_flights&api_key=${process.env.SERP_API_KEY}&departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}&currency=USD`;

  console.log("SerpAPI URL:", url);

  try {
    console.log("Fetching data from SerpAPI...");
    const response = await fetch(url);
    const data = await response.json();
    console.log("SerpAPI response received:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching flight data:", error);
    return NextResponse.json(
      { error: "Failed to fetch flight data" },
      { status: 500 }
    );
  }
}
