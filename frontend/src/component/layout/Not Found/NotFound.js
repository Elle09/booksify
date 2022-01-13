import React from "react";
/* import ErrorIcon from "@material-ui/icons/Error"; */
import NotFoundImage from "../../../images/catSee.png";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      {/* <ErrorIcon /> */}
      <img src={NotFoundImage} />
      <Typography>Page Not Found!</Typography>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
