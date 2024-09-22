import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss"; // Ensure you have SCSS for styles
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">
          MEDPRO
          <img
            alt="logo"
            src="/Logo.png"
            style={{
              height: 30,
              width: 40,
              paddingLeft: 10,
              paddingTop: 0,
            }}
          ></img>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/query">Q&A</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* <Navbar className="my-2" color="white">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/Logo.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </NavbarBrand>
        <h1 className="logo">MEDPRO</h1>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
        </Nav>
      </Navbar> */}
      {/* <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
  </Navbar>
  <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Reactstrap
    </NavbarBrand>
  </Navbar> */}
    </>
  );
}

export default NavBar;
