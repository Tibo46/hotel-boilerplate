export type Hotel = {
  address1: string;
  address2: string;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  country: string;
  countryCode: string;
  description: string;
  email: string;
  facilities: { code: string }[];
  id: string;
  images: Photo[];
  name: string;
  position: {
    latitude: string;
    longitude: string;
    timezone: string;
  };
  postcode: string;
  starRating: number;
  telephone: string;
  town: string;
  roomsDetails: RoomsDetails;
};

export type Photo = {
  url: string;
  alt: string;
};

export type RoomsDetails = {
  ratePlans: RatePlan[];
  rooms: Room[];
};
type RatePlan = {
  cancellationPolicy: {
    amount: number;
    applicable: string;
    hour: string;
    name: string;
    penalty: string;
    text: string;
  };

  id: string;
  longDescription: string;
  prePayment: string;
  shortDescription: string;
};

export type Room = {
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: Facility[];
  id: string;
  images: Photo[];
  longDescription: string;
  name: string;
  occupancy: Occupancy;
  shortDescription: string;
};

type Occupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
};

type Facility = {
  code: string;
  name: string;
};
