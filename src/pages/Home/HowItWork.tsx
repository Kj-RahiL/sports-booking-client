import { useState } from "react";
import profileIcon from "../../assets/HowItWork/personalization_10605183.png";
import paymentIcon from "../../assets/HowItWork/cashless-payment_4108843.png";
import searchIcon from "../../assets/HowItWork/search_10023522.png";
import bookIcon from "../../assets/HowItWork/calendar_10761701.png";
import workIcon from "../../assets/HowItWork/schedule_15756945.png";
import searchJobIcon from "../../assets/HowItWork/job-seeker_8041053.png";
import { Link } from "react-router-dom";

const HowItWork = () => {
  const [activeTab, setActiveTab] = useState("users");
  return (
    <div className="bg-white py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">How It Works</h2>

      {/* Tabs for Employers and Freelancers */}
      <div className="flex justify-center space-x-8 mb-8">
        <button
          className={`text-lg font-semibold ${
            activeTab === "users"
              ? "text-black border-b-4 border-[#245ca9]"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("users")}
        >
          For Users
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "employers"
              ? "text-black border-b-4 border-[#245ca9]"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("employers")}
        >
          For Employers
        </button>
      </div>

      {/* Content for Freelancers */}
      {activeTab === "users" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Build Your Profile */}
          <div className="flex flex-col ">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <img src={profileIcon} alt="Build Profile Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build your profile</h3>
            <p className="text-gray-500 text-sm mb-2">
              Put your best foot forward by filling out your profile with good
              experience, easy booking and uploading portfolio items.
            </p>
            <Link to="/register" className="text-[#245ca9] font-medium">
              Sign Up now &gt;
            </Link>
          </div>

          {/* Search & Apply */}
          <div className="flex flex-col ">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <img src={searchIcon} alt="Search Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Search & Facility</h3>
            <p className="text-gray-500 text-sm mb-2">
              Search through our list of posted facilities for a booking that
              for your select play ground and time to requirements.
            </p>
            <Link to="/facility" className="text-[#245ca9] font-medium">
              See available Facilities &gt;
            </Link>
          </div>

          {/* Start booking */}
          <div className="flex flex-col card">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <img src={bookIcon} alt="Start Working Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Confirm Booking</h3>
            <p className="text-gray-500 text-sm mb-2">
              If you’re a good fit for the Facility, you can book a specific
              facility and check its availability and fil up booking form.
            </p>
            <Link to="/facility" className="text-[#245ca9] font-medium">
              booking now &gt;
            </Link>
          </div>

          {/* Get Paid */}
          <div className="flex flex-col ">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <img src={paymentIcon} alt="Get Paid Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get paid</h3>
            <p className="text-gray-500 text-sm mb-2">
              If you confirm your booking, you will be pay our facilities price.
            </p>
            <Link to="/dashboard" className="text-[#245ca9] font-medium">
              Learn more.. &gt;
            </Link>
          </div>
        </div>
      )}

      {/* Content for Employers (you can fill this in similarly) */}
      {activeTab === "employers" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Build Your Profile */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <img src={profileIcon} alt="Build Profile Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build your profile</h3>
            <p className="text-gray-500 text-sm mb-2">
            Put your best foot forward by filling out your profile with past job experience, completing skill tests, and uploading portfolio items.
            </p>
            <Link to="/register" className="text-[#245ca9]">
              Sign Up now &gt;
            </Link>
          </div>

          {/* Search & Apply */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <img src={searchJobIcon} alt="Search Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Search & apply for jobs
            </h3>
            <p className="text-gray-500 text-sm mb-2">
              Search through our list of posted projects for a job that fits
              your skills and compensation requirements.
            </p>
            <Link to="/dashbord" className="text-[#245ca9]">
              See available Facilities &gt;
            </Link>
          </div>

          {/* Start working */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <img src={workIcon} alt="Start Working Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Start working</h3>
            <p className="text-gray-500 text-sm mb-2">
              If you’re a good fit for the job, get hired on hourly rates or fixed price contracts.
            </p>
            <Link to="/dashboard" className="text-[#245ca9]">
              booking now &gt;
            </Link>
          </div>

          {/* Get Paid */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <img src={paymentIcon} alt="Get Paid Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get paid</h3>
            <p className="text-gray-500 text-sm mb-2">
              If you confirm your booking, you will be pay our facilities price.
            </p>
            <Link to="/dashboard" className="text-[#245ca9]">
              Learn more about the payments &gt;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWork;
