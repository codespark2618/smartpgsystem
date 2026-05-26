import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import OwnerDashboard from "./Pages/OwnerDashboard";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Sidebar Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<OwnerDashboard />} />

          <Route path="/admin" element={<Dashboard />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;