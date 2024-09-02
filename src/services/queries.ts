import { fetchQuote } from "./api";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../main";

export const useFetchQuote = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: fetchQuote,
    refetchOnWindowFocus: false,
  });
};

export const refetchQuote = async () => {
  try {
    return await queryClient.fetchQuery({
      queryKey: ["quote"],
      queryFn: fetchQuote,
    });
  } catch (error) {
    console.log(error);
  }
};
