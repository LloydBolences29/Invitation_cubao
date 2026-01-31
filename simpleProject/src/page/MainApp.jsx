import { useState } from "react";
import "./MainApp.css";
import HeartBackground from "../component/HeartBackground";
import IntroCard from "../component/IntroCard";
import Envelope from "../component/Envelope";
import LetterInvitation from "../component/LetterInvitation";

const MainApp = () => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [phase, setPhase] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleInviteClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPhase(1);
    }, 1000); // Match the duration of the fade-out animation
  };

  const handleSayYesClick = () => {
    setPhase(3);
  };

  const handleEnvelopeOpen = () => {
    setTimeout(() => {
      setPhase(2);
    }, 2000);

    setTimeout(() => {
      setPhase(3);
    }, 10000);
  };

  return (
    <div className="main-container">
      <div className="main-wrapper">
        {phase === 0 && (
          <div className={`intro-card ${isClosing ? "fade-out-up" : ""}`}>
            <IntroCard />
          </div>
        )}

        {phase === 0 && (
          <div className="button-invite">
            <button
              className={`invite-button ${isClosing ? "fade-out-up" : ""}`}
              onClick={handleInviteClick}
            >
              Open Invitation
            </button>
          </div>
        )}

        {phase === 1 && <Envelope onOpen={handleEnvelopeOpen} />}
        {phase === 2 && (
          <div className="glass-morph-reveal">
            <div className="full-invitation-content">
              {/* <p className="subtitle">To my favorite person,</p> */}
              <h1>Let's Wander in Cubao</h1>
              <div className="divider"></div>
              <p className="details">
                Some old stories, coffee, and <br /> us.
              </p>
              {/* <button className="details-button">More Details</button> */}
            </div>
          </div>
        )}

        {phase === 3 && (
          <>

              <LetterInvitation />
              </>

        )}
      </div>

      <HeartBackground />
    </div>
  );
};

export default MainApp;
