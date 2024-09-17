import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hr ${minutes} minutes`;
}

export function getTime(timeString: string) {
  // Parse the date string into a Date object
  const dateObject = new Date(timeString);

  // Extract the time, month, and day
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  // Format the time as you need
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}

export function getDate(timeString: string) {
  // Parse the date string into a Date object
  const dateObject = new Date(timeString);

  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based, so add 1 and pad with 0
  const day = dateObject.getDate().toString().padStart(2, "0");

  return `${month}/${day}`;
}

export function getStringDate(timeString: string) {
  // Parse the date string into a Date object
  const dateObject = new Date(timeString);

  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based, so add 1 and pad with 0
  const day = dateObject.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
