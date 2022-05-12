import { Delete, Edit, ExpandMore, ExpandMoreSharp } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";

const ManageQuery = () => {
  const url = app_config.backend_url;
  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/query/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQueryList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    toast.promise(
      fetch(url + "/query/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            fetchData();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        }),
      {
        loading: "Deleting User...",
        success: <b>User Deleted!</b>,
        error: <b>Some Error Occured!</b>,
      }
    );
  };

  const updateUser = (id, data) => {
    fetch(url + "/user/update/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      fetchData();
      console.log(res.status);
    });
  };

  const displayData = () => {
    if (!loading) {
      return queryList.map(({ createAt, title, _id }, index) => (
        <Accordion key={_id}>
          <AccordionSummary expandIcon={<ExpandMoreSharp />}>
            <Typography fontWeight={600}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h5>id : {_id}</h5>

            <Fab
              onClick={(e) => deleteData(_id)}
              variant="extended"
              sx={{ background: "red", color: "white" }}
            >
              <Delete /> Delete
            </Fab>
          </AccordionDetails>
        </Accordion>
      ));
    }
  };

  return (
    <Container>
      <Card>
        <CardContent>{displayData()}</CardContent>
      </Card>
    </Container>
  );
};

export default ManageQuery;
