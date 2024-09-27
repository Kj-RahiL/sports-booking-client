export type TFacility = {
  _id?: string 
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted?: boolean;
};

export type TBooking = {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
};
