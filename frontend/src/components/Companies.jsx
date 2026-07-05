import "./Companies.css";
import {
  FaMicrosoft,
  FaGoogle,
  FaAmazon,
} from "react-icons/fa";
import { SiWipro, SiInfosys, SiTcs } from "react-icons/si";

function Companies() {
  return (
    <section className="companies">

      <h2>Trusted Career Paths</h2>

      <p>
        Prepare for opportunities at the world's leading technology companies.
      </p>

      <div className="company-grid">

        <div className="company-card">
          <FaMicrosoft />
          <h3>Microsoft</h3>
        </div>

        <div className="company-card">
          <FaGoogle />
          <h3>Google</h3>
        </div>

        <div className="company-card">
          <FaAmazon />
          <h3>Amazon</h3>
        </div>

        <div className="company-card">
          <SiWipro />
          <h3>Wipro</h3>
        </div>

        <div className="company-card">
          <SiInfosys />
          <h3>Infosys</h3>
        </div>

        <div className="company-card">
          <SiTcs />
          <h3>TCS</h3>
        </div>

      </div>

    </section>
  );
}

export default Companies;