/* eslint-disable @typescript-eslint/no-explicit-any */
import { DollarSign, MapPin } from "lucide-react";
import { useCurrentToken } from "../../../redux/features/Auth/authSlice";
import { useDeleteBookingMutation, useGetUserByBookingQuery } from "../../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../../redux/hooks";
import Swal from "sweetalert2";
import { toast } from "sonner";

const MyBookings = () => {
  const token = useAppSelector(useCurrentToken);
  const { data } = useGetUserByBookingQuery({ token });
  const [deleteBooking , {reset}] = useDeleteBookingMutation()

  const handleCanceled = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, canceled it!",
      });
      
      if (result.isConfirmed) {
        await deleteBooking({id, token}).unwrap();
        Swal.fire({
          title: "Canceled!",
          text: `Your booking has been canceled.`,
          icon: "success"
        });
        reset()
      }
    } catch (error) {
      console.log("deleted error", error);
      toast.error("Failed to delete facility.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
      {data?.data?.map((booking: any) => (
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
              <button  onClick={() => handleCanceled(booking?._id as string)} className="button text-lg">cancel</button>
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
