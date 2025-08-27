"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Swiper styles and imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";


const services = [
  { title: "App Development", img: "/assets/images/services/522x595-APP.jpg" },
  { title: "Web Design", img: "/assets/images/services/522x595-WEB.jpg" },
  { title: "SMM", img: "/assets/images/services/522x595-SOCIIAL-MEDIA.jpg" },
  { title: "SEO", img: "/assets/images/services/522x595-SEO.jpg" },
  { title: "Branding Design", img: "/assets/images/services/522x595BRANDING.jpg" },
  { title: "App Development", img: "/assets/images/services/522x595-APP.jpg" },
  { title: "Web Design", img: "/assets/images/services/522x595-WEB.jpg" },
  { title: "SMM", img: "/assets/images/services/522x595-SOCIIAL-MEDIA.jpg" },
  { title: "SEO", img: "/assets/images/services/522x595-SEO.jpg" },
  { title: "Branding Design", img: "/assets/images/services/522x595BRANDING.jpg" },
];

export default function ServicesSection() {
  // useEffect(() => {
  //   if (typeof window !== "undefined" && (window as any).WOW) {
  //     new (window as any).WOW().init();
  //   }
  // }, []);

  return (
    <section id="bi-service-4" className="bi-service-section-4" style={{ padding: "30px 0px" }}>
      <div className="container">
        <div className="bi-service-top-content-4 d-flex align-items-end justify-content-between">
          <div className="bi-section-title-4 headline">
            <div
              className="sub-title position-relative text-uppercase wow fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              WHAT WE DO
            </div>
            <h2 className="tx-split-text split-in-right">Our Services</h2>
          </div>
          <div
            className="bi-btn-4 text-uppercase wow fadeInRight"
            data-wow-delay="300ms"
            data-wow-duration="1000ms"
          >
            <Link href="/what-we-do">
              Read More{" "}
              <span className="d-flex justify-content-center align-items-center">
                <Image src="/assets/img/icon/arrow.svg" alt="arrow" width={20} height={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Inline style for swiper fix */}
      <style jsx>{`
        .swiper-sliderr .swiper-slide {
          width: 520px;
          height: auto !important;
        }

        .bi-service-scroll-item .service-text {
          position: static !important;
          margin-top: 1rem;
          margin-left: -3rem;
        }

        .bi-service-scroll-item .service-text h3 {
          padding: 10px;
          background: linear-gradient(135deg, #c61b61 0%, #c61b61 45.72%, #131b28 100%);
          color: white;
        }
      `}</style>

      {/* Swiper Carousel */}
      <div className="swiper-sliderr mt-4">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          freeMode
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} style={{ width: 520 }}>
              <div className="bi-service-scroll-item position-relative swiper-slide">
                <div className="service-img">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={522}
                    height={595}
                    loading="lazy"
                    style={{ width: "100%", height: "auto", objectFit:'cover' }}
                  />
                </div>
                <div className="service-text headline d-flex position-absolute align-items-center justify-content-between">
                  <h3>
                    <a href="javascript:void(0);">{service.title}</a>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
