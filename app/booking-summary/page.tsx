"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function BookingSummary() {
  const flights = [
    {
      date: "8/16",
      route: "PSP → NYC",
      time: "8:00am - 12:01pm",
      stops: "NONSTOP",
      duration: "6hr 1m",
      price: 123,
      fareClass: "Economy Light",
    },
    {
      date: "8/18",
      route: "PSP → NYC",
      time: "8:00am - 12:01pm",
      stops: "NONSTOP",
      duration: "6hr 1m",
      price: 123,
      fareClass: "Economy Light",
    },
  ];

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
              <CheckIcon className='h-5 w-5' />
            </div>
            <span className='font-semibold'>CHOOSE DEPARTURE FLIGHT</span>
          </div>
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2'>
              <CheckIcon className='h-5 w-5' />
            </div>
            <span className='font-semibold'>CHOOSE RETURN FLIGHT</span>
          </div>
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2'>
              3
            </div>
            <span className='font-semibold'>PAYMENT</span>
          </div>
        </div>
        <h1 className='text-3xl font-bold mb-4'>BOOKING SUMMARY</h1>
        <h2 className='text-xl mb-6'>Palm Springs (PSP) to New York (JFK)</h2>
        <div className='space-y-6'>
          {flights.map((flight, index) => (
            <Card key={index}>
              <CardContent className='p-6'>
                <div className='flex justify-between items-center mb-4'>
                  <div className='text-lg font-semibold'>{flight.date}</div>
                  <div className='text-lg font-semibold'>{flight.route}</div>
                  <div className='text-lg font-semibold'>
                    {flight.fareClass}
                  </div>
                </div>
                <div className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'>
                  <div>{flight.time}</div>
                  <div>{flight.stops}</div>
                  <div>{flight.duration}</div>
                  <div className='font-semibold'>${flight.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div className='text-2xl font-bold'>
            Total: ${flights.reduce((sum, flight) => sum + flight.price, 0)}
          </div>
          <Link href='/payment'>
            <Button size='lg'>Proceed to Payment</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
