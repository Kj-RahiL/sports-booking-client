import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentToken } from "../../redux/features/Auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { LogIn, LogOut } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
      setNavbarVisible(false); // Hide navbar when scrolling down
    } else {
      setNavbarVisible(true); // Show navbar when scrolling up
    }

    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`navbar fixed z-10 bg-[#001317]  text-white transition-transform duration-300  mx-auto max-w-screen ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar fixed text-white">
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
            <ul className="menu bg-[#001317] text-white min-h-full w-48 p-4 glass">
              {/* Sidebar content here */}
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="text-[#001317] font-extrabold tracking-wider text-white-border text-base md:text-2xl  flex justify-center items-center"
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
          {user ? (
            <button
              onClick={() => (
                dispatch(logOut()),
                toast.success('LogOut Successful', {duration:3000})
              )}
              className="mr-2 md:mr-10 py-2 px-3 border-2 rounded-md flex gap-2 bg-[#364143] hover:bg-transparent"
            >
              <LogOut/>
              LogOut
            </button>
          ) : (
            <Link to="/login" className="text-sm md:text-base px-2 py-1 border mr-2 md:mr-10 md:py-2 md:px-3 md:cborder-2 rounded-md flex gap-2 bg-[#364143] hover:bg-transparent">
            <LogIn/> Log In
            </Link>
          )}
        </div>
      </div>
    </div>
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
            borderBottom: isActive ? "2px solid #fff" : "#001317",
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
    <li>
      <NavLink
        to="/contact"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Contact
      </NavLink>
    </li>
  </>
);
