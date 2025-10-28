import React, { useEffect, useState } from 'react';
import './Preloader.css';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const fullText = "Initializing SkyOS...";

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      setIsComplete(true);
      return;
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Typewriter effect
    const textInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [currentIndex, isLoading]);

  if (!isLoading && isComplete) {
    return null; // Don't render anything after fade out
  }

  return (
    <div className={`preloader ${isComplete ? 'fade-out' : ''}`}>
      <div className="preloader-container">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">sky@terminal:~</div>
          </div>
          <div className="terminal-content">
            <div className="command-line">
              <span className="prompt">sky@portfolio:~$</span>
              <span className="command">./start_skyos.sh</span>
            </div>
            <div className="output-line">
              <span className="output-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{progress}%</span>
            </div>
            <div className="loading-dots">
              <span>Compiling components</span>
              <span className="dot-animation">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
            {progress === 100 && (
              <div className="completion-message">
                <span className="success-text">✓ System ready. Launching portfolio...</span>
              </div>
            )}
          </div>
        </div>
        <div className="preloader-brand">
          <div className="brand-logo">SKY</div>
          <div className="brand-subtitle">Backend Systems Architect</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;