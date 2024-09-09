"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import React from "react";
import { Skeleton } from "./ui/skeleton";

function SearchFormSkeleton() {
  return (
    <div>
      <div className=''>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-2xl font-semibold mb-6'>
            Find your perfect flight in seconds.
          </h2>
          <form>
            <RadioGroup defaultValue='round' className='flex space-x-4 mb-4'>
              <Skeleton className='flex items-center space-x-2'>
                <RadioGroupItem value='round' id='round' />
                <Label htmlFor='round'>ROUND TRIP</Label>
              </Skeleton>
              <Skeleton className='flex items-center space-x-2'>
                <RadioGroupItem value='one' id='one' />
                <Label htmlFor='one'>ONE WAY</Label>
              </Skeleton>
            </RadioGroup>
            <Skeleton className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <Label htmlFor='depart'>FROM</Label>
              </div>
              <div>
                <Label htmlFor='arrive'>TO</Label>
              </div>
            </Skeleton>
            <Skeleton className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <Label htmlFor='departDate'>DEPARTURE DATE</Label>
                <br />
              </div>
              <div>
                <Label htmlFor='arriveDate'>RETURN DATE</Label>
              </div>
            </Skeleton>
            <Skeleton className='mb-6'>
              <Label htmlFor='passengers'>NUMBER OF PASSENGERS</Label>
            </Skeleton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchFormSkeleton;
