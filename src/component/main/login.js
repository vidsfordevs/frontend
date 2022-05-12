import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const LoginPage = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();
  const loginForm = {
    email: "",
    password: "",
  };

  const [showPass, setShowPass] = useState(false);

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
        res.json().then((data) => {
          console.log(data);
          sessionStorage.setItem("user", JSON.stringify(data));
          if(data.username === 'Admin'){
          sessionStorage.setItem("admin", JSON.stringify(data));

          
          return navigate("/admin/manageuser");
          }
          navigate("/user");
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "OOps!",
          text: "Loggedin Failed",
        });
      }
    });
  };

  return (
    <div className="start">
      <div className="app-wrapper">
        <div>
          <h2 className="title my-2 text-dark  fw-bold  ">Login/Signup</h2>
        </div>  


        <div class="col-md col-sm  ">
         
        {" "}
          <a  
            class="btn btn-lg btn-google btn-block  btn-outline col-md col-sm    w-100 "
            href="#"
          >
            <img
              className="img-fluid btn-lg   img  col-md col-sm  "
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            />{" "}
            Signup Using Google
          </a>{" "}
          
          
        </div>
        {/* <button className="btn btn-outline-none text-white with ">
          Login with google
        </button> */}
        <Formik initialValues={loginForm} onSubmit={loginSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="name">
                
                <FormControl className="w-100 mb-5" variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Email
                </InputLabel>
                <Input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </FormControl>

              </div>
              <br />
              <FormControl className="w-100 mb-5" variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            
            type={showPass ? 'text' : 'password'}
            id="password"
                  onChange={handleChange}
                  value={values.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={e => setShowPass(!showPass)}
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
              
              <label className="text-info">Forgot password ?</label>
              <br></br>
              <label className="text">Dont have account yet?</label>
              <NavLink className="text-info" to="/main/Signup">
                Signup
              </NavLink>
              <br />
              <button className="submit my-4">Login</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
