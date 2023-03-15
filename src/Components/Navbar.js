import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-content mt-3">
      <div className="container">
        <h2 className="mb-5">Tabs Pill</h2>
        <div className="tabs mb-5">
          <NavLink
            to="/"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Profile
          </NavLink>
          <NavLink
            to="/messages"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Messages
          </NavLink>
          <NavLink
            to="/settings"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
