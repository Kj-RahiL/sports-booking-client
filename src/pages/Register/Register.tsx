/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import bgLogin from "../../assets/Newsletter/NewsLetter1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/user/registerSlice";
import {
  useLogInMutation,
  useSignUpMutation,
} from "../../redux/features/Auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import { logOut, setLoginUser } from "../../redux/features/Auth/authSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const [login] = useLogInMutation();
  console.log({ error });
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Signing up...");

    try {
      dispatch(logOut());
      const response = await signUp(data).unwrap();
      console.log(response);

      toast.success(response.message, {
        id: toastId,
        duration: 4000,
        style: { color: "green" },
      });
      navigate("/");

      // login
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const token = res.token.split(" ")[1];
      const user = verifyToken(token);
      dispatch(setUser(data));

      dispatch(setLoginUser({ user, token }));
    } catch (err: any) {
      toast.error(`Error: ${err.data.message || "Sign-up failed"}`, {
        id: toastId,
        duration: 4000,
        style: { color: "red" },
      });
      console.log({ err });
    }
  };

  const boxStyle = {
    boxShadow: "5px 5px 5px 5px rgba(250,250,220, 1)",
  };
  return (
    <div
      className="hero min-h-screen bg-base-200 bg-cover"
      style={{ background: `url(${bgLogin})`, backgroundSize: "cover" }}
    >
      <div
        className="hero-content flex-col lg:flex-row m-8 md:m-20"
        style={{ ...boxStyle, background: `url(${bgLogin})` }}
      >
        <div className=" flex-shrink-0 w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-2 md:p-4 lg:p-8 space-y-2"
          >
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white text-center">
              Register SP Booking
            </h1>
            <p className="text-gray-300  text-center text-balance ">
              Already have and account?{" "}
              <Link to="/login" className="text-gray-400 font-medium underline">
                Log In
              </Link>
            </p>
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
                className="btn btn-outline text-[#F4AF00]  bg-opacity-70"
                disabled={isLoading}
              >
                SignUp
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

export default Register;
