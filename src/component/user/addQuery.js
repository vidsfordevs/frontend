import React, { useState } from "react";
import { Formik } from "formik";
import app_config from "../../config";
import MDEditor from "@uiw/react-md-editor";
import Swal from "sweetalert2";
import { Autocomplete, Chip, TextField } from "@mui/material";

const AddQuery = () => {
  const url = app_config.backend_url;

  const [query, setQuery] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const myStyle = {
    backgroundColor: "",
    color: "red",
    borderRadius: "5px",
  };

  const queryForm = {
    title: "",
    data: "",
    dev: currentUser._id,
    thumbnail :'',
    tags: "",
  };

  const querySubmit = (formdata) => {
    formdata.thumbnail = thumbnail;
    formdata.data = query;
    console.log(formdata);
    
    fetch(url + "/query/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Query Added",
        });
      });
  };

  return (
    <div className="container-md mt-5 query-listing " style={myStyle}>
      <div className="text-white  text-center  query-top">
        <h1> Add your Programming Query </h1>
      </div>
      <div className="row">
        <div className="col bg-light ">
          <div className="card" >
            <header className="mx-5">
              <h1 className="text-center text-white">AddQuery</h1>
            </header>
            
            <input   className="form-control" type="file" onChange={e => {
              const file = e.target.files[0];
              const fd = new FormData();
              setThumbnail(file.name);
              fd.append('myfile', file);

              fetch(url+'/util/uploadfile', {
                method : 'POST',
                body : fd
              }).then(res => {
                console.log(res.status);
              })
            }} />

            <Formik initialValues={queryForm} onSubmit={querySubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-light ">
                      Query
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Query Name"
                      id="title"
                      onChange={handleChange}
                      value={values.title}
                    />
                    <br></br>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-light ">
                      Query
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter language "
                      id="tags"
                      onChange={handleChange}
                      value={values.tags}
                    />
                    <br></br>
                  </div>
                  

                  <div className="mb-3 bg-light">
                    <MDEditor value={query} onChange={setQuery} />
                  </div>

                  <button className="btn btn-primary">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuery;
