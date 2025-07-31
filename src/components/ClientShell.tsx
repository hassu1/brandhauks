"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ClientShell() {
  useEffect(() => {
    // Any JS logic or preloader animations can be handled here
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader" style={{ display: "block" }} />

      {/* Scroll to Top */}
      <div className="up">
        <a href="#" className="scrollup text-center">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>

      {/* Cursor */}
      <div className="cursor" />

      {/* Floating WhatsApp Icon */}
      <style jsx>{`
        .floating-social-icons a.fsi-wa img {
          position: fixed;
          bottom: 40px;
          left: 30px;
          width: 64px;
          z-index: 4;
          animation: mover 0.9s infinite alternate;
        }
        @keyframes mover {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(5px);
          }
        }
      `}</style>

      <div className="floating-social-icons">
        <a
          href="https://api.whatsapp.com/send/?phone=+971529557729&text=Hi There, Brand Hauks"
          className="fsi-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src="/assets/images/whatsapp.png" alt="WhatsApp" /> */}
          {/* Or use Image component for optimization:
          <Image src="/assets/images/whatsapp.png" alt="WhatsApp" width={64} height={64} /> */}
          <Image src="/assets/images/whatsapp.png" alt="WhatsApp" width={64} height={64} />
        </a>
      </div>
    </>
  );
}
