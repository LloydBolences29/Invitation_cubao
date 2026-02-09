import React from 'react';
import { Calendar, Shirt, MapPin } from 'lucide-react';

const MoreDetails = () => {
  return (
    <div className='more-details-container'>
      <div className="more-details-wrapper">
        
        <div className="details-card animate-card-1">
          <div className="card-icon"><Calendar size={32} strokeWidth={1.2} /></div>
          <h3>The When</h3>
          <p className="main-info">February 14, 2026</p>
          <p className="sub-info">Saturday • 3:00 PM</p>
        </div>

        <div className="details-card animate-card-2">
          <div className="card-icon"><Shirt size={32} strokeWidth={1.2} /></div>
          <h3>The Look</h3>
          <p className="main-info">Anything with White</p>
          <p className="sub-info">Light, airy, and comfy</p>
        </div>

        <div className="details-card animate-card-3">
          <div className="card-icon"><MapPin size={32} strokeWidth={1.2} /></div>
          <h3>The Where</h3>
          <p className="main-info">Cubao Expo</p>
          <p className="sub-info">Coffee & Curiosities</p>
        </div>

      </div>
    </div>
  )
}

export default MoreDetails;