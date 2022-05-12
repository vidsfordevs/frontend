import { ListAlt, QuestionAnswer } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";

const ViewQuery = () => {
  const { id } = useParams();
  const [queryData, setQueryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();
  const [solutions, setSolutions] = useState([]);
  const [solutionsLoading, setSolutionsLoading] = useState(true);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/solution/getbyquery/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSolutions(data);
        setSolutionsLoading(false);
      });

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
    if (!loading)
      return (
        <Card className="query-card mt-5">
          <CardContent>
            <h3>{queryData.title}</h3>

            {queryData.tags.split(" ").map((tag) => (
              <Chip label={tag} variant="filled" />
            ))}
            <MDEditor.Markdown className="mt-4" source={queryData.data} />
            <img src={url+'/uploads/'+queryData.thumbnail} className=" mt-4 mb-4 img-fluid" />
            <Divider className="mt-4 mb-4" />
            <Box sx={{ display: "flex" }}>
              <Avatar
                alt={queryData.dev.username}
                src={url + "/uploads/" + queryData.dev.avatar}
              />

              <Box sx={{ ml: 1 }}>
                <p style={{ marginBottom: 0 }}>{queryData.dev.username}</p>
                <Typography variant="caption">
                  {/* {new Date(createAt).toLocaleDateString()} */}
                  {timeAgo.format(new Date(queryData.createAt))}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      );
    }

  const displaySolutions = () => {
    if (!solutionsLoading) {
      return solutions.map((sol) => (
        <Card className="mt-4">
          <CardContent>
            <Typography variant="h4">{sol.comment}</Typography>
            <Button onClick={(e) => navigate("/main/viewsolution/" + sol._id)}>
              View Solution
            </Button>
            <Box component="div" sx={{ display: "flex" }}>
              <Avatar
                alt={sol.uploadedBy.username}
                src={url + "/uploads/" + sol.uploadedBy.avatar}
              />
              <Box sx={{ ml: 1 }}>
                <p style={{ marginBottom: 0 }}>{sol.uploadedBy.username}</p>
                <Typography variant="caption">
                  {timeAgo.format(new Date(sol.uploadedBy.createAt))}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ));
    }
    }

  return (
    <div className="view-query">
      <Container sx={{ mt: 7 }}>
        <h1 className="  text-center text text-white " style={{paddingTop:"8%"}}   >Solution Provided for this Query</h1>
        {displayQuery()}
        <hr />
        {displaySolutions()}
      </Container>
    </div>
  );
};

export default ViewQuery;
