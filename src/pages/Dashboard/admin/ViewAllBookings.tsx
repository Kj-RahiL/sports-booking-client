/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCurrentToken } from "../../../redux/features/Auth/authSlice";
import { useGetAllBookingQuery } from "../../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../../redux/hooks";

const ViewAllBookings = () => {
  const token = useAppSelector(useCurrentToken);
  const { data } = useGetAllBookingQuery({ token });

 
  return (
    <div className=" min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.data.map((booking: any) => (
          <div
            key={booking._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Facility Image */}
            <img
              src={booking.facility.image}
              alt={booking.facility.name}
              className="w-full h-52 object-cover"
            />

            {/* Booking Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {booking.facility.name}
              </h2>
              <p className="text-gray-500 mb-4">
                {booking.facility.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-sm">
                  <strong className="block text-gray-600">Location:</strong>
                  <span>{booking.facility.location}</span>
                </div>
                <div className="text-sm">
                  <strong className="block text-gray-600">Date:</strong>
                  <span>{booking.date}</span>
                </div>
                <div className="text-sm">
                  <strong className="block text-gray-600">Time:</strong>
                  <span>
                    {booking.startTime} - {booking.endTime}
                  </span>
                </div>
                <div className="text-sm">
                  <strong className="block text-gray-600">Price:</strong>
                  <span>${booking.payableAmount}</span>
                </div>
                <div className="text-sm">
                  <strong className="block text-gray-600">
                    Payment Status:
                  </strong>
                  <span>{booking.paymentStatus}</span>
                </div>
                <div className="text-sm">
                  <strong className="block text-gray-600">
                    Transaction ID:
                  </strong>
                  <span>{booking.transactionId}</span>
                </div>
              </div>

              <hr className="my-4" />

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <div className="rounded-full w-16 h-16 bg-gray-200 flex-shrink-0">
                  {/* Placeholder for User Avatar */}
                  <img
                    src="https://via.placeholder.com/150"
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {booking.user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{booking.user.email}</p>
                  <p className="text-sm text-gray-500">{booking.user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllBookings;
