import React from "react";
import { Calendar, Shirt, MapPin } from "lucide-react";

const MoreDetails = () => {
  return (
    <div className="more-details-container">
      <div className="more-details-header">
        <h3>Can I invite you to a Date?</h3>
      </div>
      <div className="more-details-wrapper">
        <div className="details-card animate-card-1">
          <div className="card-icon">
            <Calendar size={32} strokeWidth={1.2} />
          </div>
          <h3>When?</h3>
          <p className="main-info">February 22, 2026</p>
          <p className="sub-info">Sunday • 9am until 4pm</p>
        </div>

        <div className="details-card animate-card-2">
          <div className="card-icon">
            <Shirt size={32} strokeWidth={1.2} />
          </div>
          <h3>The Look</h3>
          <p className="main-info">Anything with White</p>
          <p className="sub-info">Light, airy, and comfy</p>
        </div>

        <div className="details-card animate-card-3">
          <div className="card-icon">
            <MapPin size={32} strokeWidth={1.2} />
          </div>
          <h3>Where?</h3>
          <p className="main-info">Around Cubao</p>
          <p className="sub-info">Coffee & sunset merienda</p>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
