"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
export default function Home() {
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
          <div className='md:w-1/2'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h2 className='text-2xl font-semibold mb-6'>
                Find your perfect flight in seconds.
              </h2>
              <form>
                <RadioGroup
                  defaultValue='round'
                  className='flex space-x-4 mb-4'
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='round' id='round' />
                    <Label htmlFor='round'>ROUND TRIP</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='one' id='one' />
                    <Label htmlFor='one'>ONE WAY</Label>
                  </div>
                </RadioGroup>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div>
                    <Label htmlFor='depart'>DEPART</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder='PSP (Palm S...' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='psp'>PSP (Palm Springs)</SelectItem>
                        {/* Add more options as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor='arrive'>ARRIVE</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a dest...' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='lax'>LAX (Los Angeles)</SelectItem>
                        {/* Add more options as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div>
                    <Label htmlFor='departDate'>DEPARTURE DATE</Label>
                    <Input
                      type='date'
                      id='departDate'
                      defaultValue='2023-08-14'
                    />
                  </div>
                  <div>
                    <Label htmlFor='arriveDate'>ARRIVAL DATE</Label>
                    <Input
                      type='date'
                      id='arriveDate'
                      placeholder='Select a date'
                    />
                  </div>
                </div>
                <div className='mb-6'>
                  <Label htmlFor='passengers'>NUMBER OF PASSENGERS</Label>
                  <Select defaultValue='1'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select number of passengers' />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Link href='/search-results'>
                  <Button
                    className='w-full bg-gray-600 hover:bg-gray-700'
                    size='lg'
                  >
                    SEARCH FLIGHTS
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
