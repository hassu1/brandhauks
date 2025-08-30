'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct hook for Next.js 13+

const ContactForm = () => {
  const router = useRouter();

  // State for form fields initialized to empty strings
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // State for handling loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    // Validate required fields
    if (!formData.name || !formData.email) {
      setError('Name and Email are required.');
      setLoading(false);
      return;
    }

    try {
      const CUSTOMURL = process.env.CONTACT_CONTROLLER
      const response = await fetch(`${CUSTOMURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/thankyou');
      } else {
        setError(result.message || 'Failed to send email.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="bi-contact-form" className="bi-contact-form-section">
      <div className="bi-contact-map">
        <div className="bi-contact-map-content">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.768872094768!2d55.30749634659923!3d25.24470857241969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d4f001efad%3A0x8a18cb2b46e77c32!2sAl%20Fajer%20Complex%20-%20Oud%20Metha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1748283388277!5m2!1sen!2s"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="bi-team-details-contact-info headline pera-content">
                <div className="bi-team-details-contact-title" style={{ padding: '10px' }}>
                  <div className="bi-section-title-1 headline pera-content">
                    <div className="bi-subtitle text-uppercase">
                      Welcome To Brand Hawks
                    </div>
                    <h2 className="headline-title text-white">
                      Keep In Touch
                    </h2>
                  </div>
                  <div className="bi-team-details-contact-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="name"  // Ensure it matches state keys
                            placeholder="First Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            name="email"  // Ensure it matches state keys
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="tel"
                            name="phone"  // Ensure it matches state keys
                            placeholder="Phone No."
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="subject"  // Ensure it matches state keys
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="message"  // Ensure it matches state keys
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                        <div className="col-md-12">
                          <div className="bi-submit-btn">
                            <button type="submit" disabled={loading}>
                              {loading ? 'Sending...' : 'Send message'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
