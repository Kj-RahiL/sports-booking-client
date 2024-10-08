/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { toast } from "sonner";
import CreateFacility from "./CreateFacility";
import { TFacility } from "../../../../Types/Types";
import {
  useDeleteFacilityMutation,
  useGetAllFacilityQuery,
} from "../../../../redux/features/facility/facilityApi";
import UpdatedFacility from "./UpdatedFacility";
import { Delete } from "lucide-react";
import Swal from "sweetalert2";
import { useAppSelector } from "../../../../redux/hooks";
import { useCurrentToken } from "../../../../redux/features/Auth/authSlice";

const FacilityManagement = () => {
  const { data, error, isLoading } = useGetAllFacilityQuery(" ");
  const [deleteFacility] = useDeleteFacilityMutation();
  const token = useAppSelector(useCurrentToken);

  const handleDelete = async (id: string, name: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      
      if (result.isConfirmed) {
        await deleteFacility({id, token}).unwrap();
        Swal.fire({
          title: "Deleted!",
          text: `Your ${name} has been deleted.`,
          icon: "success"
        });
      }
    } catch (error) {
      console.log("deleted error", error);
      toast.error("Failed to delete facility.");
    }
  };

  if (isLoading)
    return (
      <div className="text-center">
        Loading<span className="loading loading-dots loading-xs"></span>
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <div className=" ">
      <div className="container mx-auto">
        <CreateFacility />
        <table className="w-full text-left">
          <thead className="border-b text-white bg-[#003e4a]">
            <tr className="text-sm md:text-base lg:text-xl">
              <th className="py-4 px-2">Facility</th>
              <th className="py-4 hidden md:block">Location</th>
              <th className="py-4 ">Price</th>
              <th className="py-4">Update</th>
              <th className="py-4">Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((facility: TFacility, index: number) => (
              <tr className={`border-b font-medium ${index % 2 === 1 ? 'bg-[#afbcbf]' : ''}`} key={facility._id}>
                <td className="py-4 flex items-center space-x-2 md:space-x-6">
                  <img
                    src={facility?.image}
                    alt={facility?.name}
                    className="w-14 md:w-24 h-14 md:h-16 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm md:text-lg">
                      {facility?.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 md:hidden sm:block">
                      {facility?.location}
                    </p>
                  </div>
                </td>
                <td className="hidden md:table-cell">{facility.location}</td>
                <td className="text-xs md:text-base">{facility.pricePerHour}</td>
               
                <td className="text-xs md:text-base">
                  <UpdatedFacility id={facility._id!} />
                </td>
                <td className="text-xs md:text-base">
                  <button
                    onClick={() => handleDelete(facility?._id as string, facility.name)}
                  >
                    <Delete className="text-red-500 text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacilityManagement;
