import { DollarSign, MapPin } from "lucide-react";
import { useCurrentToken } from "../../../redux/features/Auth/authSlice";
import { useGetUserByBookingQuery } from "../../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../../redux/hooks";

const MyBookings = () => {
  const token = useAppSelector(useCurrentToken);
  const { data } = useGetUserByBookingQuery({ token });
  console.log(data?.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
      {data?.data?.map((booking) => (
        <div key={booking._id} className="card shadow-md shadow-[#003e4a]">
          <figure className="px-10 pt-10 h-[220px]">
            <img
              src={booking?.facility.image}
              alt="Shoes"
              className="rounded-xl h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {booking.facility.name}
            </h2>
            <h2 className="card-title text-xl font-bold">
              <MapPin /> {booking.facility.location}
            </h2>
            <p className="text-xl text-gray-800 flex gap-2">
              <DollarSign /> BDT {booking.payableAmount}
            </p>

            <div className="flex justify-between items-center">
              <p className="text-xl text-gray-800">
                Start: {booking.startTime}
              </p>
              <p className="text-xl text-gray-800">End: {booking.endTime}</p>
            </div>
            <div className="flex justify-between items-center ">
              <button className="button text-lg">cancel</button>
              {booking?.paymentStatus === "pending" && (
                <button className="button text-lg">pay</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
