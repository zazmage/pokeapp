import { Navigate } from "react-router-dom";
import React from "react";

export const PublicRoute = ({ auth, children }) => {
  return !auth ? children : <Navigate to="/*" />;
};
