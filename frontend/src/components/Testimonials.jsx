import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <h2>What Our Students Say</h2>

      <p className="testimonial-subtitle">
        Thousands of students have accelerated their careers with CareerBridge.
      </p>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Student"
          />

          <h3>Rahul Sharma</h3>

          <div className="stars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>

          <p>
            CareerBridge helped me build an ATS-friendly resume and land my
            first internship within just one month.
          </p>

        </div>

        <div className="testimonial-card">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Student"
          />

          <h3>Priya Patel</h3>

          <div className="stars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>

          <p>
            The learning roadmap was amazing. It gave me a clear direction
            to prepare for placements.
          </p>

        </div>

        <div className="testimonial-card">

          <img
            src="https://i.pravatar.cc/150?img=21"
            alt="Student"
          />

          <h3>Arjun Reddy</h3>

          <div className="stars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>

          <p>
            One platform for internships, resumes and interview preparation.
            Highly recommended for every student.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;