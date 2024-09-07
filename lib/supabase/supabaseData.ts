import { Airport } from "../types";
import { createClient } from "./server";

export async function fetchAirports() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("airports")
    .select(`code, city, state, country`);

  if (error) {
    return error;
  }

  const airports: Airport[] = data;

  return airports;
}
