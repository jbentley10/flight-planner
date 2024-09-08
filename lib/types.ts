// Define the TypeScript types for the GraphQL response
export interface Airport {
  code: string;
  city: string;
  state: string;
  country: string;
}

export type AirportTime = {
  name: string;
  id: string;
  time: string;
};

export interface SearchQuery {
  outbound_date: string;
  return_date: string;
  adults: number;
  departure_id: string;
  arrival_id: string;
  currency: string;
}

export interface Flight {
  departure_airport: AirportTime;
  arrival_airport: AirportTime;
  duration: number;
}

export interface FlightResult {
  flights: Flight[];
  layovers: [
    {
      duration: number;
      name: string;
      id: string;
    }
  ];
  total_duration: number;
  price: number;
  type: string;
}

export interface FlightResults {
  search_metadata: {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    google_flights_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
  };
  search_parameters: {
    engine: string;
    hl: string;
    gl: string;
    departure_id: string;
    arrival_id: string;
    outbound_date: string;
    return_date: string;
    adults: number;
    currency: string;
  };
  best_flights?: FlightResult[];
  other_flights?: FlightResult[];
}
