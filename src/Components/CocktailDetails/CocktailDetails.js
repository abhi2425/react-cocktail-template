import React from "react";
import "./CocktailDetails.css";
const CocktailDetails = ({ details }) => {
  return (
    <p className="data">
      <span>{details.key + ":"}</span>
      {"  " + details.value}
    </p>
  );
};

export default CocktailDetails;
