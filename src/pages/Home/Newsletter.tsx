
import { InboxIcon } from "lucide-react";
import newsletterBg from "../../assets/Newsletter/NewsLetter.jpg";

const NewsLetter = () => {
  return (
    <div className="hero relative ">
      <img
        src={newsletterBg}
        alt="Slide 1"
        className="md:h-[200px] lg:h-[280px] w-full object-cover"
      />
      <div className="hero-overlay bg-[#000000] bg-opacity-70 "></div>
      <div className="hero-content text-black  w-full  flex flex-col lg:flex-row space-y-10 items-center">

          <div className=" w-full lg:w-1/2 flex gap-4 items-center justify-center">
            <InboxIcon size={40} color="white"/>
            <h2 className="text-4xl font-bold text-white">
              Sign Up For Newsletter
            </h2>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-full max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="h-[50px] w-full pl-4 pr-28 border-b-2 border-gray-400 text-white bg-transparent focus:outline-none focus:ring-0"
              />
              <button className="absolute right-0 top-0 h-[50px] px-4 bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
