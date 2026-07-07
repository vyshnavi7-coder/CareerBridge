import "./Stats.css";
import {
  FaUsers,
  FaBriefcase,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats" id="stats">

      <h2>CareerBridge in Numbers</h2>

      <p className="stats-subtitle">
        Helping students achieve their dream careers through
        technology and guidance.
      </p>

      <div className="stats-container">

        <div className="stat-card">
          <FaUsers className="stat-icon"/>
          <h3>50K+</h3>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <FaBriefcase className="stat-icon"/>
          <h3>5000+</h3>
          <p>Internships</p>
        </div>

        <div className="stat-card">
          <FaBookOpen className="stat-icon"/>
          <h3>100+</h3>
          <p>Career Roadmaps</p>
        </div>

        <div className="stat-card">
          <FaAward className="stat-icon"/>
          <h3>95%</h3>
          <p>Placement Success</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;