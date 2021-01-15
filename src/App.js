import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SingleCocktail from "./Pages/SingleCocktail/SingleCocktail";
import Error from "./Pages/Error/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
