import { createContext } from 'react';

export const QueryContext = createContext({
  outbound_date: "",
  return_date: "",
  adults: 1,
  departure_id: "",
  arrival_id: "",
  currency: "USD",
});