import React from "react";
import { useState } from "react";
import './index.css'

const Index = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="tooltip-wrapper">
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="tooltip-trigger"
      >
        How it works
      </span>
      {show && (
        <div
          className="tooltip-container"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div className="tooltip-arrow"></div>

          <div className="tooltip-box">
            <ul className="tooltip-list">
              <li>See your capital gains for FY 2024-25 in the left card</li>
              <li>
                Check boxes for assets you plan on selling to reduce your tax
                liability
              </li>
              <li>
                Instantly see your updated tax liability in the right card
              </li>
            </ul>
            <p className="tooltip-protip">
              <strong>Pro tip:</strong> Experiment with different combinations
              of your holdings to optimize your tax liability
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
