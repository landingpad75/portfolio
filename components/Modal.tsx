import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userEmail: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, userName, userEmail }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  const data = {
    username: userName,
    email: userEmail
  };

  if (!isOpen) return null;

  // Use React Portal to render modal at document root
  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="terminal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="window-dots">
            <span className="dot red" onClick={onClose} title="Close"></span>
            <span className="dot yellow" title="Minimize"></span>
            <span className="dot green" title="Maximize"></span>
          </div>
          <div className="modal-title">message_sent.sh</div>
        </div>
        <div className="modal-content">
          <div className="terminal-output">
            <div className="output-line">
              <span className="prompt">sky@portfolio:~$</span>
              <span className="command">./send_message.sh</span>
            </div>
            <div className="output-line">
              <span className="success">✓ Message successfully transmitted!</span>
            </div>
            <div className="output-line">
              <span className="text">Thank you for reaching out, {data.username}!</span>
            </div>
            <div className="output-line">
              <span className="text">Your message has been queued for delivery.</span>
            </div>
            <div className="output-line">
              <span className="text">I'll get back to you soon at:</span>
            </div>
            <div className="output-line">
              <span className="highlight">{data.email}</span>
            </div>
            <div className="output-line">
              <span className="comment"># Expected response time: 24-48 hours</span>
            </div>
            <div className="output-line">
              <span className="comment"># Return code: 0 (SUCCESS)</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;