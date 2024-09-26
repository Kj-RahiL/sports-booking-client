import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Facility from "../pages/Facility Listing/Facility";
import Contact from "../pages/Contact/Contact";
import ErrorElement from "../pages/Error/ErrorElement";
import Register from "../pages/Register/Register";
import Login from "../pages/Register/Login";
import FacilityDetails from "../pages/Facility Listing/FacilityDetails";
import ProtectedRoute from "./ProtectedRoute";
import MyBookings from "../pages/Dashboard/user/MyBookings";
import FacilityManagement from "../pages/Dashboard/admin/FacilityManagement/FacilityManagement";
import ViewAllBookings from "../pages/Dashboard/admin/ViewAllBookings";
import AddAdmin from "../pages/Dashboard/admin/AddAdmin";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/bookings/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "signUp",
    element: <Register />,
    // errorElement: <ErrorElement/>,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorElement />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "facility-management",
        element: (
          <ProtectedRoute role="admin">
            <FacilityManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "view-all-bookings",
        element: (
          <ProtectedRoute role="admin">
            <ViewAllBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "add-admin",
        element: (
          <ProtectedRoute role="admin">
            <AddAdmin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
