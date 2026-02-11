import React from 'react'
import './SayYes.css'

const SayYes = ({ onAccept }) => {
  return (
    <div className="say-yes-container">
      <div className="say-yes-card">
        <div className="say-yes-wrapper">
          <h3 className="celebration-title">So, what do you say?</h3>
          <h2 className="main-question">Will you go on a date with me?</h2>
        </div>

        <div className='say-yes-date-information'>
          <div className="info-badge">
            <span>📅 February 22, 2026</span>
          </div>
          <div className="info-badge">
            <span>📍 Around Cubao</span>
          </div>
        </div>

        <div className='say-yes-buttons-area'>
          <button className='say-yes-button primary' onClick={onAccept}>Yes!</button>
          <button className='say-yes-button secondary' onClick={onAccept}>Of Course</button>
        </div>
      </div>
    </div>
  )
}

export default SayYes