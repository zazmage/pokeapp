import { NavLink } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import { logout } from "../app/slices/authSlice";
import { useDispatch } from "react-redux";

const NavigationBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
      <Button onClick={dispatch(logout)}>Logout</Button>
    </div>
  );
};

export default NavigationBar;
