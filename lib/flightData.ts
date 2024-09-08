export default async function getData(options: object) {
  try {
    ``; // Execute the fetch API
    const res = await fetch("/api/flightSearch", options);

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Check if the response has content
    if (res.headers.get("content-length") === "0") {
      throw new Error("No content returned from the server.");
    }
    ``;

    // Get data back from the backend
    const final = await res.json();
    console.log("Final data: ", final);
    return final;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    return error;
  }
}
