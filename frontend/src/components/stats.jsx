import "./Stats.css";
import { FaUsers, FaBriefcase, FaFileAlt, FaStar } from "react-icons/fa";

function Stats() {
  return (
    <section className="stats" id="stats">

      <h2>Our Impact</h2>

      <p className="stats-subtitle">
        Thousands of students trust CareerBridge to achieve their career goals.
      </p>

      <div className="stats-grid">

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>50,000+</h3>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <h3>2,500+</h3>
          <p>Internships</p>
        </div>

        <div className="stat-card">
          <FaFileAlt className="stat-icon" />
          <h3>15,000+</h3>
          <p>Resumes Built</p>
        </div>

        <div className="stat-card">
          <FaStar className="stat-icon" />
          <h3>4.9 / 5</h3>
          <p>Student Rating</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;