"use client";

import { useFlightSearchStore } from "@/lib/flight-search-store";
import React, { createContext } from "react";

export const QueryContext = createContext({
  outbound_date: "",
  return_date: "",
  adults: 1,
  departure_id: "",
  arrival_id: "",
  currency: "USD",
});

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    departureDate,
    returnDate,
    passengers,
    departAirport,
    arrivalAirport,
  } = useFlightSearchStore();

  return (
    <QueryContext.Provider
      value={{
        outbound_date: departureDate,
        return_date: returnDate,
        adults: passengers,
        departure_id: departAirport,
        arrival_id: arrivalAirport,
        currency: "USD",
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}

export default Layout;
