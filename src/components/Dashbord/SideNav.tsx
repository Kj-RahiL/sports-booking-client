import {
  GraduationCap,
  CreditCard,
  Home,
  Phone,
  ContactIcon,
  ShoppingBasket,
  User,
} from "lucide-react";
import { useAppSelector } from "../../redux/hooks";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="w-1/5 bg-purple-100 p-5 pt-10">
      <div className="space-y-4">
        {/* Icon and label */}
        {user?.role === "user" && (
          <ul className="space-y-5">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center space-x-4 ${
                    isActive ? "font-bold text-purple-900" : "text-gray-600"
                  }`
                }
              >
                <GraduationCap className="h-8 w-8 text-purple-600" />
                <span className="text-lg font-semibold">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-bookings"
                className={({ isActive }) =>
                  `flex items-center space-x-4 ${
                    isActive ? "font-bold text-purple-900" : "text-gray-600"
                  }`
                }
              >
                <CreditCard className="h-8 w-8 text-gray-600" />
                <span className="text-lg font-semibold">My Bookings</span>
              </NavLink>
            </li>
          </ul>
        )}

        {user?.role === "admin" && (
          <ul className=" space-y-4">
            <li>
              {" "}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center space-x-4 ${
                    isActive ? "font-bold text-purple-900 " : "text-gray-600"
                  }`
                }
              >
                <GraduationCap className="h-8 w-8 text-purple-600" />
                <span className="text-lg font-semibold">Dashboard</span>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/dashboard/facility-management"
                className={({ isActive }) =>
                  `flex items-center space-x-4 ${
                    isActive ? "font-bold text-purple-900" : "text-gray-600"
                  }`
                }
              >
                <ShoppingBasket className="h-7 w-7 text-gray-600" />
                <span className="text-lg font-semibold">
                  Facility Management
                </span>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/dashboard/view-all-bookings"
                className={({ isActive }) =>
                  `flex items-center space-x-4 ${
                    isActive ? "font-bold text-purple-900" : "text-gray-600"
                  }`
                }
              >
                <CreditCard className="h-8 w-8 text-gray-600" />
                <span className="text-lg font-semibold">View All Bookings</span>
              </NavLink>
            </li>{" "}
            <li>
              {" "}
              <NavLink
                to="/dashboard/add-admin"
                className={({ isActive }) =>
                  `flex items-center space-x-4 ${
                    isActive ? "font-bold text-purple-900" : "text-gray-600"
                  }`
                }
              >
                <User className="h-7 w-7 text-gray-600" />
                <span className="text-lg font-semibold">Add Admin</span>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className="divider"></div>
      <div className="">
        <ul className="space-y-4">
          <li>
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-4 ${
                  isActive ? "font-bold text-purple-900" : "text-gray-600"
                }`
              }
            >
              <Home className="h-7 w-7 text-gray-600" />
              <span className="text-lg font-semibold">Home</span>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-4 ${
                  isActive ? "font-bold text-purple-900" : "text-gray-600"
                }`
              }
            >
              <ContactIcon className="h-7 w-7 text-gray-600" />
              <span className="text-lg font-semibold">About</span>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center space-x-4 ${
                  isActive ? "font-bold text-purple-900" : "text-gray-600"
                }`
              }
            >
              <Phone className="h-7 w-7 text-gray-600" />
              <span className="text-lg font-semibold">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
