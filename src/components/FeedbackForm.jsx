import { useState } from 'react';
import './FeedbackForm.css';

export default function FeedbackForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const data = new FormData(form);

    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="feedback">
      <h2 className="feedback__title">Share Your Thoughts</h2>
      <p className="feedback__subtitle">
        Have recommendations, suggestions, or corrections? We'd love to hear from you.
      </p>

      {status === 'success' ? (
        <div className="feedback__success">
          <span className="feedback__success-icon">✓</span>
          <p>Thank you for your feedback! We appreciate your input.</p>
        </div>
      ) : (
        <form className="feedback__form" onSubmit={handleSubmit}>
          <div className="feedback__field">
            <label htmlFor="name" className="feedback__label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="feedback__input"
            />
          </div>

          <div className="feedback__field">
            <label htmlFor="email" className="feedback__label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              className="feedback__input"
            />
          </div>

          <div className="feedback__field">
            <label htmlFor="comment" className="feedback__label">Comment</label>
            <textarea
              id="comment"
              name="comment"
              required
              rows="5"
              placeholder="Share your recommendations, suggestions, corrections, or improvements..."
              className="feedback__input feedback__textarea"
            />
          </div>

          <button
            type="submit"
            className="feedback__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Feedback'}
          </button>

          {status === 'error' && (
            <p className="feedback__error">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
