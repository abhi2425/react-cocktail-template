import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navBarPosition">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"
            alt="Cocktail"
            className="logo"
          />
        </Link>

        <ul className="navLink">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
