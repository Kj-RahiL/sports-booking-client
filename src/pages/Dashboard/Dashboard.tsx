import { selectCurrentUser } from "../../redux/features/Auth/authSlice";
import { useGetSingleUserQuery } from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks";

const Dashboard = () => {
    const user = useAppSelector(selectCurrentUser);

    const {data} = useGetSingleUserQuery(user?.email)
  return (


      <div className="bg-purple-600 rounded-xl p-8 text-white shadow-lg flex items-center justify-between">
        {/* Text */}
        <div>
          <p className="text-sm mb-2">September 4, 2023</p>
          <h1 className="text-3xl font-bold">Welcome back, {data?.data?.name}!</h1>
          <p className="text-lg mt-2">
            Always stay updated in your {data?.data?.role} portal
          </p>
        </div>

        {/* 3D Avatar or image */}
        <img
          src="https://via.placeholder.com/120" // Replace with the 3D image
          alt="Avatar"
          className="w-32 h-32"
        />
  
    </div>
  );
};

export default Dashboard;
