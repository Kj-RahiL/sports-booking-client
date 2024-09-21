import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  const handleScroll = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      if (window.scrollY > heroHeight) {
        setShowNavbar(true); // Show the navbar after scrolling past the hero
      } else {
        setShowNavbar(false); // Hide it when inside the hero section
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show Navbar always on different routes
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbar(true);
    }
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-10 ${showNavbar ? "block" : "hidden"}`}>
      <div className="navbar fixed z-10 bg-[#04190a] bg-opacity-35 text-white mx-auto max-w-screen">
        <div className="navbar-start">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#04190a] text-white min-h-full w-48 p-4 glass">
              {/* Sidebar content here */}
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="text-[#083214] font-extrabold tracking-wider text-white-border text-base md:text-2xl logo-font flex justify-center items-center"
          >
            SP_Booking
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base glassMore">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <SearchModal/> */}
          <Link to="/proceed" className="relative mr-2 md:mr-10 p-2">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const link = (
  <>
    <li>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/facility"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Facility
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Dashboard
      </NavLink>
    </li>
  </>
);
