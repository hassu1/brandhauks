'use client'; // if used in app directory (Next.js 13+)

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const sponsorLogos = [
  '160X160-1.png',
  '160X160-2.png',
  '160X160-3.png',
  '160X160-4.png',
  '160X160-5.png',
  '160X160-6.png',
  '160X160-7.png',
  '160X160-9.png',
  '160X160-12.png',
  '160X160-13.png',
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
];

export default function SponsorSection() {
  return (
    <section id="bi-sponsor" className="bi-sponsor-section">
      <div className="container">
        <div className="bi-sponsor-content">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 4 },
            }}
          >
            {sponsorLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="bi-sponsor-item">
                  <Image
                    src={`/assets/images/logos/${logo}`}
                    alt={`Sponsor ${index + 1}`}
                    width={160}
                    height={160}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .bi-sponsor-section {
          padding: 60px 0;
        }

        .bi-sponsor-item {
          text-align: center;
        }

        .bi-sponsor-item img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }
      `}</style>
    </section>
  );
}
