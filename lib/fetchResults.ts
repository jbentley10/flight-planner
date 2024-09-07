import { SearchQuery } from "./types";

export async function getSearchResults(searchParams: SearchQuery) {
  const {
    departure_id,
    arrival_id,
    adults,
    outbound_date,
    return_date,
    currency,
  } = searchParams;

  const res = await fetch(
    `/api/flightSearch?&departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}&currency=${currency}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Parse the JSON response
  const data = await res.json();

  return data; // Return the correctly typed data
}
