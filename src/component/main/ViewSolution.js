import { AddComment, ThumbDownOffAlt, ThumbUpAlt } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const ViewSolution = () => {
  const { id } = useParams();
  const [solutionData, setSolutionData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/solution/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSolutionData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displaySolution = () => {
    if (!loading) {
      return (
        <Card>
          <CardContent>
            <Typography variant="h3">{solutionData.query.title}</Typography>
            {solutionData.query.tags.split(" ").map((tag) => (
              <Chip label={tag} variant="filled" />
            ))}
            <MDEditor.Markdown
              className="mt-4"
              source={solutionData.query.data}
            />
            <Typography sx={{ mt: 5, mb: 3 }} variant="h4">
              {solutionData.comment}
            </Typography>
            <video
              src={url + "/uploads/" + solutionData.video}
              className="w-100"
              controls
            ></video>
          </CardContent>
        </Card>
      );
    }
  };

  const submitComment = () => {};

  return (
    <Container sx={{ mt: 10 }}>
      {displaySolution()}
      <Card>
        <CardContent>
          <video></video>

          <TextField
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            multiline
            rows={4}
            label="Add You Comment"
            className="mt-4 w-100"
          />

          <Button className="mt-5" variant="contained" onClick={submitComment}>
            Submit
          </Button>

          <Divider sx={{ mt: 4, mb: 4 }} />
          <Typography variant="subtitle1"></Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ViewSolution;
