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
  _id?: string 
  date: string;
  startTime: string;
  endTime: string;
  facility: string;
};
