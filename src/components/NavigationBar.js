import { NavLink } from "react-router-dom";
import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <button>Logout</button>
    </div>
  );
};

export default NavigationBar;
