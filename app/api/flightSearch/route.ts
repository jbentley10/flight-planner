import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SERP_API_KEY;

  const body = await req.json();

  const {
    outbound_date,
    return_date,
    adults,
    departure_id,
    arrival_id,
    currency,
  } = body;

  const params = new URLSearchParams({
    engine: "google_flights",
    departure_id,
    arrival_id,
    outbound_date,
    return_date,
    adults: adults.toString(),
    currency,
    hl: "en",
    api_key: apiKey || "",
  });

  const url = `https://serpapi.com/search?${params}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${
          response.status
        }, Message: ${await response.text()}`
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in flight search:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "There was an error" },
      { status: 500 }
    );
  }
}
