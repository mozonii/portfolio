import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section id="experience">
      <div className="skill-title">
        <h5 className="skill-title">My Skills</h5>
      </div>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>CSS & Tailwind</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>React & Redux </h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>VCS ~ Github</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_other">
          <h3>Finance & Accounting Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>Financial Analysis</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>General Insurance</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>Account Management</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>CRM Systems</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaCheckDouble className="experience_details-icon" />
              <div>
                <h4>Loan Appraisals</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
