import React from 'react'
import {Link} from "react-router-dom"


const NotFound = () => {
  return (
    <div className="container mt-5">
      <Link to="/home">
      <img
        style={{ width: "100%" }}
        src="https://i.pinimg.com/originals/90/fb/43/90fb4379e62ef4104a0bd58bae82fe35.gif"
      />
      </Link>
    </div>
  );
};

export default NotFound;






