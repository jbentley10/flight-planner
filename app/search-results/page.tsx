import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export default function SearchResults() {
  const flights = [
    {
      date: "8/16",
      time: "8:00am - 12:01pm",
      stops: "NONSTOP",
      duration: "6hr 1m",
      price: 123,
    },
    {
      date: "8/16",
      time: "9:00am - 3:01pm",
      stops: "1 STOP (DFW)",
      duration: "6hr 1m",
      price: 124,
    },
    {
      date: "8/16",
      time: "10:00am - 4:01pm",
      stops: "NONSTOP",
      duration: "6hr 1m",
      price: 125,
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
        <h1 className='text-3xl font-bold mb-4'>SELECT A DEPARTURE FLIGHT</h1>
        <h2 className='text-xl mb-6'>Palm Springs (PSP) to New York (JFK)</h2>
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
              {flights.map((flight, index) => (
                <tr key={index} className='border-t'>
                  <td className='px-4 py-4'>
                    <div className='font-semibold'>{flight.date}</div>
                    <div>{flight.time}</div>
                  </td>
                  <td className='px-4 py-4'>{flight.stops}</td>
                  <td className='px-4 py-4'>{flight.duration}</td>
                  <td className='px-4 py-4'>${flight.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
