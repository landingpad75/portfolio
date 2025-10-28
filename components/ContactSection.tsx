import React, { useState } from 'react';
import Modal from './Modal';
import './ContactSection.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success modal
    setShowModal(true);
  };

  const closeModal = () => {
    setFormData({ name: '', email: '', message: '' });
    setShowModal(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Build Something Awesome Together</h3>
            <p>
              Whether you have an interesting problem that needs solving, 
              want to collaborate on a crazy project, or just want to say hi, 
              I'd love to hear from you!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="method-details">
                  <span className="method-label">WhatsApp</span>
                  <a href="https://wa.me/212612802953" className="method-value">+212 612-802953</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fab fa-discord"></i>
                </div>
                <div className="method-details">
                  <span className="method-label">Discord</span>
                  <span className="method-value">landing_pad</span>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="method-details">
                  <span className="method-label">GitHub</span>
                  <a href="https://github.com/landingpad75" className="method-value">@landingpad75</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-details">
                  <span className="method-label">Email</span>
                  <a href="mailto:amine@zincplatforms.dev" className="method-value">amine@zincplatforms.dev</a>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <Modal 
        isOpen={showModal}
        onClose={closeModal}
        userName={formData.name}
        userEmail={formData.email}
      />
    </section>
  );
};

export default ContactSection;