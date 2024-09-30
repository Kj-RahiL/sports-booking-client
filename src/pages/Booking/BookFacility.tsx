/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker"; // You may need to install this library or use an alternative
import "react-datepicker/dist/react-datepicker.css"; // Style for date picker
import { useGetSingleFacilityQuery } from "../../redux/features/facility/facilityApi";
import { TFacility } from "../../Types/Types";
import { useCheckAvailabilityQuery } from "../../redux/features/booking/availabilityApi";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";
import { useCreateBookingMutation } from "../../redux/features/booking/bookingApi";
import { useCurrentToken } from "../../redux/features/Auth/authSlice";

const BookFacility = () => {
  const token = useAppSelector(useCurrentToken);
  const { id } = useParams(); // Facility ID
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { data: facilityData, isLoading } = useGetSingleFacilityQuery(id);
  const { data: availabilityData, refetch } = useCheckAvailabilityQuery({
    date: selectedDate?.toISOString().split("T")[0],
    facility: facilityData?.data?._id,
  });
  const [createBooking] = useCreateBookingMutation();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const facility = facilityData?.data as TFacility;

  // Handle time slot selection
  const handleTimeSlotSelection = (slotStart: string, slotEnd: string) => {
    setStartTime(slotStart);
    setEndTime(slotEnd);
  };

  const handleCheckAvailability = () => {
    if (selectedDate && facility?._id) {
      refetch();
    }
  };

  const handleProceedToPay = async () => {
    if (startTime && endTime) {
      const bookingData = {
        facility: facilityData?.data?._id,
        date: selectedDate.toISOString().split("T")[0],
        startTime,
        endTime,
      };
      const response = await createBooking({ token, bookingData }).unwrap();
      window.location.href = response.data.payment_url;
      console.log(response);
      toast.success(response.message, { duration: 3000 });
      handleCheckAvailability();
    } else {
      toast.warning("Please select a valid time slot.");
    }
  };

  return (
    <div className="container mx-auto py-20">
      {/* Facility Overview */}
      <h1 className="text-2xl font-bold text-center mb-6">Booking Page</h1>

      <div className="card w-4/5 md:w-1/2 mx-auto">
        {/* Facility Information */}
        <div className="border-dotted border-2 border-gray-300 p-4 mb-6">
          <h2 className="font-bold text-lg">{facility?.name}</h2>
          <p className="text-gray-600">{facility?.description}</p>
        </div>

        {/* Date Picker */}
        <div className="flex items-center justify-between mb-6 w-full">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date!)}
            dateFormat="yyyy/MM/dd"
            className="border px-3 py-2 w-4/5 md:w-full"
            placeholderText="Select a date"
          />
          <button onClick={handleCheckAvailability} className=" button ">
            Check Availability
          </button>
        </div>

        {/* Available Slots */}
        <h3 className="text-lg font-semibold mb-4">Available Slots</h3>
        {availabilityData?.data.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {availabilityData.data.map((slot: any) => (
              <button
                key={slot.startTime}
                onClick={() =>
                  handleTimeSlotSelection(slot.startTime, slot.endTime)
                }
                className={`px-4 py-2 border ${
                  startTime === slot.startTime
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {slot.startTime} - {slot.endTime}
              </button>
            ))}
          </div>
        ) : (
          <p className="py-8 text-xl font-medium text-sky-800">
            No available slots for this date.
          </p>
        )}

        {/* Time Slot Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-lg">Start Time:</label>
            <input
              type="text"
              value={startTime}
              readOnly
              className="border px-4 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-lg">End Time:</label>
            <input
              type="text"
              value={endTime}
              readOnly
              className="border px-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Proceed to Payment Button */}
        <button
          onClick={handleProceedToPay}
          className="bg-gray-800 text-white px-6 py-3 mt-4 rounded"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default BookFacility;
