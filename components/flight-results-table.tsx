import { Flight, FlightResult, FlightResults, SearchQuery } from "@/lib/types";
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
    `/api/flightSearch?departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}&currency=${currency}`,
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

async function FlightResultsTable(props: {
  outboundDate: string;
  returnDate: string;
  adults: number;
  departureID: string;
  arrivalID: string;
  currency: string;
}) {
  const searchParams = {
    outbound_date: props.outboundDate,
    return_date: props.returnDate,
    adults: props.adults,
    departure_id: props.departureID,
    arrival_id: props.arrivalID,
    currency: props.currency,
  };

if (searchParams.departure_id != "") {
  const results = await getSearchResults(searchParams);
}

  function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hr ${minutes} minutes`;
  }

  const bestFlights = results?.best_flights;
  const otherFlights = results?.other_flights;

  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>SELECT A DEPARTURE FLIGHT</h1>
      <h2 className='text-xl mb-6'>{`${props.departureID} to ${props.arrivalID}`}</h2>
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
            {bestFlights?.map((flight: FlightResult, index: number) => (
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
            ))}
            {otherFlights?.map((flight: FlightResult, index: number) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FlightResultsTable;
