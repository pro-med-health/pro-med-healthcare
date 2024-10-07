import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import "./NavBar.scss";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="navbar">
      <NavbarBrand className="logo">
        Dr.Healthiness
        <img
          alt="logo"
          src="/Logo.png"
          style={{ height: 30, width: 40, paddingLeft: 10, paddingTop: 0 }}
        />
      </NavbarBrand>
      <button className="burger-menu" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/query" activeClassName="active">
            Q&A
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
}

export default NavBar;
