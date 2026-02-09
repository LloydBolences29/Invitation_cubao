import React, { useState, useEffect } from 'react';
import './HeartBackground.css';

const HeartBackground = () => {
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const heartChar = "🤍\uFE0E";

  // HEART LOGIC (Upward moving)
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newHeart = {
        id,
        left: Math.random() * 100 + '%',
        duration: Math.random() * 3 + 4 + 's', // 4-7 seconds for a gentler float
        startRotation: Math.random() * 360 + 'deg',
        endRotation: Math.random() * 360 + 'deg',
        size: Math.random() * 15 + 10 + 'px'
      };
      setHearts((prev) => [...prev, newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 7000);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  // SPARKLE LOGIC (Twinkling in place)
  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      const id = Math.random();
      const newSparkle = {
        id,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        size: Math.random() * 4 + 2 + 'px', // Tiny dots
        duration: Math.random() * 2 + 1 + 's' // 1-3 seconds fade
      };
      setSparkles((prev) => [...prev, newSparkle]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 3000);
    }, 200); // Spawn sparkles faster but they are smaller
    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <div className="heart-container">
      {/* Render Hearts */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            '--duration': heart.duration,
            '--start-rotation': heart.startRotation,
            '--end-rotation': heart.endRotation,
          }}
        >
          {heartChar}
        </span>
      ))}

      {/* Render Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            '--sparkle-duration': sparkle.duration
          }}
        />
      ))}
    </div>
  );
};

export default HeartBackground;