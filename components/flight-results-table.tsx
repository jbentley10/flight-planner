import { FlightResult, FlightResults, SearchQuery } from "@/lib/types";
import { ArrowDownIcon } from "lucide-react";
import React from "react";

export async function getSearchResults(
  searchParams: SearchQuery
): Promise<FlightResults> {
  const {
    departure_id,
    arrival_id,
    adults,
    outbound_date,
    return_date,
    currency,
  } = searchParams;

  const res = await fetch(
    `http://localhost:3000/api/flightSearch?&departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}&currency=${currency}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}

async function FlightResultsTable(props: { params: SearchQuery }) {
  const results = await getSearchResults(props.params);
  console.log(results);

  const flights: FlightResult[] = [];

  if (results.best_flights) {
    // For each flight in the best flights array, add it to to our flight list.
    for (let i = 0; i < results.best_flights.length; i++) {
      flights.push(results.best_flights[i]);
    }
  }

  if (results.other_flights) {
    // For each flight in the best flights array, add it to to our flight list.
    for (let i = 0; i < results.other_flights.length; i++) {
      flights.push(results.other_flights[i]);
    }
  }

  return (
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
          {flights.map((flight: FlightResult, index: number) => (
            <tr key={index} className='border-t'>
              <td className='px-4 py-4'>
                <div className='font-semibold'>
                  {flight.flights[0].departure_airport.time}
                </div>
                <div>{flight.flights[0].departure_airport.time}</div>
              </td>
              {/* <td className='px-4 py-4'>{flight.layovers}</td> */}
              <td className='px-4 py-4'>{flight.flights[0].duration}</td>
              <td className='px-4 py-4'>${flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightResultsTable;
