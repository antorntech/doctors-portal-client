import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h1 className="text-3xl text-sky-400 font-bold lg:px-12">
          Welcome To Your Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment</Link>
            <Link to="/dashboard/myhistory">My History</Link>
            <Link to="/dashboard/review">Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
