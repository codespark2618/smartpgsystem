
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div style={{ display: "flex" }}>

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          // marginLeft: "220px",
          background: "#f3f4f6",
          minHeight: "100vh",
        }}
      >

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default MainLayout;