import React from "react";
import "./MainNavigation.css";
import Mainheader from "./Mainheader";
import { Link } from "react-router-dom";

const MainNavigation = props => {
  return (
    <Mainheader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>

      <h1 className="main-navigation__title">
        <Link to={"/"}>Your Place</Link> 
      </h1>
      <nav>
...
      </nav>
    </Mainheader>
  );
};

export default MainNavigation;
