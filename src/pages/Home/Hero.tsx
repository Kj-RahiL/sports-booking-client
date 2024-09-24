import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../assets/hero/hero1.jpg";
import slide2 from "../../assets/hero/hero2.jpg";
import slide3 from "../../assets/hero/hero3.jpg";

const Hero = () => {
  return (
    <>
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
             delay: 4000,
             disableOnInteraction: true,
         }}
         pagination={{
             clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper "
      >
       <SwiperSlide>
          <div className="hero relative" id="hero">
            <img src={slide1} alt="Slide 1" />
            <div className="hero-overlay bg-[#000000] bg-opacity-70"></div>
            <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase">
                "Welcome to Sports Facility Booking"
              </h1>
              <p className="text-xs md:text-2xl lg:text-3xl text-gray-200">
                Book your favorite sports facility with ease
              </p>

              <button className="btn  btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="hero relative" id="hero">
            <img src={slide2} alt="Slide 2" />
            <div className="hero-overlay bg-[#000000] bg-opacity-70"></div>
            <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase">
                "Exclusive Sports Facility Offers"
              </h1>
              <p className="text-xs md:text-2xl lg:text-3xl text-gray-200">
                Play More, Pay Less
              </p>

              <button className="btn  btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative hero">
            <img src={slide3} alt="Slide 3" />
            <div className="hero-overlay bg-[#000000] bg-opacity-70"></div>
            <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase">
                "Book Your Weekend Matches Now"
              </h1>
              <p className="text-xs md:text-2xl lg:text-3xl text-gray-200">
                Flat 50% Discount on Weekend Games
              </p>
              <button className="btn  btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
