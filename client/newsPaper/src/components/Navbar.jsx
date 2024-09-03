import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          News Paper
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/contact" className="navbar-link">
          Feedback
        </Link>
        <Link to="/signup" className="navbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;