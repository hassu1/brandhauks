'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
    
      <footer
        id="bi-footer"
        className="bi-footer-section"
        style={{ paddingTop: '50px' }}
        data-background="/assets/img/footer-bg.png"
      >
        <div className="bi-footer-cta blue-footer position-relative">
          <div className="container position-relative">
            {/* Background Video */}
            <video className="background-video" autoPlay muted loop playsInline>
              <source src="/assets/img/new/color5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* CTA Content */}
            <div className="bi-footer-cta-content headline d-flex align-items-center justify-content-between flex-wrap position-relative">
              <div className="bi-footer-cta-text">
                <h3>Looking for a Design Partner?</h3>
              </div>
              <div className="bi-cta-btn">
                <div
                  className="bi-btn-4 text-uppercase wow fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1000ms"
                >
                  <a href="#">
                    Get A quote
                    <span className="d-flex justify-content-center align-items-center">
                      <Image width={15} height={15} style={{width:'100%', height:'auto'}} src="/assets/img/icon/arrow.svg" alt="arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Widgets */}
        <div className="bi-footer-widget-content">
          <div className="container">
            <div className="row">
              {/* About */}
              <div className="col-lg-4 col-12">
                <div className="bi-footer-widget headline pera-content ul-li-block">
                  <div className="about-widget">
                    <h3>Working Together Ideas come to life</h3>
                    <p>
                      No matter how big your company is, as you expand and reach new highs
                      you’ll want an agency to have your back. One with a process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="col-lg-2 col-12">
                <div className="bi-footer-widget headline pera-content ul-li-block">
                  <div className="menu-widget">
                    <h3 className="widget-title">Company</h3>
                    <ul>
                      <li><Link href="/about-us">About Us</Link></li>
                      <li><Link href="/what-we-do">What We Do</Link></li>
                      <li><Link href="/portfolio">Portfolio</Link></li>
                      <li><Link href="/contact-us">Contact Us</Link></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Development */}
              <div className="col-lg-3 col-12">
                <div className="bi-footer-widget headline pera-content ul-li-block">
                  <div className="menu-widget">
                    <h3 className="widget-title">Development</h3>
                    <ul>
                      <li><a href="#">UI/UX</a></li>
                      <li><a href="#">Digital Marketing</a></li>
                      <li><a href="#">Web Application</a></li>
                      <li><a href="#">Mobile Application</a></li>
                      <li><a href="#">Shopify</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="col-lg-3 col-12">
                <div className="bi-footer-widget headline pera-content ul-li-block">
                  <div className="menu-widget">
                    <h3 className="widget-title">Contact Info</h3>
                    <ul>
                      <li><a href="#"><i className="fa fa-phone"></i>&nbsp;&nbsp;+971-111-11111</a></li>
                      <li><a href="#"><i className="fa fa-envelope"></i>&nbsp;&nbsp;abc@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Logo Area */}
        <div className="bi-footer-logo-area">
          <div className="container">
            <div className="bi-footer-logo">
              <div className="brand-logo text-center">
                <Link href="/">
                  <Image width={100} height={100} src="/assets/img/logo_white.png" alt="Logo" />
                </Link>
              </div>
              <div className="logo-mail text-center headline">
                <h3><a href="mailto:Info@brandhawks.ae">Info@brandhawks.ae</a></h3>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bi-footer-copyright text-center">
          Copyright 2025 @brandHauks
        </div>
      </footer>
    </>
  );
}
