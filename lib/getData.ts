/**
 * @file getData.ts
 * @description Declares functions which handle data submission and fetching.
 */
"use server";

import { redirect } from "next/navigation";

export async function passSearchParams(formData: FormData) {
  // Redirect to a results page with the data
  redirect(
    `/search-results?departure_id=${formData.get(
      "departure_id"
    )}&arrival_id=${formData.get("arrival_id")}&outbound_date=${formData.get(
      "outbound_date"
    )}&return_date=${formData.get("return_date")}&adults=${formData.get(
      "adults"
    )}`
  );
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
