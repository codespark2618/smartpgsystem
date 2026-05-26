import React from "react";

import {
  FaBell,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar-custom">

      <div className="navbar-left">

        <div>
          <h2>Admin Dashboard</h2>

          <p>Friday 15 May, 2026</p>
        </div>

      </div>

      <div className="navbar-right">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />

        {/* Icons */}
        <button className="icon-btn">
          <FaBell />
        </button>

        <button className="icon-btn">
          <FaCog />
        </button>

        {/* Profile */}
        <div className="profile-section">

          <div className="profile-circle">
            R
          </div>

          <div>
            <h4>Rajesh Kumar</h4>
            <p>PG Owner</p>
          </div>

          <FaChevronDown />

        </div>

      </div>

    </div>
  );
}

export default Navbar;
