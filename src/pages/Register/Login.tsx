
import { Link, useLocation } from 'react-router-dom';
import loginAni from "../../../public/Animation - 1701011933091.json";
import Lottie from 'lottie-react';
import bgLogin from "../../assets/Newsletter/NewsLetter1.jpg";

const Login = () => {
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', from)


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       
        
    }

    const boxStyle = {
        boxShadow: '10px 10px 10px 10px rgba(244, 275, 255, 0.5)',
    };

    return (
        <div className="hero min-h-screen bg-base-200 bg-cover" style={{ background: `url(${bgLogin})`, backgroundSize: 'cover', }}>
            <div className="hero-content flex-col lg:flex-row m-8 md:m-20" style={{ ...boxStyle, background: `url(${bgLogin})` }}>
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
                            <input type="email" name="email" placeholder="email" className="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="w-full p-2 border border-gray-300 rounded-md" required />
                            <label className="label">
                                <a href="#" className="text-[#F4AF00] label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* apply disabled for re captcha */}
                            <button className="btn btn-outline text-[#F4AF00] bg-opacity-70">Login</button>
                        </div>
                        <div>
                            <p className='text-[#D1A054] text-center'>New here? Create a <Link to='/register' className='text-[#F4AF00] font-semibold'
                            >New Account</Link></p>
                        </div>
                        <div className='text-white divider'>Or</div>
                        <h2>social login</h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

