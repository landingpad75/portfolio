"use client";
import React, { useState } from 'react';
import './vouch.css';

interface VouchFormData {
  name: string;
  email: string;
  rating: string;
  message: string;
}

export default function VouchPage() {
  const [formData, setFormData] = useState<VouchFormData>({
    name: '',
    email: '',
    rating: '5',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1460416419568025733/UqmQ7IDVgS8HFqa3QMxrbJCKSC4wboPGlhkGZHLDqdu9pfv_IlpSgJUNs8CSgJqRWRoc';
      
      const discordMessage = {
        embeds: [{
          title: '⭐ Vouch Received!',
          color: 0x6366f1,
          fields: [
            {
              name: '👤 Name',
              value: formData.name,
              inline: true
            },
            {
              name: '📧 Email',
              value: formData.email,
              inline: true
            },
            {
              name: '⭐ Rating',
              value: `${'⭐'.repeat(parseInt(formData.rating))} (${formData.rating}/5)`,
              inline: false
            },
            {
              name: '💬 Message',
              value: formData.message || 'No message provided',
              inline: false
            }
          ],
          timestamp: new Date().toISOString(),
        }]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', rating: '5', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vouch-page">
      <div className="vouch-container">
        <div className="vouch-header">
          <h1 className="vouch-title">Leave a Vouch</h1>
          <p className="vouch-subtitle">
            Share your experience working with me! Your feedback helps me grow and improve.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="vouch-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating *</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="5">⭐⭐⭐⭐⭐ (5 - Excellent)</option>
              <option value="4">⭐⭐⭐⭐ (4 - Great)</option>
              <option value="3">⭐⭐⭐ (3 - Good)</option>
              <option value="2">⭐⭐ (2 - Fair)</option>
              <option value="1">⭐ (1 - Poor)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Share your thoughts and experience..."
              rows={6}
            />
          </div>

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Submitting...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Submit Vouch
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              <i className="fas fa-check-circle"></i> Thank you! Your vouch has been submitted successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              <i className="fas fa-exclamation-circle"></i> Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>

        <a href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Portfolio
        </a>
      </div>
    </div>
  );
}

