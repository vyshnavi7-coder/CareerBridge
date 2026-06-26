import "./Hero.css";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">

        <span className="badge">
          🚀 Trusted by 50,000+ Students
        </span>

        <h1>
          Build Your Dream
          <br />
          Career With
          <span> CareerBridge</span>
        </h1>

        <p>
          One platform for internships, ATS resumes,
          career roadmaps, interview preparation and
          placement success.
        </p>

        <div className="hero-buttons">

          <button className="hero-btn">
            Get Started
          </button>

          <button className="outline-btn">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img src={heroImg} alt="Hero"/>

      </div>

    </section>
  );
}

export default Hero;