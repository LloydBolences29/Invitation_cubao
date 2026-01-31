import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './LetterInvitation.css';

const LetterInvitation = () => {
  return (
    <div className="paper-stationery">
      <div className="letter-header">
        <p className="date-stamp">January 2026</p>
      </div>

      <div className="letter-body">
        <p className="salutation">Dearest,</p>
        
        <TypeAnimation
          sequence={[
            1500,
            "I’ve been thinking about how much I’d love to spend a quiet afternoon with you. There's this place—Cubao Expo—where the world feels a little slower and everything has a story.",
            1000,
            "Will you come wandering through the vintage shops and art corners with me? Just us, some coffee, and the afternoon light.",
          ]}
          speed={65}
          wrapper="span"
          repeat={0}
          className="handwritten-text"
        />
      </div>

      <div className="letter-footer">
        <TypeAnimation
          sequence={[9000, "With all my love,"]}
          speed={50}
          cursor={false}
          repeat={0}
        />
        <p className="signature">Me</p>
      </div>
{/* 
      <button className="details-link" onClick={onShowDetails}>
        View Details →
      </button> */}
    </div>
  );
};

export default LetterInvitation;