import React, { useState } from "react";
import "./Envelope.css";

const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Wait for the flap to flip and the letter to rise before switching phases

    onOpen();
  };

  return (
    <div
      className={`envelope-container ${isOpen ? "open" : ""}`}
      onClick={handleOpen}
    >
      <div className="envelope-wrapper">
        <div className="flap"></div>
        <div className="pocket"></div>
        {/* <div className="letter-preview">
            <p>
              I have something <br /> to ask you...
            </p>{" "}
          </div> */}
      </div>
      {!isOpen && <p className="tap-hint">Tap to open</p>}
    </div>
  );
};

export default Envelope;
