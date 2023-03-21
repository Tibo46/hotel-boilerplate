import { useEffect, useState } from "react";
import { Hotel } from "../models/Hotel";

export const useHotels = () => {
  const [data, setData] = useState<Hotel[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
        );
        if (!response.ok) {
          setIsError(true);
          return;
        }
        setIsError(false);
        setData((await response.json()) as Hotel[]);
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
