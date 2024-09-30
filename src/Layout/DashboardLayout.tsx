import { Bell, Menu } from "lucide-react";
import SideNav from "../components/Dashbord/SideNav";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/Auth/authSlice";
import { useGetSingleUserQuery } from "../redux/features/user/userApi";

const DashboardLayout = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data } = useGetSingleUserQuery(user?.email);
  console.log(data);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-2 md:px-8">
        {/* Page content here */}
        <div className="">
          <div className="flex justify-between items-center mb-8 mt-5 gap-2">
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden"
            >
              <Menu/>
            </label>
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
                  className="w-0 h-0 md:w-10 md:h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-900 font-medium md:font-semibold text-xs md:text-base">
                    {data?.data?.name}
                  </p>
                  <p className="text-[10px] md:text-sm text-gray-500">{data?.data?.email}</p>
                </div>
              </div>
              <Bell className= "hidden md:block md:h-6 md:w-6 text-red-600" />
            </div>
          </div>

          {/* Children outlet */}
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#003e4a]  min-h-full w-56 md:w-80 p-0 pt-4 md:pt-0 md:p-4">
          <SideNav />
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
