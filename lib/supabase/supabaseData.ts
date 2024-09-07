import { createClient } from "./server";

export async function fetchAirports() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("airports")
    .select(`code, city, state, country`);

  console.log(data);
  console.log(error);

  return data;
}
