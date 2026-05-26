function ComplaintSection() {
  return (
    <div className="section-box">
      <h4>Complaint Status</h4>

      <div className="complaint-item">
        <div>
          <h6>AC not working</h6>
          <p>Arjun M. - Room 204</p>
        </div>

        <span className="pending">Pending</span>
      </div>

      <div className="complaint-item">
        <div>
          <h6>Water leakage</h6>
          <p>Sneha R. - Room 108</p>
        </div>

        <span className="progress">In Progress</span>
      </div>

      <div className="complaint-item">
        <div>
          <h6>Broken window latch</h6>
          <p>Vikram S. - Room 305</p>
        </div>

        <span className="resolved">Resolved</span>
      </div>
    </div>
  );
}

export default ComplaintSection;