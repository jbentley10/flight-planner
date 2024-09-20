"use server";

export default async function getSearchResults(options: object) {
  const apiUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_LOCAL_URL;

  console.log("API URL:", apiUrl); // Log the API URL

  try {
    console.log("Sending request to:", `${apiUrl}/api/flightSearch`);
    console.log("Request options:", JSON.stringify(options));

    const res = await fetch(`${apiUrl}/api/flightSearch`, options);

    console.log("Response status:", res.status);
    console.log(
      "Response headers:",
      JSON.stringify(Object.fromEntries(res.headers))
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response body:", errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Message: ${errorText}`
      );
    }

    const data = await res.json();
    console.log(
      "Response data:",
      JSON.stringify(data).substring(0, 200) + "..."
    ); // Log first 200 chars of response

    return data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
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
