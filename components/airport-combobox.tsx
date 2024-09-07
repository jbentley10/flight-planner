// components/airport-combobox.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Airport } from "@/lib/types";

export function AirportCombobox(props: { airports: Airport[] }) {
  const { airports } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  // Sort airports alphabetically by city
  const sortedAirports = React.useMemo(() => {
    return [...airports].sort((a, b) => a.city.localeCompare(b.city));
  }, [airports]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value
            ? sortedAirports.find((airport) => airport.code === value)?.city ||
              "Select airport..."
            : "Select airport..."}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search airport...' />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {sortedAirports.map((airport) => (
                <CommandItem
                  key={airport.code}
                  value={airport.code}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      value === airport.code ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {airport.city}, {airport.state} ({airport.code})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
