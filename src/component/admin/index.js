import { AccountCircle, Dashboard, QuestionAnswer } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Manage Users",
      icon: <QuestionAnswer />,
      link: "/admin/manageuser",
    },
    {
      name: "Manage Query",
      icon: <QuestionAnswer />,
      link: "/admin/managequery",
    },
  ];

  return (
    <Sidebar sidebarOptions={sidebarOptions} title={"Admins Dashboard"}>
      <Outlet />
    </Sidebar>
  );
};

export default Admin;
