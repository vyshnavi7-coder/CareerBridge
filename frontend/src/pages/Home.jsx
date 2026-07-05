import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Features from "../components/Features";
import Internships from "../components/Internships";
import JobSearch from "../components/JobSearch";
import ResumeScore from "../components/ResumeScore";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Internships />
      <ResumeScore />
      <JobSearch />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;