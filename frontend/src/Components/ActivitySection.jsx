function ActivitySection() {
  const activities = [
    "Arjun Mehta paid ₹8,500 for Room 204",
    "New complaint submitted: Water leakage in Room 108",
    "Visitor check-in completed",
    "Room 112 marked as cleaned",
    "Complaint #42 resolved by Admin",
  ];

  return (
    <div className="section-box">
      <h4>Recent Activities</h4>

      {activities.map((item, index) => (
        <div className="activity-item" key={index}>
          <div className="dot"></div>

          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivitySection;