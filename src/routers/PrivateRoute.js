import { Navigate } from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ auth, children }) => {
  return auth ? children : <Navigate to="/login" />;
};
