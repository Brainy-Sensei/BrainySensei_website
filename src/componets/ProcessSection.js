import React from 'react';
import './ProcessSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPencilRuler, faCode, faVial } from '@fortawesome/free-solid-svg-icons';


const processSteps = [
  {
    step: '01',
    title: 'Research',
    description:
      'Through research and analysis, we gather insights required to understand your customer aligned with your goals.',
    icon: faSearch,
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We design wireframes, prototypes, and user interfaces to ensure seamless usability and functionality.',
     icon: faPencilRuler,
  },
  {
    step: '03',
    title: 'Develop',
    description:
      'We write clean code using modern technologies and frameworks to build fast and high-performing software.',
     icon: faCode,
  },
  {
    step: '04',
    title: 'Test',
    description:
      'We rigorously test for bugs, usability, and performance to ensure high-quality applications.',
     icon: faVial,
  },
];

const Process = () => {
  return (
    <div className="process-container">
      <h2 className="process-title">
        <span className="process-highlight">Planning</span> <br /> Our Process
      </h2>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <div key={index} className="process-card">
            <div className="process-step-number">{step.step}</div>
            <div className="process-icon">
              <FontAwesomeIcon icon={step.icon} size="2x" />
            </div>
            <h3 className="process-card-title">{step.title}</h3>
            <p className="process-card-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
