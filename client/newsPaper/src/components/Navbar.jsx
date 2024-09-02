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
        {/* <Link to='/books' className='navbar-link'>Books</Link> */}
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
        {/* <Link to="/service" className="navbar-link">
          Service
        </Link> */}

        {/* <Link to="/addbook" className="navbar-link">
          Add Book
        </Link> */}
        {/* <Link to="/books" className="navbar-link">
          Books
        </Link> */}
        {/* <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link> */}

        <Link to="/login" className="navbar-link">
          Login
        </Link>
        {/* <Link to="/logout" className="navbar-link">
          Logout
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
