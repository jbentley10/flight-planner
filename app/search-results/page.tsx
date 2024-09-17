import FlightResultsTable from "@/components/flight-results-table";
import FlightResultsSkeleton from "@/components/flight-results-table-skeleton";
import { Button } from "@/components/ui/button";
import getSearchResults from "@/lib/getData";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: {
    outbound_date: string;
    return_date: string;
    depart_airport: string;
    arrival_airport: string;
    adults: string;
  };
}) {
  const departure_id: string | null = searchParams.depart_airport;
  const arrival_id: string | null = searchParams.arrival_airport;

  // fetch options
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      outbound_date: searchParams.outbound_date,
      return_date: searchParams.return_date,
      adults: searchParams.adults,
      departure_id: searchParams.depart_airport,
      arrival_id: searchParams.arrival_airport,
      currency: "USD",
    }),
  };

  const results = await getSearchResults(options);
  console.log(results);

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

        {typeof results != "undefined" && departure_id && arrival_id ? (
          <FlightResultsTable
            departureID={departure_id}
            arrivalID={arrival_id}
            results={results}
          />
        ) : (
          <FlightResultsSkeleton />
        )}
      </main>
    </div>
  );
}
