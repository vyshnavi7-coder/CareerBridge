import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

import vyshnavi from "../assets/images/vyshnavi.png";
import viswa from "../assets/images/viswa.png";
import poojith from "../assets/images/poojith.png";

function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <h2>What Our Students Say</h2>

      <p className="testimonial-subtitle">
        Hear from students who have accelerated their careers using
        CareerBridge.
      </p>

      <div className="testimonial-grid">

        {/* Card 1 */}
        <div className="testimonial-card">
          <img src={vyshnavi} alt="Vyshnavi Chinthala" />

          <h3>Vyshnavi Chinthala</h3>

          <h4 className="role">B.Tech CSE Student</h4>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            CareerBridge helped me organize my placement preparation,
            improve my resume, and confidently apply for internships.
          </p>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <img src={viswa} alt="Viswa Chinthala" />

          <h3>Viswa Chinthala</h3>

          <h4 className="role">Full Stack Developer</h4>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            The learning roadmap and internship tracker made my
            preparation much more structured and effective.
          </p>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <img src={poojith} alt="Poojith Polisetti" />

          <h3>Poojith Polisetti</h3>

          <h4 className="role">Software Engineer Aspirant</h4>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            A simple and powerful platform that brings resumes,
            internships and career planning together.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;