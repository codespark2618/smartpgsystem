import React from "react";

const RecentActivity = ({ activityData }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body">

        <div className="mb-4">
          <h4 className="fw-bold">
            Recent Activity
          </h4>

          <small className="text-success">
            Latest events across the hostel
          </small>
        </div>

        {activityData.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-start border-bottom py-3"
          >
            <div className="d-flex gap-3">

              <div
                className={`rounded-circle mt-2 ${
                  item.color === "warning"
                    ? "bg-warning"
                    : "bg-success"
                }`}
                style={{
                  width: "10px",
                  height: "10px",
                }}
              ></div>

              <p className="mb-0 fw-medium">
                {item.text}
              </p>

            </div>

            <small className="text-success fw-semibold">
              {item.time}
            </small>
          </div>
        ))}

        <button className="btn btn-success w-100 mt-4 rounded-3">
          View All Activities →
        </button>

      </div>
    </div>
  );
};

export default RecentActivity;