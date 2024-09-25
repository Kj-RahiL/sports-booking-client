import { GraduationCap, CreditCard, User2, Play } from "lucide-react";
import { useAppSelector } from "../../redux/hooks";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <aside className="w-1/5 bg-purple-100 p-5">
      <div className="flex flex-col items-center space-y-6">
        {/* Icon and label */}
        {user?.role === "user" && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `flex items-center space-x-4 ${isActive ? 'font-bold text-purple-900' : 'text-gray-600'}`
              }
            >
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <span className="text-lg font-semibold">Dashboard</span>
            </NavLink>

            <NavLink
              to="/dashboard/my-bookings"
              className={({ isActive }) => 
                `flex items-center space-x-4 ${isActive ? 'font-bold text-purple-900' : 'text-gray-600'}`
              }
            >
              <CreditCard className="h-8 w-8 text-gray-600" />
              <span className="text-lg font-semibold">My Bookings</span>
            </NavLink>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `flex items-center space-x-4 ${isActive ? 'font-bold text-purple-900' : 'text-gray-600'}`
              }
            >
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <span className="text-lg font-semibold">Dashboard</span>
            </NavLink>
            
            <NavLink
              to="/dashboard/facility-management"
              className={({ isActive }) => 
                `flex items-center space-x-4 ${isActive ? 'font-bold text-purple-900' : 'text-gray-600'}`
              }
            >
              <Play className="h-8 w-8 text-gray-600" />
              <span className="text-lg font-semibold">Facility Management</span>
            </NavLink>

            <NavLink
              to="/dashboard/view-all-bookings"
              className={({ isActive }) => 
                `flex items-center space-x-4 ${isActive ? 'font-bold text-purple-900' : 'text-gray-600'}`
              }
            >
              <CreditCard className="h-8 w-8 text-gray-600" />
              <span className="text-lg font-semibold">View All Bookings</span>
            </NavLink>

            <NavLink
              to="/dashboard/add-admin"
              className={({ isActive }) => 
                `flex items-center space-x-4 ${isActive ? 'font-bold text-purple-900' : 'text-gray-600'}`
              }
            >
              <User2 className="h-8 w-8 text-gray-600" />
              <span className="text-lg font-semibold">Add Admin</span>
            </NavLink>
          </>
        )}
      </div>
    </aside>
  );
};

export default SideNav;
