function QuickActions() {
  const actions = [
    "Add Student",
    "Allocate Room",
    "Visitor Entry",
    "Add Complaint",
    "View Schedule",
  ];

  return (
    <div className="section-box quick-section">
      <h4>Quick Actions</h4>

      <div className="quick-grid">
        {actions.map((action, index) => (
          <button key={index} className="quick-btn">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;