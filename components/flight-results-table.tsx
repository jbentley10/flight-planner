import { ArrowDownIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { QueryContext } from "@/lib/query-provider";
import FlightResultsSkeleton from "./flight-results-table-skeleton";

async function FlightResultsTable() {
  // const [data, setData] = useState();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    outbound_date,
    return_date,
    adults,
    departure_id,
    arrival_id,
    currency,
  } = useContext(QueryContext);

  // fetch method
  const method = "POST";

  // fetch options
  const options = {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      outbound_date: outbound_date,
      return_date: return_date,
      adults: adults,
      departure_id: departure_id,
      arrival_id: arrival_id,
      currency: currency,
    }),
  };

  // Fetch URL
  const url = "/api/flightSearch";

  try {
    ``; // Execute the fetch API
    const res = await fetch(url, options);

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Check if the response has content
    if (res.headers.get("content-length") === "0") {
      throw new Error("No content returned from the server.");
    }
    ``;

    // Get data back from the backend
    const final = await res.json();
    console.log("Final data: ", final);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching flight data:", error);
    setError(error instanceof Error ? error : new Error(String(error))); // Assuming you have a setError function to handle errors
    setLoading(false);
  }

  // function toHoursAndMinutes(totalMinutes: number) {
  //   const hours = Math.floor(totalMinutes / 60);
  //   const minutes = totalMinutes % 60;
  //   return `${hours} hr ${minutes} minutes`;
  // }

  //const bestFlights = data?.best_flights;
  //const otherFlights = data?.other_flights;

  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>SELECT A DEPARTURE FLIGHT</h1>
      <h2 className='text-xl mb-6'>{`${departure_id} to ${arrival_id}`}</h2>
      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 text-left'>
                DEPART AND ARRIVAL TIME <ArrowDownIcon className='inline' />
              </th>
              <th className='px-4 py-2 text-left'>
                NUMBER OF STOPS <ArrowDownIcon className='inline' />
              </th>
              <th className='px-4 py-2 text-left'>
                DURATION <ArrowDownIcon className='inline' />
              </th>
              <th className='px-4 py-2 text-left'>
                PRICE <ArrowDownIcon className='inline' />
              </th>
            </tr>
          </thead>
          <tbody>
            {error && <div>An error occurred</div>}
            {loading && <FlightResultsSkeleton />}
            {/* {data &&
              bestFlights?.map((flight: FlightResult, index: number) => (
                <>
                  <tr key={index} className='border-t'>
                    <td className='px-4 py-4'>
                      {flight.layovers.length > 0 ? (
                        flight.flights.map((flight: Flight, index: number) => (
                          <div key={index} className='font-semibold'>
                            {flight.departure_airport.time}
                          </div>
                        ))
                      ) : (
                        <div />
                      )}
                    </td>
                    <td className='px-4 py-4'>{flight.layovers.length}</td>
                    <td className='px-4 py-4'>
                      {toHoursAndMinutes(flight.flights[0].duration)}
                    </td>
                    <td className='px-4 py-4'>${flight.price}</td>
                  </tr>
                </>
              ))} */}
            {/* {data &&
              otherFlights?.map((flight: FlightResult, index: number) => (
                <>
                  <tr key={index} className='border-t'>
                    <td className='px-4 py-4'>
                      {flight.layovers.length > 0 ? (
                        flight.flights.map((flight: Flight, index: number) => (
                          <div key={index} className='font-semibold'>
                            {flight.departure_airport.time}
                          </div>
                        ))
                      ) : (
                        <div />
                      )}
                    </td>
                    <td className='px-4 py-4'>{flight.layovers.length}</td>
                    <td className='px-4 py-4'>
                      {toHoursAndMinutes(flight.flights[0].duration)}
                    </td>
                    <td className='px-4 py-4'>${flight.price}</td>
                  </tr>
                </>
              ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FlightResultsTable;
