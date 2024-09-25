/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "../redux/hooks";

const PrivateRoute = ({ children }: { children: any }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
