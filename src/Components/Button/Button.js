import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
const Button = ({ url, value }) => {
  return (
    <div className="linkBtn">
      <Link to={url}>{value}</Link>
    </div>
  );
};

export default Button;
