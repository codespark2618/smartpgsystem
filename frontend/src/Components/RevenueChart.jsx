import React from "react";

const RevenueChart = ({ revenueData }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body">

        <div className="mb-4">
          <h4 className="fw-bold">
            Monthly Revenue Overview
          </h4>

          <small className="text-success">
            vs last 6 months
          </small>
        </div>

        <div
          className="d-flex align-items-end justify-content-between"
          style={{ height: "280px" }}
        >
          {revenueData.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center"
            >
              <div
                className={`rounded-3 ${
                  index === revenueData.length - 1
                    ? "bg-success"
                    : "bg-success bg-opacity-25"
                }`}
                style={{
                  width: "55px",
                  height: `${item.value * 2}px`,
                }}
              ></div>

              <small className="mt-2 fw-semibold text-muted">
                {item.month}
              </small>
            </div>
          ))}
        </div>

        <div className="border rounded-4 p-3 mt-4">
          <div className="row align-items-center">

            <div className="col-md-6">
              <small className="text-muted">
                April 2026 Revenue
              </small>

              <h2 className="fw-bold text-success">
                ₹3.8L
              </h2>
            </div>

            <div className="col-md-6 text-md-end">
              <h5 className="text-success fw-bold">
                ↑ 18.7%
              </h5>

              <small className="text-muted">
                vs March 2026
              </small>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RevenueChart;