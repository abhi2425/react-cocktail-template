import React from "react";
import "./Error.css";
import BackHome from "../../Components/Button/Button";
const Error = () => {
  return (
    <section className="errorPage">
      <div className="errorContainer">
        <h1 className="errorMessage">Oops.. Landed on Wrong Page!!</h1>
        <BackHome url="/" value="Back Home" />
      </div>
    </section>
  );
};

export default Error;
