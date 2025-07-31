"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


export default function Banner() {

 const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const basic = window.Haptic?.Basic;
        basic?.HomeOneSliderSwiper?.();
        basic?.BackgroundImage?.();
      
      } catch (e) {
        console.error('Haptic re-init failed:', e);
      }
    }
  }, [pathname]);


  return (
    <>
      {/* Custom Styles */}
      <style jsx>{`
        .swiper-sliderr,
        .swiper-container {
          width: 100%;
          overflow: hidden;
        }
        .swiper-slide {
          width: 100% !important;
        }
        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          border-radius: 15px;
        }
        .bi-footer-cta-content {
          position: relative;
          z-index: 2;
        }
        .bi-why-choose-skill-area .skill-set-percent .progress span {
          color: var(--base-color) !important;
        }
        .bi-main-slider-4
          .swiper-slide-active
          .bi-main-slider-item-4
          .bi-main-slider-text
          h1,
        .bi-main-slider-item-4 .bi-main-slider-text h1 span {
          font-size: 100px;
        }
        .bi-main-slider-item-4 .bi-main-slider-text h1 strong {
          font-size: 120px;
        }
      `}</style>

      {/* Main Slider */}
      <section
        id="bi-slider-4"
        className="bi-slider-section-4"
        data-background="/assets/img/slider-bg.png"
      >
        <div className="bi-main-slider-4 swiper-container position-relative">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bi-main-slider-item-4 position-relative">
                <span className="shape_1 position-absolute">
                  <Image width={800} height={500} style={{width:'100%', height:'auto'}} src="/assets/img/s-circle.png" alt="" />
                </span>
                <span
                  className="slider_men position-absolute"
                  style={{ transform: "translate(400px,300px)" }}
                >
                  <Image width={800} height={500} style={{width:'50%', height:'auto'}} src="/assets/img/eagle_two.png" alt="" />
                </span>
                <div className="bi-main-slider-text position-relative headline pera-content">
                  <h1>
                    Innovation
                    <span>starts where</span>
                    <strong>
                      limits <b> end.</b>
                    </strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
