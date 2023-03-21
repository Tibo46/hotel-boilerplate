import { Hotel } from "../models/Hotel";
import { fetcher } from "../services/fetchData";
import useSWR from "swr";

export const useHotels = () => {
  const { data, error, isLoading } = useSWR<Hotel[]>(
    `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
};
