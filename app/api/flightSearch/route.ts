import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_SERP_API_KEY;

  const body = await req.json();

  const outbound_date = body.outbound_date;
  const return_date = body.return_date;
  const adults = body.adults;
  const departure_id = body.departure_id;
  const arrival_id = body.arrival_id;
  const currency = body.currency;

  try {
    const response = await fetch(
      `https://serpapi.com/search?engine=google_flights&api_key=${apiKey}&departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}&currency=${currency}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "There was an error" });
  }
}
