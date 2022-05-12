import { Avatar, Button, Chip, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { Box } from "@mui/system";
import TimeAgo from "javascript-time-ago";
import { ListAlt, QuestionAnswer } from "@mui/icons-material";

const QueryListing = () => {
  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  const [text, setText] = useState("");

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/query/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setQueryList(data);
      });
  };

  const filterQueries = () => {
    fetch(url + "/query/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const re = data.filter(({ title }) => {
          return title.toLowerCase().includes(text.toLowerCase());
        });

        setQueryList(re);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayQueries = () => {
    if (!loading) {
      return queryList.map(({ title, createAt, dev, _id, data, tags }) => (
        <div className="card mt-5" >
          <div className="card-body">
            <h3>{title}</h3>

            {tags.split(" ").map((tag) => (
              <Chip label={tag} variant="filled" />
            ))}
            <Divider className="mt-4 mb-4" />
            <div>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  alt={dev.username}
                  src={url + "/uploads/" + dev.avatar}
                />

                <Box sx={{ ml: 1 }}>
                  <p style={{ marginBottom: 0 }}>{dev.username}</p>
                  <Typography variant="caption">
                    {/* {new Date(createAt).toLocaleDateString()} */}
                    {timeAgo.format(new Date(createAt))}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  startIcon={<ListAlt />}
                  sx={{ mx: 1 }}
                  onClick={(e) => navigate("/main/viewquery/" + _id)}
                >
                  View Solutions
                </Button>
                <Button
                  color="success"
                  variant="outlined"
                  startIcon={<QuestionAnswer />}
                  sx={{ mx: 1 }}
                  onClick={(e) => navigate("/user/AddSolution/" + _id)}
                >
                  Provide Solution
                </Button>
              </Box>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div  className="query-bg">

      <header className="header bg-dark">
        <div className="container" style={{ padding: "10rem 0" }}>
          <h3 className="text-light text-center">Search Programming Queries</h3>
          <div className="input-group">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Search Tests Here"
            />
            <button className="btn btn-primary" onClick={filterQueries}>
              Search
            </button>
          </div>
        </div>
      </header>

      <div className="container mt-1 " style={{height:"auto"}}>
        {displayQueries()}
      </div>
    </div>
  );
};

export default QueryListing;
