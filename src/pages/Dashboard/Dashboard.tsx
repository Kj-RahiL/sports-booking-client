
const Dashboard = () => {
  return (


      <div className="bg-purple-600 rounded-xl p-8 text-white shadow-lg flex items-center justify-between">
        {/* Text */}
        <div>
          <p className="text-sm mb-2">September 4, 2023</p>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-lg mt-2">
            Always stay updated in your student portal
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
