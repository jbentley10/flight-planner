import { NextRequest, NextResponse } from "next/server";
import { getJson } from "serpapi";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SERP_API_KEY;
  console.log("API Key:", apiKey ? "Present" : "Missing");

  const body = await req.json();

  const outbound_date = body.outbound_date;
  const return_date = body.return_date;
  const adults = body.adults;
  const departure_id = body.departure_id;
  const arrival_id = body.arrival_id;
  const currency = body.currency;

  try {
    const result = await new Promise((resolve, reject) => {
      getJson(
        {
          engine: "google_flights",
          departure_id: departure_id,
          arrival_id: arrival_id,
          outbound_date: outbound_date,
          return_date: return_date,
          adults: adults,
          currency: currency,
          hl: "en",
          api_key: apiKey,
        },
        (json) => {
          if (json.error) {
            reject(new Error(json.error));
          } else {
            resolve(json);
          }
        }
      );
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in flight search:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "There was an error" },
      { status: 500 }
    );
  }
}
