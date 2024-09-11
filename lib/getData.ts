import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database.types";
import { FlightResults } from "./types";

export default async function getSearchResults(options: object) {
  const url = process.env.VERCEL_URL;
  try {
    // Execute the fetch API
    const res = await fetch(`https://${url}/api/flightSearch`, options);

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
    console.log("Error fetching flight data:", error);
    return undefined;
  }
}

export async function fetchAirports() {
  const supabase_url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}`;
  const supbase_key = `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;

  const supabase = createClient<Database>(supabase_url, supbase_key);

  const airportsQuery = await supabase
    .from("airports")
    .select("code, city, state, country");

  const { data, error } = await airportsQuery;

  if (error) throw error;

  return data;
}
