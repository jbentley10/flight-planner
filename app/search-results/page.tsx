"use client";

import FlightResultsTable from "@/components/flight-results-table";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { QueryContext } from "./layout";

export default function SearchResults() {
  const {
    outbound_date,
    return_date,
    adults,
    departure_id,
    arrival_id,
    currency,
  } = useContext(QueryContext);

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='w-40 h-8 bg-gray-300'></div>
          <div className='space-x-4'>
            <Button variant='ghost'>LOG IN</Button>
            <Button>SIGN UP</Button>
          </div>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8'>
        <div className='flex justify-between mb-8'>
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2'>
              1
            </div>
            <span className='font-semibold'>CHOOSE DEPARTURE FLIGHT</span>
          </div>
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mr-2'>
              2
            </div>
            <span className='text-gray-600'>CHOOSE RETURN FLIGHT</span>
          </div>
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mr-2'>
              3
            </div>
            <span className='text-gray-600'>PAYMENT</span>
          </div>
        </div>

        <FlightResultsTable
          outboundDate={outbound_date}
          returnDate={return_date}
          adults={adults}
          departureID={departure_id}
          arrivalID={arrival_id}
          currency={currency}
        />
      </main>
    </div>
  );
}
