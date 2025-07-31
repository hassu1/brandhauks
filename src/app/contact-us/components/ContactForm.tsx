// components/ContactForm.js
import React from 'react';

const ContactForm = () => {
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
                    <div className="bi-subtitle text-uppercase wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                      Welcome To Brand Hawks
                    </div>
                    <h2 className="headline-title text-white">
                      Keep In Touch
                    </h2>
                  </div>
                  <div className="bi-team-details-contact-form">
                    <form action="/controller/bannerFormController.php" method="post">
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" name="name" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="email" name="Email" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                          <input type="tel" name="phone" placeholder="Phone No." />
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="subject" placeholder="Subject" />
                        </div>
                        <div className="col-md-12">
                          <textarea name="message" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-md-12">
                          <div className="bi-submit-btn">
                            <button type="submit">Send message</button>
                          </div>
                        </div>
                      </div>
                    </form>
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
