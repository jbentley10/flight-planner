/**
 * @file getData.ts
 * @description Declares functions which handle data submission and fetching.
 */
"use server";

import { getJson } from "serpapi";

export default async function getSearchResults(formData: FormData) {
  if (formData) {
    getJson(
      {
        engine: "google_flights",
        departure_id: formData.get("departure_id"),
        arrival_id: formData.get("arrival_id"),
        outbound_date: formData.get("outbound_date"),
        return_date: formData.get("return_date"),
        currency: "USD",
        hl: "en",
        api_key: process.env.SERP_API_KEY,
      },
      (json) => {
        console.log(json);
      }
    );
  }
}

export async function fetchAirports() {
  try {
    const airportsData: {
      default: Array<{
        code: string;
        city: string;
        state: string | null;
        country: string | null;
      }>;
    } = await import("../data/airports.json");
    return airportsData.default.map(
      (airport: {
        code: string;
        city: string;
        state: string | null;
        country: string | null;
      }) => ({
        code: airport.code,
        city: airport.city,
        state: airport.state,
        country: airport.country,
      })
    );
  } catch (error) {
    console.error("Error loading airports data:", error);
    throw error;
  }
}
