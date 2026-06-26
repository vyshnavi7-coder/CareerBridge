import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <h2>CareerBridge</h2>

      <p>
        Empowering students with internships, learning roadmaps,
        resume building and placement preparation.
      </p>

      <div className="social-icons">

        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaEnvelope /></a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 CareerBridge. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;