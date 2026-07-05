import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import {
  FaUserCircle,
  FaFileAlt,
  FaBriefcase,
  FaCode,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <div className="welcome-card">

        <h1>
          Welcome Back, {user?.name || "User"} 👋
        </h1>

        <p>
          Continue your career journey and achieve your goals.
        </p>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <FaFileAlt />
          <h3>Resume Score</h3>
          <h2>91%</h2>
        </div>

        <div className="dashboard-card">
          <FaBriefcase />
          <h3>Applications</h3>
          <h2>12</h2>
        </div>

        <div className="dashboard-card">
          <FaCode />
          <h3>Coding Streak</h3>
          <h2>15 Days</h2>
        </div>

        <div className="dashboard-card">
          <FaChartLine />
          <h3>Progress</h3>
          <h2>72%</h2>
        </div>

      </div>

      <div className="dashboard-sections">

        <div className="tasks">

          <h2>Today's Goals</h2>

          <ul>
            <li><FaCheckCircle /> Solve 2 LeetCode Problems</li>
            <li><FaCheckCircle /> Update Resume</li>
            <li><FaCheckCircle /> Apply for Internship</li>
            <li><FaCheckCircle /> Complete React Project</li>
          </ul>

        </div>

        <div className="activity">

          <h2>Recent Activity</h2>

          <ul>
            <li>✔ Resume Updated</li>
            <li>✔ Applied Internship</li>
            <li>✔ Completed DSA</li>
          </ul>

        </div>

      </div>

      <div className="profile-card">

        <FaUserCircle className="profile-icon"/>

        <h2>{user?.name}</h2>

        <p>{user?.email}</p>

      </div>

    </div>
  );
}

export default Dashboard;