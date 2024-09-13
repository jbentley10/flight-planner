"use client";

import React from "react";
import { ArrowDownIcon } from "lucide-react";
import { Flight, FlightResult, FlightResults } from "@/lib/types";
import { getDate, getTime, toHoursAndMinutes } from "@/lib/utils";

function FlightResultsTable(props: {
  departureID: string;
  arrivalID: string;
  results: FlightResults;
}) {
  const { departureID, arrivalID } = props;
  const { best_flights, other_flights } = props.results;

  function FlightDataRow(props: { flights: FlightResult[] }) {
    return (
      <>
        {props.flights.map((flight: FlightResult, index: number) => (
          <tr key={index} className='border-t'>
            <td className='px-4 py-4'>
              {getDate(flight.flights[0]?.departure_airport.time)}
              {flight.flights.map((flight: Flight, index: number) => (
                <div key={index} className='font-semibold'>
                  Depart {flight.departure_airport.id} at &nbsp;
                  {getTime(flight.departure_airport.time)} &nbsp; Arrive &nbsp;
                  {flight.arrival_airport.id} at &nbsp;
                  {getTime(flight.arrival_airport.time)}
                </div>
              ))}
            </td>
            <td className='px-4 py-4'>
              {flight.layovers ? flight.layovers.length : "Nonstop"}
            </td>
            <td className='px-4 py-4'>
              {toHoursAndMinutes(flight.flights[0].duration)}
            </td>
            <td className='px-4 py-4'>${flight.price}</td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>SELECT A DEPARTURE FLIGHT</h1>
      <h2 className='text-xl mb-6'>{`${departureID} to ${arrivalID}`}</h2>
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
            {best_flights && <FlightDataRow flights={best_flights} />}
            {other_flights && <FlightDataRow flights={other_flights} />}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FlightResultsTable;
