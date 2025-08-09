'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Thanks() {
  useEffect(() => {
    // Optional: add a simple fade-in animation
    const container = document.querySelector('.thankyou-wrapper');
    container?.classList.add('fade-in');
  }, []);

  return (
    <section className="thankyou" style={{ padding: '80px 0', background: '#0e0e2c' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-4 pt-4">
          <div className="col-md-8 col-12">
            <div className="thankyou-wrapper text-center p-5 shadow-lg rounded" style={{ background: '#1c1c3a', color: '#fff' }}>
              <i className="fa fa-envelope-open-o mb-4" style={{ fontSize: '64px', color: '#4CAF50' }}></i>
              <h1 className="mb-3">Thank You!</h1>
              <p className="lead mb-4">Your message has been sent successfully. We'll get back to you soon.</p>

              <div className="bi-cta-btn">
                <div
                  className="bi-btn-4 text-uppercase wow fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1000ms"
                >
                  <Link href="#!">
                    Contact Us
                    <span className="d-flex justify-content-center align-items-center">
                      <Image width={15} height={15} style={{width:'100%', height:'auto'}} src="/assets/img/icon/arrow.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .thankyou-wrapper {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
}
