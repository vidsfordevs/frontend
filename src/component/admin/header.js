import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Header;
