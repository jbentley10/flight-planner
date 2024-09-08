import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const departure_id = searchParams.get("departure_id");
  const arrival_id = searchParams.get("arrival_id");
  const adults = searchParams.get("adults");
  const outbound_date = searchParams.get("outbound_date");
  const return_date = searchParams.get("return_date");

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
