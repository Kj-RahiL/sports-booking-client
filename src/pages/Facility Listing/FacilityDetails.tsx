import { MapPin, DollarSign } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../../redux/features/facility/facilityApi";
import { TFacility } from "../../Types/Types";

const FacilityDetails = () => {
  const { id } = useParams(); //
  const navigate = useNavigate();

  const { data } = useGetSingleFacilityQuery(id);

  const facility = data?.data as TFacility

  console.log(facility);

  // Navigate to booking page
  const handleBooking = () => {
    navigate(`/book-facility/${facility._id}`);
  };

  return (
    <div className="container mx-auto py-8 px-6 md:px-12">
      {/* Facility Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        {/* <div>
          <img 
            src={facility.images[0]} 
            alt={facility.name} 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-3 gap-2 mt-4">
            {facility.images.slice(1).map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Image ${index + 1}`} 
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        </div> */}

        {/* Facility Information */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{facility?.name}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="mr-2" /> {facility?.location}
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <DollarSign className="mr-2" /> ${facility?.pricePerHour} per hour
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{facility?.description}</p>

       
          <button 
            onClick={handleBooking}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
