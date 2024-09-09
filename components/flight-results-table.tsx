"use client";

import { ArrowDownIcon } from "lucide-react";
import React from "react";
import { Flight, FlightResult, FlightResults } from "@/lib/types";

function FlightResultsTable(props: {
  departureID: string;
  arrivalID: string;
  results: FlightResults;
}) {
  function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hr ${minutes} minutes`;
  }

  const { departureID, arrivalID, results } = props;

  console.log("RESULTS ON CLIENT");
  console.log(results);

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
            {results &&
              results.best_flights?.map(
                (flight: FlightResult, index: number) => (
                  <>
                    <tr key={index} className='border-t'>
                      <td className='px-4 py-4'>
                        {flight.layovers.length > 0 ? (
                          flight.flights.map(
                            (flight: Flight, index: number) => (
                              <div key={index} className='font-semibold'>
                                {flight.departure_airport.time}
                              </div>
                            )
                          )
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
                )
              )}
            {results &&
              results.other_flights?.map(
                (flight: FlightResult, index: number) => (
                  <>
                    <tr key={index} className='border-t'>
                      <td className='px-4 py-4'>
                        {flight.layovers.length > 0 ? (
                          flight.flights.map(
                            (flight: Flight, index: number) => (
                              <div key={index} className='font-semibold'>
                                {flight.departure_airport.time}
                              </div>
                            )
                          )
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
                )
              )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FlightResultsTable;
