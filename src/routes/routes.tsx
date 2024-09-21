import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Facility from "../pages/Facility Listing/Facility";
import Contact from "../pages/Contact/Contact";
import ErrorElement from "../pages/Error/ErrorElement";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: "/",
                element: <Home/>
              },
              {
                path: "/dashboard",
                element: <Dashboard />,
              },
              {
                path: "/about",
                element: <About/>,
              },
              {
                path: "/facility",
                element: <Facility />,
              },
              {
                path: "/contact",
                element: <Contact />,
              },
        ]
    }
])

export default router