import {
  AccountCircle,
  Dashboard,
  HelpOutline,
  QuestionAnswer,
} from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const User = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "Add New Query",
      icon: <HelpOutline />,
      link: "/user/addquery",
    },
  ];

  return (

    <div className="query-listing" >
    <Sidebar sidebarOptions={sidebarOptions} title={"Developer Dashboard"}>
      <Outlet />
    </Sidebar>
    </div>
  );
};

export default User;
