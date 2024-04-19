import { writable } from "svelte/store";
import axios from "axios";

// Initialize the store with an empty array
export const cities = writable([]);

// Fetch cities data and update the store
export async function fetchCities() {}
