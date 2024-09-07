// app/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";

import { fetchAirports } from "@/lib/supabase/supabaseData";
import SearchForm from "@/components/search-form";

export default async function Home() {
  const airports = await fetchAirports();

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
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2 flex items-center'>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
              FLY SMART.
              <br />
              BOOK EASY.
              <br />
              TRAVEL HAPPY.
            </h1>
          </div>
          {airports && <SearchForm airports={airports} />}
        </div>
      </main>
    </div>
  );
}
