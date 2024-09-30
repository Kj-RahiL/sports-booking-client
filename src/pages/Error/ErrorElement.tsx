
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { ArrowLeftFromLine } from "lucide-react";
import error from '../../../public/Error.json'

const ErrorElement = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center text-gray-400">
                <div className="max-w-md">
            <Lottie animationData={error}></Lottie>
                    <p className="mb-5 font-semibold text-2xl">Page Not Found</p>
                    <Link to='/'>
                        <button className="btn text-white hover:text-black bg-[#d52424]"><ArrowLeftFromLine />Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;
