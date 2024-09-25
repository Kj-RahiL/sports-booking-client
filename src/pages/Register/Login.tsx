/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import loginAni from "../../../public/Animation - 1701011933091.json";
import Lottie from "lottie-react";
import bgLogin from "../../assets/Newsletter/NewsLetter1.jpg";
import { useAppDispatch } from "../../redux/hooks";
import { useLogInMutation } from "../../redux/features/Auth/authApi";
import { toast } from "sonner";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { setLoginUser } from "../../redux/features/Auth/authSlice";

interface DecodedToken extends JwtPayload {
    role: string;
  }

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLogInMutation();

  const handleLogin = async (e: React.FormEvent< HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userInfo = {
        email: form.email.value,
        password: form.password.value,
      };
    const toastId = toast.loading("Logging in");
    try {
     
      const res = await login(userInfo).unwrap();
      const token = res.token.split(' ')[1]
      const user = jwtDecode<DecodedToken>(token)
      console.log(user)

      dispatch(setLoginUser({user, token}))
      toast.success("Logged In Successful", { id: toastId, duration: 4000 });

 
        navigate(`/dashboard`);
     
    } catch (error:any) {
      toast.error(error.data.message || 'login failed', { id: toastId, duration: 4000 , style: { color: 'red' }})
    }
  };

  const boxStyle = {
    boxShadow: "10px 10px 10px 10px rgba(244, 275, 255, 0.5)",
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
        <div className="text-center md:text-left hidden sm:block w-1/2">
          <Lottie animationData={loginAni}></Lottie>
        </div>
        <div className=" flex-shrink-0 w-full max-w-sm">
          <form onSubmit={handleLogin} className="card-body text-gray-200">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full p-2 border text-black border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full text-black p-2 border border-gray-300 rounded-md"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="text-[#F4AF00] label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* apply disabled for re captcha */}
              <button className="btn btn-outline text-[#F4AF00] bg-opacity-70">
                Login
              </button>
            </div>
            <div>
              <p className="text-[#D1A054] text-center">
                New here? Create a{" "}
                <Link to="/signup" className="text-[#F4AF00] font-semibold">
                  New Account
                </Link>
              </p>
            </div>
            <div className="text-white divider">Or</div>
            <h2>social login</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
