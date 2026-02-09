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
        <p className="salutation">To My Lovey Dovey,</p>
        
        <TypeAnimation
          sequence={[
            4500,
            "I hope this letter finds you well. I wanted to take a moment to express something that has been on my mind lately.",
            3500,
            "I’ve been thinking about where could we spend our precious time together this month. A place kung saan we can just be ourselves, where can create new core memories.",
            2500,
            "Upon consulting God, matinding pagreresearch ng mga lugar, at pag-iisip ng mga posibleng activities, I found the perfect spot for us, Cubao :>",
            2000,
            "If ever you are available and, hopefully, free that day, I would like to invite you to go on a date with me. Just the two of us, exploring the eskinitas and streets of Cubao, discovering hidden places, trying out some food, and simply enjoying each other's company.",
          ]}
          speed={35}
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
        </div>
        <div className="letter-signature">
        <TypeAnimation
          speed={50}
          sequence={[10500, "Lloyd"]}
        
        />
      </div>
{/* 
      <button className="details-link" onClick={onShowDetails}>
        View Details →
      </button> */}
    </div>
  );
};

export default LetterInvitation;