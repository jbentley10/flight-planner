"use client";

import { AirportCombobox } from "@/components/airport-combobox";
import { Label } from "@/components/ui/label";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Airport } from "@/lib/types";
import { useFlightSearchStore } from "@/lib/flight-search-store";

function SearchForm(props: { airports: Airport[] }) {
  const { airports } = props;
  const {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    passengers,
    setPassengers,
    departAirport,
    setDepartAirport,
    arrivalAirport,
    setArrivalAirport,
  } = useFlightSearchStore();

  useEffect(() => {
    console.log(passengers);
    console.log(departureDate);
    console.log(returnDate);
    console.log(departAirport);
    console.log(arrivalAirport);
  }, [departureDate, returnDate, passengers, departAirport, arrivalAirport]);

  return (
    <div>
      <div className=''>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-2xl font-semibold mb-6'>
            Find your perfect flight in seconds.
          </h2>
          <form>
            <RadioGroup defaultValue='round' className='flex space-x-4 mb-4'>
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
                <Label htmlFor='depart'>FROM</Label>
                <br />
                {airports && (
                  <AirportCombobox
                    handleChange={setDepartAirport}
                    airports={airports}
                  />
                )}
              </div>
              <div>
                <Label htmlFor='arrive'>TO</Label>
                <br />
                {airports && (
                  <AirportCombobox
                    handleChange={setArrivalAirport}
                    airports={airports}
                  />
                )}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <Label htmlFor='departDate'>DEPARTURE DATE</Label>
                <br />
                <Input
                  onChange={(e) => setDepartureDate(e.target.value)}
                  type='date'
                  id='departDate'
                  defaultValue={"2023-08-14"}
                  value={departureDate}
                />
              </div>
              <div>
                <Label htmlFor='arriveDate'>RETURN DATE</Label>
                <Input
                  onChange={(e) => setReturnDate(e.target.value)}
                  type='date'
                  id='arriveDate'
                  placeholder='Select a date'
                  value={returnDate}
                />
              </div>
            </div>
            <div className='mb-6'>
              <Label htmlFor='passengers'>NUMBER OF PASSENGERS</Label>
              <Select
                defaultValue={passengers.toString()}
                onValueChange={(e) => setPassengers(Number(e))}
              >
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
  );
}

export default SearchForm;
