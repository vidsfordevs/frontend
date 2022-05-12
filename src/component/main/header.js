import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);
  const navigate = useNavigate();
  const url = app_config.backend_url;

  const openDashboard = () => {
    if (sessionStorage.getItem("user") !== null) {
      navigate("/user/addquery");
    } else {
      console.log(sessionStorage.getItem("user"));
    }
  };

  const showAdmin = () => {
    if (sessionStorage.getItem("admin") !== null) {
      return <Button
      onClick={(e) => navigate("/admin/manageuser")}
      color="inherit"
      sx={{ mr: 3 }}
    >
      Admin
    </Button>
    }
  }

  return (
    <AppBar sx={{ background: "#17130a", color: "#fdff98" }}>
      <Toolbar sx={{ mr: 2 }}>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <b>Vids For Devs</b>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          onClick={(e) => navigate("/main/home")}
          color="inherit"
          sx={{ mr: 3 }}
        >
          Home
        </Button>
        <Button
          onClick={(e) => navigate("/main/querylisting")}
          color="inherit"
          sx={{ mr: 3 }}
        >
          View Queries
        </Button>

        <Button
              onClick={(e) => navigate("/main/login")}
              color="inherit"
              sx={{ mr: 3 }}
              >
              Admin Login
            </Button>
        {currentUser ? (
          <IconButton sx={{ p: 0 }} onClick={openDashboard}>
            <Avatar
              alt={currentUser.username}
              src={url + "/uploads/" + currentUser.avatar}
            />
          </IconButton>
        ) : (
          <Box>
            <Button
              onClick={(e) => navigate("/main/login")}
              color="inherit"
              sx={{ mr: 3 }}
            >
              Login
            </Button>
            <Button
              onClick={(e) => navigate("/main/signup")}
              color="inherit"
              sx={{ mr: 3 }}
            >
              Signup
            </Button>
          </Box>
        )}
                {showAdmin()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
