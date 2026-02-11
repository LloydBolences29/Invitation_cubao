import React from 'react';
import './SeeYou.css';

const SeeYou = () => {
  return (
    <div className="see-you-container">
      <div className="confetti-wrapper">
        {/* You can add a confetti component here later! */}
      </div>
      
      <div className="see-you-content">
        <h1 className="success-title">Yayyy, It's a Date! ❤️</h1>
        <p className="success-subtitle">I'm so happy you said yes. mwewheheheh</p>
        <img src="/cat2.png" style={{width: '100px', height: 'auto', marginBottom: '15px'}} alt="" />

        <div className="polaroid-frame">
          <img src="/flork.png" alt="Our Date Spot" style={{width: '150px', height: 'auto'}} className="date-image" />
          <div className="polaroid-caption">
            <p>Cubao • Feb 22, 2026</p>
          </div>
        </div>

        <div className="final-message">
          <p>See youu!!</p>
          <p>I'll pick you up before 9am jan sa crame!! Can't wait to see youu, my prettyy loveyy doveyy!!</p>
          <div className="heart-pulse">💖</div>
        </div>
      </div>
    </div>
  );
};

export default SeeYou;