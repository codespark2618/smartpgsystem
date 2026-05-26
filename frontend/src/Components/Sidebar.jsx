import {
  FaTachometerAlt,
  FaUsers,
  FaDoorOpen,
  FaMoneyBill,
  FaExclamationTriangle,
  FaUserFriends,
  FaUtensils,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "../styles/sidebar.css";

function Sidebar() {

  const location = useLocation();

  const menus = [
    {
      name: "Owner Dashboard",
      icon: <FaTachometerAlt />,
      path: "/",
    },
    {
      name: "Admin Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin",
    },
    {
      name: "Students",
      icon: <FaUsers />,
      path: "/students",
    },
    {
      name: "Rooms",
      icon: <FaDoorOpen />,
      path: "/rooms",
    },
    {
      name: "Rent & Payments",
      icon: <FaMoneyBill />,
      path: "/payments",
    },
    {
      name: "Complaints",
      icon: <FaExclamationTriangle />,
      path: "/complaints",
    },
    {
      name: "Visitors",
      icon: <FaUserFriends />,
      path: "/visitors",
    },
    {
      name: "Food & Mess",
      icon: <FaUtensils />,
      path: "/food",
    },
    {
      name: "Profile & Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <div className="sidebar">

      <div>

        {/* Logo */}
        <div className="logo-section">

          <div className="logo-box">
            🏢
          </div>

          <div>
            <h3>SmartPG</h3>
            <p>Management System</p>
          </div>

        </div>

        {/* Owner Button */}
        <button className="owner-btn">
          Owner
        </button>

        {/* Menu */}
        <div className="menu-list">

          {menus.map((menu, index) => (

            <Link
              key={index}
              to={menu.path}
              className={`menu-item ${
                location.pathname === menu.path
                  ? "active-menu"
                  : ""
              }`}
            >

              {menu.icon}

              <span>{menu.name}</span>

            </Link>

          ))}

        </div>

      </div>

      {/* Logout */}
      <button className="logout-btn">

        <FaSignOutAlt />

        Logout

      </button>

    </div>
  );
}

export default Sidebar;
