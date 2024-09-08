import { NextRequest, NextResponse } from "next/server";
import { getJson } from "serpapi";

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
    const response = await getJson({
      api_key: apiKey,
      engine: "google_flights",
      hl: "en",
      gl: "us",
      departure_id: departure_id,
      arrival_id: arrival_id,
      outbound_date: outbound_date,
      return_date: return_date,
      currency: currency,
      adults: adults,
    });
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ error: "There was an error" });
  }
}
