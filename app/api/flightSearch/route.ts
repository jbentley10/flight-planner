import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SERP_API_KEY;
  console.log("API Key exists:", !!apiKey);
  console.log("API Key length:", apiKey?.length);
  console.log("API Key (first 4 chars):", apiKey?.substring(0, 4));

  // Log the API key (first few characters for security)
  console.log("API Key (first 4 chars):", apiKey?.substring(0, 4));

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

  // Log the full URL (excluding the API key)
  console.log("Request URL:", url.replace(apiKey || "", "API_KEY_HIDDEN"));

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  console.log(
    "Full URL (API key hidden):",
    url.replace(apiKey || "", "API_KEY_HIDDEN")
  );

  try {
    const response = await fetch(url, options);

    console.log("SerpAPI Response status:", response.status);
    console.log(
      "SerpAPI Response headers:",
      JSON.stringify(Object.fromEntries(response.headers))
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SerpAPI Error response body:", errorText);
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorText}`
      );
    }

    const result = await response.json();
    console.log(
      "SerpAPI Response data:",
      JSON.stringify(result).substring(0, 200) + "..."
    ); // Log first 200 chars of response

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in flight search:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "There was an error" },
      { status: 500 }
    );
  }
}
