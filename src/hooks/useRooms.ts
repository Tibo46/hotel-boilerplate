import { useEffect, useState } from "react";
import { RoomsDetails } from "../models/Hotel";

export const useRooms = (hotelId: string) => {
  const [data, setData] = useState<RoomsDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}/`
        );
        if (!response.ok) {
          setIsError(true);
          return;
        }
        setIsError(false);
        setData((await response.json()) as RoomsDetails);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (data === null) {
      fetchData();
    }
  }, [data]);

  return {
    data,
    isLoading,
    isError,
  };
};
