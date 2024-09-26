import { useState } from "react";
import { Search, MapPin, DollarSign } from "lucide-react"; // Icons from lucide-react
import { Link } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facility/facilityApi";
import { TFacility } from "../../Types/Types";

const Facility = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceSort, setPriceSort] = useState('default');

  const { data, error, isLoading } = useGetAllFacilityQuery(" "); // Get the facilities data
  const facilities = data?.data;
  console.log(facilities);
  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  // If no facilities are returned
  if (!facilities || facilities.length === 0)
    return <div>No facilities available</div>;

  // Filter facilities based on search term and price filter
  let filteredFacilities = facilities?.filter((facility:TFacility) => {
    const matchSearch =
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchSearch;
  });

  // Sort facilities based on price
  if (priceSort === "lowToHigh") {
    filteredFacilities = filteredFacilities.sort((a, b) => a.price - b.price);
  } else if (priceSort === "highToLow") {
    filteredFacilities = filteredFacilities.sort((a, b) => b.price - a.price);
  }
  return (
    <div className="py-20 px-6 md:px-12">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by facility name or location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Price Sorting Dropdown */}
        <div className="flex items-center space-x-4">
          <label className="text-gray-600 font-semibold">Sort by Price:</label>
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      {/* Facility Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredFacilities.map((facility:TFacility) => (
          <div
            key={facility._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="mr-2" /> {facility.location}
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <DollarSign className="mr-2" /> ${facility.pricePerHour} per hour
              </div>
              <Link
                to={`${facility._id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
