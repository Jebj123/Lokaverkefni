import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Link to="/" className="left">
          MunchiesDB
        </Link>
        <ul className="center">
          <li className="navItem">Um</li>
          <li className="navItem">Hafa Samband</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
