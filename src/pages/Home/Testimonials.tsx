
import {
  ChevronLeftCircle,

  ChevronRightCircle,
  Quote,
} from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Jhone Doe",
      title: "Easy Booking",
      details: "Book your sports facilities with just a few clicks!",
      rating: 3,
    },
    {
      id: 2,
      name: "Jhone Doe",
      title: "Easy Booking",
      details: "Book your sports facilities with just a few clicks!",
      rating: 4,
    },
    {
      id: 3,
      name: "Jhone Doe",
      title: "Easy Booking",
      details: "Book your sports facilities with just a few clicks!",
      rating: 5,
    },
    {
      id: 4,
      name: "Jhone Doe",
      title: "Easy Booking",
      details: "Book your sports facilities with just a few clicks!",
      rating: 3.8,
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? reviews.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === reviews.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="max-w-full min-w-[350px]  mx-auto h-[400px] items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
      <div className="text-center my-5 mt-10 space-y-2">
        <h3 className="text-4xl uppercase font-bold text-orange-500">
          testimonials
        </h3>
        <p className="text-2xl font-bold">What Client s Say</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <ChevronLeftCircle size={52} color="#0f0f0f" absoluteStrokeWidth />
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <ChevronRightCircle size={52} color="#0f0f0f" absoluteStrokeWidth />
          </button>
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 100 : 50)
            }%)`,
          }}
        >
          {/* sliders */}
          {reviews.map((each, idx) => (
            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
              <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                <Quote
                  size={48}
                  color="#0f0f0f"
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                />
                <p className="leading-relaxed mb-6 text-gray-500">
                  {each?.details}
                </p>
                <a className="inline-flex items-center">
                  <img
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
                    alt="carousel navigate ui"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {each.name}
                    </span>
                    <span className="text-gray-500 text-sm">{each?.title}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
