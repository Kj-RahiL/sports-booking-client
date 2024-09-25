/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: any;
  role: string;
}) => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  if (!user) {
    navigate("/login");
  }
  if (role && user?.role !== role) {
    navigate("/");
  }
  return children;
};

export default ProtectedRoute;
