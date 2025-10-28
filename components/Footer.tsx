import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mohammed Amine Maazioui (Sky). Built with React & TypeScript.</p>
        <div className="footer-links">
          <a href="https://github.com/landingpad75" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="separator">•</span>
          <a href="https://wa.me/212612802953" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <span className="separator">•</span>
          <span>Discord: landing_pad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;