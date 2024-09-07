import { create } from "zustand";

interface FlightSearchState {
  departAirport: string;
  arrivalAirport: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  setDepartAirport: (airport: string) => void;
  setArrivalAirport: (airport: string) => void;
  setDepartureDate: (date: string) => void;
  setReturnDate: (date: string) => void;
  setPassengers: (count: number) => void;
}

export const useFlightSearchStore = create<FlightSearchState>((set) => ({
  departAirport: "",
  arrivalAirport: "",
  departureDate: "",
  returnDate: "",
  passengers: 1,
  setDepartAirport: (airport) => set({ departAirport: airport }),
  setArrivalAirport: (airport) => set({ arrivalAirport: airport }),
  setDepartureDate: (date) => set({ departureDate: date }),
  setReturnDate: (date) => set({ returnDate: date }),
  setPassengers: (count) => set({ passengers: count }),
}));
