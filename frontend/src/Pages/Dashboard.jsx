// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import QuickActions from "../components/QuickActions";
import ComplaintSection from "../components/ComplaintSection";
import ActivitySection from "../components/ActivitySection";

import {
  FaUsers,
  FaDoorOpen,
  FaExclamationCircle,
  FaUserPlus,
} from "react-icons/fa";

import "../styles/dashboard.css";

function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "42",
      sub: "3 new this month",
      icon: <FaUsers />,
    },
    {
      title: "Occupied Rooms",
      value: "38",
      sub: "of 50 total rooms",
      icon: <FaDoorOpen />,
    },
    {
      title: "Vacant Rooms",
      value: "12",
      sub: "8 available now",
      icon: <FaDoorOpen />,
    },
    {
      title: "Open Complaints",
      value: "7",
      sub: "3 in progress",
      icon: <FaExclamationCircle />,
    },
    {
      title: "Visitors Today",
      value: "14",
      sub: "3 pending exit",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className="dashboard-layout">
      {/* <Sidebar /> */}

      <div className="main-content">
        {/* <Navbar /> */}

        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-wrapper">
            {stats.map((item, index) => (
              <StatsCard item={item} key={index} />
            ))}
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* Bottom Sections */}
          <div className="bottom-wrapper">
            <ComplaintSection />
            <ActivitySection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;