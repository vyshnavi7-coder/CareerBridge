import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

import vyshnavi from "../assets/images/vyshnavi.png";
import viswa from "../assets/images/viswa.png";
import poojith from "../assets/images/poojith.png";

function Testimonials() {
  const testimonials = [
    {
      image: vyshnavi,
      name: "Vyshnavi Chinthala",
      role: "B.Tech CSE Student",
      review:
        "CareerBridge helped me organize my placement preparation, improve my resume, and confidently apply for internships.",
    },
    {
      image: viswa,
      name: "Viswa Chinthala",
      role: "Full Stack Developer",
      review:
        "The learning roadmap and internship tracker made my preparation much more structured and effective.",
    },
    {
      image: poojith,
      name: "Poojith Polisetti",
      role: "Software Engineer Aspirant",
      review:
        "A simple and powerful platform that brings resumes, internships, and career planning together.",
    },
  ];

  return (
    <section className="testimonials" id="reviews">
      <h2>What Our Students Say</h2>

      <p className="testimonial-subtitle">
        Hear from students who have accelerated their careers using
        CareerBridge.
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-image"
            />

            <h3>{item.name}</h3>

            <h4 className="role">{item.role}</h4>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;