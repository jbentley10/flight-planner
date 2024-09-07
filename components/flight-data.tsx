import { FlightResult, FlightResults } from "@/lib/types";
import React from "react";

function FlightData(props: { data: FlightResults }) {
  const { data } = props;
  return (
    <tbody>
      {data.best_flights &&
        data.best_flights.map((flight: FlightResult, index: number) => (
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
  );
}

export default FlightData;
