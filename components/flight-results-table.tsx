"use client";

import React, { Suspense } from "react";
import { ArrowDownIcon } from "lucide-react";
import { Flight, FlightResult } from "@/lib/types";
import { getDate, getTime, toHoursAndMinutes } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import FlightResultsSkeleton from "./flight-results-table-skeleton";

function FlightResultsContent() {
  const searchParams = useSearchParams();

  const departure_id: string | null = searchParams.get("departure_id");
  const arrival_id: string | null = searchParams.get("arrival_id");
  const outbound_date: string | null = searchParams.get("outbound_date");
  const return_date: string | null = searchParams.get("return_date");
  const adults: string | null = searchParams.get("adults");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/flights?departure_id=${departure_id}&arrival_id=${arrival_id}&adults=${adults}&outbound_date=${outbound_date}&return_date=${return_date}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <FlightResultsSkeleton />;

  const { best_flights, other_flights } = data;

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
      <h2 className='text-xl mb-6'>{`${departure_id} to ${arrival_id}`}</h2>

      {/* <div className='flex space-x-4 mb-6'>
        {[-1, 0, 1].map((offset) => {
          const selectedDate = new Date(
            outbound_date + "T12:00:00"
          );
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);

          const date = new Date(selectedDate);
          date.setDate(date.getDate() + offset);

          // Skip if the date is before the current date
          if (date < currentDate) {
            return null;
          }

          const dayOfWeek = date.toLocaleDateString("en-US", {
            weekday: "short",
          });
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          const newOutboundDate = date.toISOString().split("T")[0];

          const newSearchParams = new URLSearchParams({
            outbound_date: newOutboundDate,
            return_date: return_date,
            departure_id: departure_id,
            arrival_id: arrival_id,
            adults: search_parameters.adults.toString(),
          });

          return (
            <Link
              key={offset}
              href={`/search-results?${newSearchParams.toString()}`}
              passHref
            >
              <Button
                variant={offset === 0 ? "secondary" : "outline"}
                className='flex flex-col items-center px-8 py-6'
              >
                <span className='text-sm font-bold'>
                  {dayOfWeek.toUpperCase()}
                </span>
                <span className='text-xs'>{formattedDate}</span>
              </Button>
            </Link>
          );
        })}
      </div> */}

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

function FlightResultsTable() {
  return (
    <Suspense fallback={<FlightResultsSkeleton />}>
      <FlightResultsContent />
    </Suspense>
  );
}

export default FlightResultsTable;
