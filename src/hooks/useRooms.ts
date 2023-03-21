import { RoomsDetails } from "../models/Hotel";
import { fetcher } from "../services/fetchData";
import useSWR from "swr";

export const useRooms = (hotelId: string) => {
  const { data, error, isLoading } = useSWR<RoomsDetails>(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}/`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
};
