import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import "./NavBar.scss";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null); // Ref for navbar container

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Close navbar if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when the component is mounted
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when component unmounts or navbar is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isLoginOrRegister =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <Navbar className="navbar" ref={navbarRef}>
      <NavbarBrand className="logo">
        Dr.Healthiness
        <img
          alt="logo"
          src="/Logo.png"
          style={{ height: 30, width: 40, paddingLeft: 10, paddingTop: 0 }}
        />
      </NavbarBrand>
      <button className="burger-menu" onClick={toggleNavbar}>
        {/* Conditional Rendering of Icons */}
        {!isOpen ? (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        ) : (
          <span className="close-icon">&times;</span> // Cross icon when open
        )}
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink exact to="/" activeClassName="active" onClick={closeNavbar}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active" onClick={closeNavbar}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/query" activeClassName="active" onClick={closeNavbar}>
            Q&A
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={closeNavbar}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeClassName="active" onClick={closeNavbar}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" onClick={closeNavbar}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={isLoginOrRegister ? "active" : ""}
            onClick={closeNavbar}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
}

export default NavBar;
