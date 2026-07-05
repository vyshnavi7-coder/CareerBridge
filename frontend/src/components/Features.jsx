import "./Features.css";
import {
  FaFileAlt,
  FaLaptopCode,
  FaRoad,
  FaUserGraduate,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">

      <h2>Everything You Need To Build Your Career</h2>

      <p className="feature-subtitle">
        One platform for learning, internships, resume building,
        and placement preparation.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <FaFileAlt className="feature-icon" />
          <h3>ATS Resume Builder</h3>
          <p>
            Create professional resumes that are optimized
            for Applicant Tracking Systems.
          </p>
        </div>

        <div className="feature-card">
          <FaLaptopCode className="feature-icon" />
          <h3>Internship Portal</h3>
          <p>
            Discover internships from top companies and
            apply directly through CareerBridge.
          </p>
        </div>

        <div className="feature-card">
          <FaRoad className="feature-icon" />
          <h3>Learning Roadmaps</h3>
          <p>
            Follow structured roadmaps for Web Development,
            AI/ML, Cloud, Cyber Security and more.
          </p>
        </div>

        <div className="feature-card">
          <FaUserGraduate className="feature-icon" />
          <h3>Placement Preparation</h3>
          <p>
            Practice aptitude, coding questions,
            interview preparation and mock tests.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;