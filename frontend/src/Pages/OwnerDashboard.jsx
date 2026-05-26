import React from "react";

import StatsCard from "../Components/OwnerCard";
import RevenueChart from "../Components/RevenueChart";
import RecentActivity from "../Components/RecentActivity";


const OwnerDashboard = () => {

  const statsData = [
    {
      title: "Total Students",
      value: "42",
      sub: "3 joined this month",
      icon: "👨‍🎓",
      badge: "+3",
      color: "success",
    },
    {
      title: "Occupied Rooms",
      value: "38",
      sub: "of 50 total rooms",
      icon: "🚪",
      badge: "+2",
      color: "success",
    },
    {
      title: "Vacant Rooms",
      value: "12",
      sub: "8 available now",
      icon: "🏢",
      badge: "-2",
      color: "danger",
    },
    {
      title: "Monthly Revenue",
      value: "₹3.8L",
      sub: "vs last month",
      icon: "₹",
      badge: "+12%",
      color: "success",
    },
    {
      title: "Complaints",
      value: "7",
      sub: "4 pending",
      icon: "⚠️",
      badge: "-3",
      color: "danger",
    },
    {
      title: "Visitors Today",
      value: "14",
      sub: "3 pending exit",
      icon: "👤",
      badge: "",
      color: "success",
    },
  ];

  const revenueData = [
    { month: "Nov '25", value: 60 },
    { month: "Dec '25", value: 75 },
    { month: "Jan '26", value: 68 },
    { month: "Feb '26", value: 82 },
    { month: "Mar '26", value: 78 },
    { month: "Apr '26", value: 90 },
  ];

  const activityData = [
    {
      text: "Arjun Mehta paid ₹8,500 for Room 204",
      time: "2 min ago",
      color: "success",
    },
    {
      text: "New complaint submitted: Water leakage in Room 108",
      time: "18 min ago",
      color: "warning",
    },
    {
      text: "Visitor check-in: Priya for Student Raj (Room 305)",
      time: "45 min ago",
      color: "success",
    },
    {
      text: "Room 112 marked as cleaned",
      time: "1 hr ago",
      color: "success",
    },
    {
      text: "Sakshi Singh registered as new student",
      time: "2 hr ago",
      color: "success",
    },
    {
      text: "Complaint #42 resolved by Admin",
      time: "3 hr ago",
      color: "success",
    },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">

      {/* Top Cards */}
      <div className="row g-4 mb-4">
        {statsData.map((item, index) => (
          <StatsCard key={index} item={item} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="row g-4">

        <div className="col-lg-6">
          <RevenueChart revenueData={revenueData} />
        </div>

        <div className="col-lg-6">
          <RecentActivity activityData={activityData} />
        </div>

      </div>

    </div>
  );
};

export default OwnerDashboard;
