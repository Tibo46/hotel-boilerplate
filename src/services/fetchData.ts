import axios from "axios";

export const fetchHotels = async () => {
  const response = await fetch(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
  );
  return response;
};

export const fetchRooms = async (hotelId: string) => {
  const response = await fetch(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}/`
  );
  return response;
};

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
