import { Bell } from "lucide-react";
import SideNav from "../components/Dashbord/SideNav";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/Auth/authSlice";
import { useGetSingleUserQuery } from "../redux/features/user/userApi";

const DashboardLayout = () => {
  const user = useAppSelector(selectCurrentUser);

  const {data} = useGetSingleUserQuery(user?.email)
  console.log(data)
 

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <SideNav />

      {/* header content */}
      <div className="flex-1 p-8 ">
        {/* Top section with search bar and user info */}
        <div className="flex justify-between items-center mb-8">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-2 rounded-md border border-gray-300"
          />

          {/* User profile and notifications */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-900 font-semibold">{data?.data?.name}</p>
                <p className="text-sm text-gray-500">{data?.data?.email}</p>
              </div>
            </div>
            <Bell className="h-6 w-6 text-red-600" />
          </div>
        </div>

        {/* Children outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
