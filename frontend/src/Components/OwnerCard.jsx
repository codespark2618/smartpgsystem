import React from "react";

const OwnerCard = ({ item }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="card border-0 shadow-sm rounded-4 h-100">
        <div className="card-body">

          <div className="d-flex justify-content-between mb-3">
            <div className="bg-success bg-opacity-10 rounded-3 p-2">
              {item.icon}
            </div>

            {item.badge && (
              <span
                className={`badge ${
                  item.color === "success"
                    ? "bg-success-subtle text-success"
                    : "bg-danger-subtle text-danger"
                }`}
              >
                {item.badge}
              </span>
            )}
          </div>

          <h6 className="text-muted fw-semibold">
            {item.title}
          </h6>

          <h2 className="fw-bold">
            {item.value}
          </h2>

          <small className="text-success fw-semibold">
            {item.sub}
          </small>

        </div>
      </div>
    </div>
  );
};

export default OwnerCard;