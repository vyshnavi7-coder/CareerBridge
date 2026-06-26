import "./Features.css";
import {
  FaFileAlt,
  FaRobot,
  FaLaptopCode,
  FaBriefcase,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">

      <h2>Everything You Need To Build Your Career</h2>

      <p className="subtitle">
        CareerBridge combines learning, resume building, internships,
        interview preparation and career tracking in one platform.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <FaFileAlt className="feature-icon"/>
          <h3>ATS Resume Builder</h3>
          <p>Create professional resumes accepted by top companies.</p>
        </div>

        <div className="feature-card">
          <FaRobot className="feature-icon"/>
          <h3>AI Resume Review</h3>
          <p>Get instant suggestions to improve your resume.</p>
        </div>

        <div className="feature-card">
          <FaLaptopCode className="feature-icon"/>
          <h3>Learning Roadmaps</h3>
          <p>Structured roadmaps for Web, AI, Cloud, DSA and more.</p>
        </div>

        <div className="feature-card">
          <FaBriefcase className="feature-icon"/>
          <h3>Internship Portal</h3>
          <p>Find internships from startups and top tech companies.</p>
        </div>

        <div className="feature-card">
          <FaChartLine className="feature-icon"/>
          <h3>Progress Dashboard</h3>
          <p>Track coding, learning and interview preparation.</p>
        </div>

        <div className="feature-card">
          <FaUserGraduate className="feature-icon"/>
          <h3>Placement Preparation</h3>
          <p>Practice aptitude, coding and interview questions.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;