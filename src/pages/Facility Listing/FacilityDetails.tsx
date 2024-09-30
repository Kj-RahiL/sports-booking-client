import { MapPin, DollarSign } from "lucide-react";
import { useNavigate, useParams, } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../../redux/features/facility/facilityApi";
import { TFacility } from "../../Types/Types";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/Auth/authSlice";

const FacilityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
const user = useAppSelector(selectCurrentUser)

  const { data, isLoading } = useGetSingleFacilityQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const facility = data?.data as TFacility;

  const handleBook = async() => {
    console.log("api hit");
    return await navigate('book-facility')
  };

  return (
    <div className="container mx-auto py-20 px-6 md:px-12">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure className="">
          <img
            src={facility?.image}
            alt="Album"
            className="w-full lg:w-[670px] h-96 object-cover rounded-lg shadow-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{facility?.name}</h2>
          <h2 className="card-title"><DollarSign/>{facility?.pricePerHour}</h2>
          <h2 className="card-title"><MapPin/>{facility?.location}</h2>
          <p>{facility?.description}</p>
          <div className="card-actions ">
          <button onClick={handleBook} className={` button ${user?.role === 'admin' ? 'btn btn-disabled' : 'button' }`}>Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
