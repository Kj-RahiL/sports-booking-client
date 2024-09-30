/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateAdminMutation } from "../../../redux/features/user/userApi";

const AddAdmin = () => {
  const [createAdmin, { isLoading, error }] = useCreateAdminMutation();

  console.log({ error });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Create Admin...");

    try {
      const response = await createAdmin(data).unwrap();
      reset();
      toast.success(response.message, {
        id: toastId,
        duration: 4000,
        style: { color: "green" },
      });
    } catch (err: any) {
      toast.error(`Error: ${err.data.message || "Create Admin failed"}`, {
        id: toastId,
        duration: 4000,
        style: { color: "red" },
      });
      console.log({ err });
    }
  };

  const boxStyle = {
    boxShadow: "5px 5px 5px 5px rgba(0, 35, 41, 1)",
  };
  return (
    <div className="hero min-h-screen bg-cover">
      <div
        className="hero-content flex-col lg:flex-row m-8 md:m-20 bg-[#003e4a]"
        style={{ ...boxStyle }}
      >
        <div className=" flex-shrink-0 w-full max-w-md">
          <div className="flex justify-center">
            <p className="text-white text-4xl px-6 py-4 font-semibold border-b-2 rounded-b-md">
              Add Admin{" "}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-2 md:p-4 lg:p-8 space-y-2"
          >
            <div className="md:flex ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Input your name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-600" role="alert">
                    Name is required
                  </p>
                )}
              </div>

              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Input your email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    Email is required
                  </p>
                )}
              </div>
            </div>

            <div className="md:flex">
              <div className="form-control md:w-1/2">
                <label className="label ">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Input your phone number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.phone && (
                  <span className="text-red-600">Invalid phone number</span>
                )}
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text text-white">Address</span>
                </label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  name="address"
                  placeholder="Input your address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-600" role="alert">
                    address is required
                  </p>
                )}
              </div>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="password"
                name="password"
                placeholder="Input your password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password less than 20 characters</p>
              )}
            </div>
            <div className="form-control pt-4">
              <button
                className="btn btn-outline text-white bg-[#002329] bg-opacity-70"
                disabled={isLoading}
              >
                Add Admin
              </button>
            </div>
          </form>
          {/* <div className="divider text-white">or</div>
          <h2>Social login</h2> */}
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
