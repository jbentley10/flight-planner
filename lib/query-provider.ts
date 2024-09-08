import { createContext } from 'react';

export const QueryContext = createContext({
  outbound_date: "2024-09-09",
  return_date: "2024-09-16",
  adults: 1,
  departure_id: "PSP",
  arrival_id: "JFK",
  currency: "USD",
});