import axios from "axios";
import { type Quote } from "../types/types";

const BASE_URL = "https://dummyjson.com";

const api = axios.create({ baseURL: BASE_URL });

export const fetchQuote = async () => {
  try {
    return (
      await api.get<Quote>(`/quotes/${Math.floor(Math.random() * 30 + 1)}`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
