import "./Footer.css";
import {
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-about">
          <div className="footer-logo">
            <FaGraduationCap />
            <h2>CareerBridge</h2>
          </div>

          <p>
            Empowering students with internships, career roadmaps,
            resume building and placement preparation.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#stats">Stats</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="footer-contact">
          <h3>Connect</h3>

          <a href="#">
            <FaGithub /> GitHub
          </a>

          <a href="#">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:careerbridge@gmail.com">
            <FaEnvelope /> careerbridge@gmail.com
          </a>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 CareerBridge. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;