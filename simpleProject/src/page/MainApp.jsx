import { useState, lazy } from "react";
import "./MainApp.css";
import HeartBackground from "../component/HeartBackground";
import IntroCard from "../component/IntroCard";
import Envelope from "../component/Envelope";
import LetterInvitation from "../component/LetterInvitation";
const MoreDetails = lazy(() => import("../component/MoreDetails"));

const MainApp = () => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [phase, setPhase] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [phase2Closing, setPhase2Closing] = useState(false);
  const [invitationSteps, setInvitationSteps] = useState(0);

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
      setPhase2Closing(true);
    }, 9500);

    setTimeout(() => {
      setPhase(3);
    }, 10000);
  };

  const handleNextStep = () => {
    setInvitationSteps((prev) => prev + 1);
  };

  const handleBackSteps = () => {
    if (invitationSteps > 0) {
      setInvitationSteps((prev) => prev - 1);
    }
  };

  const showInvitationDetails = () => {
    switch (invitationSteps) {
      case 0:
        return <LetterInvitation />;
      case 1:
        return <MoreDetails />;
      default:
        return <LetterInvitation />;
    }
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
          <div
            className={`glass-morph-reveal ${phase2Closing ? "fade-out-up" : ""}`}
          >
            <div className="full-invitation-content">
              <p className="subtitle">Get Lost in Time</p>
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
          <div className="phase-3-container">
            {/* 1. Wrap everything in one parent <div> or Fragment */}
            <div className="content-area">{showInvitationDetails()}</div>

            <div className={`navigation-wrapper ${isAccepted ? "fade-out-up" : ""}`}>
              <div className="more-details-buttons">
                {/* Only show Back if we aren't on the first page */}
                {invitationSteps > 0 && (
                  <button className="invite-button" onClick={handleBackSteps}>
                    Back
                  </button>
                )}

                {invitationSteps === 0 && (
                  <button className="invite-button" onClick={handleNextStep}>
                    More Details...
                  </button>
                )}

                {/* Only show this Next button if we aren't on the first page, 
                  OR move the logic entirely into the components */}
                  {(invitationSteps === 1 && invitationSteps > 0) && (
                  <button className="invite-button" onClick={handleNextStep}>
                    Next
                  </button>
                  )}
                  {invitationSteps === 2 && (
                    <button className="invite-button" onClick={handleSayYesClick}>
                      Say Yes!
                    </button>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>

      <HeartBackground />
    </div>
  );
};

export default MainApp;
