import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FeaturesProvider } from "./Context/Context"
ReactDOM.render(
  <React.StrictMode>
    <FeaturesProvider>
      <App />
    </FeaturesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
