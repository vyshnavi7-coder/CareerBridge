import "./Internships.css";
import { FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

function Internships() {
  return (
    <section className="internships" id="internships">

      <h2>Latest Internship Opportunities</h2>

      <p className="internship-subtitle">
        Explore internships from leading technology companies.
      </p>

      <div className="internship-grid">

        <div className="internship-card">
          <h3>Microsoft</h3>

          <h4>Software Engineer Intern</h4>

          <p><FaMapMarkerAlt /> Hyderabad</p>

          <p><FaClock /> 6 Months</p>

          <button>
            Apply Now <FaArrowRight />
          </button>
        </div>

        <div className="internship-card">
          <h3>Amazon</h3>

          <h4>SDE Intern</h4>

          <p><FaMapMarkerAlt /> Bangalore</p>

          <p><FaClock /> 2 Months</p>

          <button>
            Apply Now <FaArrowRight />
          </button>
        </div>

        <div className="internship-card">
          <h3>Wipro</h3>

          <h4>Frontend Developer Intern</h4>

          <p><FaMapMarkerAlt /> Remote</p>

          <p><FaClock /> 3 Months</p>

          <button>
            Apply Now <FaArrowRight />
          </button>
        </div>

      </div>

    </section>
  );
}

export default Internships;