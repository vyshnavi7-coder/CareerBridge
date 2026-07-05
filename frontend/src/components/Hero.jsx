import "./Hero.css";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">

        <div className="badge">
          🚀 Your Career Starts Here
        </div>

        <h1>
          Build Your Dream <span>Career</span>
          <br />
          One Step at a Time.
        </h1>

        <p>
          CareerBridge helps students discover internships,
          build ATS-friendly resumes, follow personalized
          roadmaps, and prepare for placements with confidence.
        </p>

        <div className="hero-buttons">
          <a href="#features" className="hero-btn">
            Get Started
          </a>

          <a href="#stats" className="outline-btn">
            Explore
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>50K+</h3>
            <span>Students</span>
          </div>

          <div>
            <h3>500+</h3>
            <span>Internships</span>
          </div>

          <div>
            <h3>95%</h3>
            <span>ATS Ready</span>
          </div>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroImg} alt="CareerBridge" />
      </div>
    </section>
  );
}

export default Hero;