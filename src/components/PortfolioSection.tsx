"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function PortfolioSection() {
  // useEffect(() => {
  //   if (typeof window !== "undefined" && (window as any).WOW) {
  //     new (window as any).WOW().init();
  //   }
  // }, []);

  return (
    <section id="bi-portfolio-4" className="bi-portfolio-section-4 mt-10">
      <style jsx>{`
        .bi-portfolio-item-4 .portfolio-img-4 {
          height: 615px;
          overflow: hidden;
        }

        .bi-portfolio-item-4 .portfolio-img-4 :global(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            transition: object-position 3.5s ease;
            }

            .bi-portfolio-item-4 .portfolio-img-4 :global(img:hover) {
            object-position: center bottom;
            transition: object-position 3.5s ease;
            }

        .scroll-track {
          display: flex;
          flex-direction: column;
          animation: scrollUp 15s linear infinite;
        }

        .scroll-track img {
          width: 100%;
          height: auto;
          display: block;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>

      <div className="bi-title-waterprint headline">
        <h2>Our Best Projects</h2>
      </div>

      <div className="container">
        <div className="bi-section-title-4 text-center headline">
          <div
            className="sub-title position-relative text-uppercase"
          >
            Our Projects
          </div>
          <h2 className="headline-title">Explore Our Most Recent Work</h2>
        </div>

        <div className="bi-portfolio-content-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="bi-portfolio-item-wrapper">
                {/* Item 1 */}
                <div
                  className="bi-portfolio-item-4 wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="1000ms"
                  data-tilt
                  data-tilt-max="2"
                >
                  <div className="portfolio-img-4">
                    <Image
                      src="/assets/images/project/social_media.jpg"
                      alt="Social Media"
                      width={1300}
                      height={1300}
                      loading="lazy"
                      className="lazy"
                    />
                  </div>
                  <div className="portfolio-text headline">
                    <h3>
                      <a href="#!">Social Media & Design</a>
                    </h3>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  className="bi-portfolio-item-4"
                  data-tilt
                  data-tilt-max="2"
                >
                  <div className="portfolio-img-4">
                    <Image
                      src="/assets/images/1300x2600-3.jpg"
                      alt="App Development"
                      width={1300}
                      height={2600}
                      loading="lazy"
                      className="lazy"
                    />
                  </div>
                  <div className="portfolio-text headline">
                    <h3>
                      <a href="#!">App Development</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="bi-portfolio-item-wrapper-2">
                {/* Item 3 */}
                <div
                  className="bi-portfolio-item-4"
                  data-tilt
                  data-tilt-max="2"
                >
                  <div className="portfolio-img-4">
                    <Image
                      src="/assets/images/dazzle.png"
                      alt="Web Development"
                      width={1300}
                      height={1300}
                         loading="lazy"
                      className="lazy"
                    />
                  </div>
                  <div className="portfolio-text headline">
                    <h3>
                      <a href="#!">Web Development</a>
                    </h3>
                  </div>
                </div>

                {/* Item 4 */}
                <div
                  className="bi-portfolio-item-4"
                  data-tilt
                  data-tilt-max="2"
                >
                  <div className="portfolio-img-4">
                    <Image
                      src="/assets/images/project/1300x2600.jpg"
                      alt="Branding Design"
                      width={1300}
                      height={2600}
                      loading="lazy"
                      className="lazy"
                    />
                  </div>
                  <div className="portfolio-text headline">
                    <h3>
                      <a href="#!">Branding Design</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="bi-btn-4 text-center text-uppercase">
            <Link href="/our-portfolio">
              View More{" "}
              <span className="d-flex justify-content-center align-items-center">
                <Image
                  src="/assets/img/icon/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
