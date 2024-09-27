/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetSingleFacilityQuery,
  useUpdateFacilityMutation,
} from "../../../../redux/features/facility/facilityApi";
import { toast } from "sonner";
import { Edit } from "lucide-react";
import { TFacility } from "../../../../Types/Types";
import { useCurrentToken } from "../../../../redux/features/Auth/authSlice";
import { useAppSelector } from "../../../../redux/hooks";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatedFacility = ({ id }: { id: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const [updateProduct] = useUpdateFacilityMutation();
  const token = useAppSelector(useCurrentToken);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const { data } = useGetSingleFacilityQuery(id);

  const facility = data?.data as TFacility;
  console.log(facility);
  useEffect(() => {
    if (facility) {
      setValue("name", facility.name);
      setValue("pricePerHour", facility.pricePerHour);
      setValue("location", facility.location);
      setValue("description", facility.description);
    }
  }, [facility, setValue]);

  const onSubmit = async (data: any) => {
    let imageUrl = facility?.image;

    const toastId = toast.loading("update facility...");
    // Check if the user has selected a new image
    if (data.image && data.image[0]) {
      try {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const resData = await response.json();
        console.log("Image uploaded successfully:", resData);

        if (resData.success) {
          imageUrl = resData.data.display_url; // Set the new image URL
        }
      } catch (error) {
        console.error("Image upload error:", error);
        toast.error("Image upload failed, using previous image.", { id: toastId, duration: 3000 });
      }
    }

    try {
      const updatedProduct = {
        facility: {
          name: data.name || facility?.name,
          pricePerHour: data.pricePerHour
            ? parseFloat(data.pricePerHour)
            : facility?.pricePerHour,
          location: data.location
            ? parseFloat(data.location)
            : facility?.location,
          image: imageUrl, // Use the new image if uploaded, otherwise keep the old one
          description: data.description || facility?.description,
        },
      };

      await updateProduct({ id, token, ...updatedProduct }).unwrap();
      toast.success("Facility updated successfully!", { id: toastId, duration: 3000 });
      setOpenModal(false);
    } catch (error) {
      console.error("Facility update error:", error);
      toast.error("Failed to update the facility.", { id: toastId, duration: 4000 });
    }
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>
        <Edit className="text-[#021405] text-2xl" />
      </button>
      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto"
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className="w-3/4 lg:w-3/5 my-10 mx-auto px-5 md:px-10 lg:px-20 py-5 bg-white/70 card overflow-y-auto max-h-[90vh] shadow-green-900 shadow"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                onClick={() => setOpenModal(false)}
                className="btn btn-md btn-circle btn-ghost absolute right-4 top-2 py-4"
              >
                ✕
              </button>
              {/* name and image Row */}
              <div className="md:flex mt-8 mb-2 md:mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      {...register("name", { required: "name is required" })}
                      placeholder="Product name"
                      className="input input-bordered w-full"
                    />
                  </label>
                  {errors.name && typeof errors.name.message === "string" && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Image
                    </span>
                  </label>
                  <label className="input-group w-full">
                    <input
                      type="file"
                      {...register("image", { required: "Image is required" })}
                      className="file-input file-input-bordered w-full"
                    />
                  </label>
                  {errors.image && typeof errors.image.message === "string" && (
                    <p className="text-red-500">{errors.image.message}</p>
                  )}
                </div>
              </div>

              {/* pricePerHour and Location Row */}
              <div className="md:flex mb-2 md:mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      PricePerHour
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      {...register("pricePerHour", {
                        required: "pricePerHour is required",
                      })}
                      placeholder="Product pricePerHour"
                      className="input input-bordered w-full"
                    />
                  </label>
                  {errors.pricePerHour &&
                    typeof errors.pricePerHour.message === "string" && (
                      <p className="text-red-500">
                        {errors.pricePerHour.message}
                      </p>
                    )}
                </div>

                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Location
                    </span>
                  </label>
                  <label>
                    <input
                      type="text"
                      {...register("location", {
                        required: "Location is required",
                      })}
                      className="input file-input-bordered w-full"
                    />
                  </label>
                  {errors.location &&
                    typeof errors.location.message === "string" && (
                      <p className="text-red-500">{errors.location.message}</p>
                    )}
                </div>
              </div>

              {/* Description */}
              <div className="form-control mb-8">
                <label className="label">
                  <span className="label-text text-xl font-medium text-[#63433f]">
                    Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    {...register("description", {
                      required: "Description is required",
                    })}
                    placeholder="Input your product description"
                    className="input input-bordered w-full"
                  />
                </label>
                {errors.description &&
                  typeof errors.description.message === "string" && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
              </div>

              {/* submit */}
              <input
                className="btn btn-block normal-case hover:bg-green-900 bg-green-700 text-white"
                type="submit"
                value="Apply"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatedFacility;
