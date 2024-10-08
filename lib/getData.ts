"use server";

import { FlightResults } from "./types";

export default async function getSearchResults(options: object) {
  const apiUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_LOCAL_URL;

  try {
    // Execute the fetch API
    const res = await fetch(`${apiUrl}/api/flightSearch`, options);

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Check if the response has content
    if (res.headers.get("content-length") === "0") {
      throw new Error("No content returned from the server.");
    }

    // Get data back from the backend
    const final: FlightResults = await res.json();

    return final;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    if (error instanceof Response) {
      console.error("Response status:", error.status);
      console.error("Response text:", await error.text());
    }
    throw error;
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
