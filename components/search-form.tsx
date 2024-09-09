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

import React, { useState } from "react";
import { Button } from "./ui/button";

function SearchForm(props: {
  airports: {
    code: string;
    city: string;
    state: string | null;
    country: string | null;
  }[];
}) {
  const [outboundDate, setOutboundDate] = useState<string | undefined>(
    "2024-09-09"
  );
  const [returnDate, setReturnDate] = useState<string | undefined>(
    "2024-09-10"
  );
  const [departAirport, setDepartAirport] = useState<string | undefined>();
  const [arrivalAirport, setArrivalAirport] = useState<string | undefined>();
  const [passengers, setPassengers] = useState<string>("1");

  const { airports } = props;

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
                  onChange={(e) => setOutboundDate(e.target.value)}
                  type='date'
                  id='departDate'
                  value={outboundDate}
                />
              </div>
              <div>
                <Label htmlFor='arriveDate'>RETURN DATE</Label>
                <Input
                  onChange={(e) => setReturnDate(e.target.value)}
                  type='date'
                  id='arriveDate'
                  placeholder='Select a date' // Change this to get the day after the outboundDate, inaz
                  value={returnDate}
                />
              </div>
            </div>
            <div className='mb-6'>
              <Label htmlFor='passengers'>NUMBER OF PASSENGERS</Label>
              <Select
                defaultValue={passengers.toString()}
                onValueChange={(e) => setPassengers(Number(e).toString())}
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
            <Link
              aria-disabled={
                (outboundDate &&
                  returnDate &&
                  departAirport &&
                  arrivalAirport &&
                  passengers) !== undefined
                  ? false
                  : true
              }
              href={{
                pathname: "/search-results",
                query: {
                  outbound_date: outboundDate,
                  return_date: returnDate,
                  depart_airport: departAirport,
                  arrival_airport: arrivalAirport,
                  adults: passengers,
                },
              }}
            >
              <Button
                className='w-full bg-gray-600 hover:bg-gray-700'
                size='lg'
                disabled={
                  (outboundDate &&
                    returnDate &&
                    departAirport &&
                    arrivalAirport &&
                    passengers) !== undefined
                    ? false
                    : true
                }
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
