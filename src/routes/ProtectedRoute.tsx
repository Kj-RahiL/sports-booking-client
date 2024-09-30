/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  logOut,
  useCurrentToken,
} from "../redux/features/Auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { ReactNode } from "react";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};


const ProtectedRoute = ({
  children,
  role,
}: TProtectedRoute ) => {

  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  let user: any;

  if (token) {
    user = verifyToken(token);
  }
  console.log(user);

  if (role !== undefined && role !== user?.role ) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
