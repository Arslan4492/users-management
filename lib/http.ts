import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, //YOUR_API_URL HERE
  headers: {
    "Content-Type": "application/json",
  },
});
