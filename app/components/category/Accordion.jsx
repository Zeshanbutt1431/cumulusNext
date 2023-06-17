'use client'

import { useState } from "react";

const Accordion = ({heading, content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h6 className="accordion-header" onClick={toggleAccordion}>
          <button
            className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
            type="button"
          >
            {heading}
          </button>
        </h6>
        <div
          className={`accordion-collapse ${isOpen ? 'show' : ''}`}
        >
          <div className="accordion-body">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;