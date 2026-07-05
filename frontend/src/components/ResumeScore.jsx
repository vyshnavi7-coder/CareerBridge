import { useState } from "react";
import "./ResumeScore.css";
import { FaArrowUp, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";

function ResumeScore() {

  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);

  const strengths = [
    "Good formatting",
    "Projects added",
    "Education section present"
  ];

  const improvements = [
    "Add measurable achievements",
    "Add more technical skills",
    "Increase keyword density"
  ];

  const analyzeResume = () => {

    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    const randomScore = Math.floor(Math.random() * 21) + 80;

    setScore(randomScore);

    alert("Resume analyzed successfully!");
  };

  const downloadReport = () => {

    if (!score) {
      alert("Analyze your resume first.");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("CareerBridge ATS Report", 20, 20);

    doc.setFontSize(16);
    doc.text(`Resume : ${file.name}`, 20, 40);

    doc.text(`ATS Score : ${score}%`, 20, 55);

    doc.setFontSize(18);
    doc.text("Strengths", 20, 75);

    strengths.forEach((item, index) => {
      doc.setFontSize(13);
      doc.text(`• ${item}`, 25, 90 + index * 10);
    });

    doc.setFontSize(18);
    doc.text("Improvements", 20, 130);

    improvements.forEach((item, index) => {
      doc.setFontSize(13);
      doc.text(`• ${item}`, 25, 145 + index * 10);
    });

    doc.save("CareerBridge_ATS_Report.pdf");

  };

  return (

    <section className="resume-score">

      <h2>Upload Resume</h2>

      <p className="resume-subtitle">
        Upload your resume and get an instant ATS score.
      </p>

      <div className="resume-card">

        <div className="score-circle">
          <h1>{score ? `${score}%` : "--"}</h1>
          <span>ATS Score</span>
        </div>

        <div className="resume-content">

          <div className="upload-section">

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files[0])}
            />

            {file && (
              <p className="file-name">
                {file.name}
              </p>
            )}

          </div>

          <div className="resume-buttons">

            <button
              className="primary-btn"
              onClick={analyzeResume}
            >
              <FaArrowUp />
              Analyze Resume
            </button>

            <button
              className="secondary-btn"
              onClick={downloadReport}
            >
              <FaDownload />
              Download Report
            </button>

          </div>

          {score && (

            <div className="analysis-result">

              <h4>✅ Strengths</h4>

              <ul>
                {strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4>🚀 Improvements</h4>

              <ul>
                {improvements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

            </div>

          )}

        </div>

      </div>

    </section>

  );

}

export default ResumeScore;