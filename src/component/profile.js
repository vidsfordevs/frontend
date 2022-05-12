import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import app_config from "../config";
import toast from "react-hot-toast";

const Profile = () => {
  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const uploadAvatar = (e) => {
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(url + "/user/update/" + currentUser._id, {
          method: "PUT",
          body: JSON.stringify({ avatar: file.name }),
          headers: { "Content-Type": "application/json" },
        }).then((res) => {
          console.log(res.status);
          toast("Profile Image Updated!", {
            icon: "🤵",
          });
          res.json().then((data) => {
            sessionStorage.setItem("user", JSON.stringify(data));
            console.log(data);
            setCurrentUser(data);
          });
        });
      });
  };

  const getProfileImage = (image) => {
    return !image
      ? url + "/images/avatar_placeholder.webp"
      : url + "/uploads/" + image;
  };

  return (

    <div   className="height" > 
    <Container >
      <Grid container   spacing={10}>
        <Grid item md={4}>
          <Box
            component="div"
            
            sx={{
              height: "350px",
              background: "url(" + getProfileImage(currentUser.avatar) + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          
          <lable className="text-white text-center " >Change user picture</lable>
          <input
            type="file"
            onChange={uploadAvatar}
            className="form-control mt-4"
          />
        </Grid>
        <Grid item md={8}>
          <Typography className="text-white" variant="h4">Leon S Kennedy</Typography>
          <Typography  className="text-white" variant="p">leon@mail.com</Typography>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Profile;