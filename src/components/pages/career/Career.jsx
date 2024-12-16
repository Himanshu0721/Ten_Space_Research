import React from 'react';
import './Career.css';

const Careers = () => {
  const crews = [
    'Frontend Development ',
    'Backend Development ',
    'Full Stack Development ',
    // 'DevOps and Cloud Infrastructure Crew',
    // 'Cybersecurity Crew',
    'Data Science and Analytics ',
    // 'Artificial Intelligence and Machine Learning ',
    // 'Quality Assurance and Testing Crew',
    'UI/UX Design',
    // 'IT Support and Systems Administration ',
  ];

  return (
    <div className="careers-container">
      <h1 className="heading">Careers at Ten Space Research</h1>
      <p className="intro">
        Anyone who is really, really good at anything has a place at Ten Space Research.
      </p>
      <div className="crew-list">
        {crews.map((crew, index) => (
          <div key={index} className="crew-item">
            {crew}
          </div>
        ))}
      </div>
      <div className="application-info">
        <p>
          We have a few more exciting profiles. If you are curious, please send
          your resume in PDF format and a 3-line email describing:
        </p>
        <ul>
          <li>Who you are</li>
          <li>Why you want to apply to Ten Space Research</li>
          <li>Something interesting about yourself</li>
        </ul>
        <p>
          Send your resumes to{' '}
          <a
            href="mailto:hr@entrepreneurshipnetwork.net"
            className="email-link"
          >
            hr@entrepreneurshipnetwork.net
          </a>
        </p>
      </div>
      <div className="view-more">
        <button className="view-more-button"><a href="https://career.entrepreneurshipnetwork.net/" target='blank'>View More Jobs</a></button>
      </div>
    </div>
  );
};

export default Careers;
