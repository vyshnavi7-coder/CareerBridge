import { useState } from "react";
import "./JobSearch.css";

function JobSearch() {

  const [search, setSearch] = useState("");

  const jobs = [
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      location: "Hyderabad",
    },
    {
      company: "Google",
      role: "Frontend Developer",
      location: "Bangalore",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      location: "Chennai",
    },
    {
      company: "Infosys",
      role: "Java Developer",
      location: "Pune",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="job-search">

      <h2>Find Your Dream Job 🚀</h2>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="job-grid">

        {filteredJobs.map((job, index) => (
          <div className="job-card" key={index}>

            <h3>{job.company}</h3>

            <p>{job.role}</p>

            <span>{job.location}</span>

            <button>Apply Now</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default JobSearch;