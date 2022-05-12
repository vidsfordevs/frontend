import {
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const AddSolution = () => {
  const { id } = useParams();
  const [queryData, setQueryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/query/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQueryData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayQuery = () => {
    if (!loading) {
      return (
        <Card>
          <CardContent>
            <Typography variant="h3">{queryData.title}</Typography>
            <Typography variant="h3">{queryData.tags}</Typography>
            {queryData.tags.split(" ").map((tag) => (
              <Chip label={tag} variant="filled" />
            ))}
            <MDEditor.Markdown className="mt-4" source={queryData.data} />
            <img src={url+'/uploads/'+queryData.thumbnail} className=" mt-4 mb-4 img-fluid" />

          </CardContent>
        </Card>
      );
    }
  };

  const submitSolution = () => {
    fetch(url + "/solution/add", {
      method: "POST",
      body: JSON.stringify({
        query: queryData._id,
        uploadedBy: currentUser._id,
        comment: comment,
        video: video,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Solution Added Successfully",
          });
        }
        return res.json();
      })
      .then(({ _id }) => {
        navigate("/main/viewsolution/" + _id);
        console.log(_id);
      });
  };

  const uploadVideo = (e) => {
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
        setVideo(file.name);
      });
  };

  return (
    <Container>
      {displayQuery()}
      <Card>
        <CardContent>
          <input
            type="file"
            className="mt-5 form-control"
            onChange={uploadVideo}
          />
          <TextField
            label="Add Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            multiline
            rows={4}
            className="mt-4 w-100"
          />

          <Button className="mt-5" variant="contained" onClick={submitSolution}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddSolution;
