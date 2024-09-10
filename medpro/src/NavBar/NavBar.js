import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss"; // Ensure you have SCSS for styles

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MEDPRO</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
