import React from "react";
import "./MainApp.css";
import HeartBackground from "../component/HeartBackground";

const MainApp = () => {
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <p className="subtitle">To my favorite Lovey,</p>
        <h1>Let’s Get Lost in Time</h1>
        <div className="divider"></div>
        <p className="details">Let’s wander through art <br /> and old stories until the sun goes down.</p>
        <button className="invite-button">Open Invitation</button>
      </div>
            <HeartBackground />

    </div>
  );
};

export default MainApp;