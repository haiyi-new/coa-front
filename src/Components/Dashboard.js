import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import FormListingPage from "./FormListingPage";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">Welcome Mr..</div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/profile" className="menu-item">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/form" className="menu-item">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="menu-item">
              Document Submission Request
            </Link>
          </li>
          <li>
            <Link to="/profile" className="menu-item">
              Progress
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to Officer Dashboard</h1>
        <div className="form-listing">
          <FormListingPage />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
