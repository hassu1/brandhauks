'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Product Manager',
    quote: 'BrandHawks helped us redefine our digital presence. Highly recommended!',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    name: 'David Lee',
    title: 'Marketing Head',
    quote: 'Amazing creativity and execution. Our conversions doubled.',
    avatar: '/avatars/avatar2.jpg',
  },
  {
    name: 'Emily Chen',
    title: 'Startup Founder',
    quote: 'The design quality and professionalism blew us away.',
    avatar: '/avatars/avatar3.jpg',
  },
  {
    name: 'Mike Anderson',
    title: 'CTO',
    quote: 'Great team, smooth communication, and top-tier results.',
    avatar: '/avatars/avatar4.jpg',
  },
];

export default function Testimonial() {
  return (
    <section className='testi' style={{ background: '#1b1c35', padding: '60px 20px' }}>
      <div className="container mx-auto max-w-6xl">
          <div className="bi-section-title-4 bins-text headline text-center mb-3">
                      <h2 className="">
                        Testimonal
                      </h2>
                      </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
                <div className="bi-testimonial-feed-content">
                    <div className="bi-testimonial-feed-item" style={{background:'#2a2b4d'}}>
							<div className="testimonial-ratting ul-li">
								<ul>
									<li><i className="fas fa-star"></i></li>
									<li><i className="fas fa-star"></i></li>
									<li><i className="fas fa-star"></i></li>
									<li><i className="fas fa-star"></i></li>
									<li><i className="fas fa-star"></i></li>
								</ul>
							</div>
							<div className="testimonial-desc">
								{t.quote}
							</div>
							<div className="testimonial-author headline text-uppercase">
								<h3>{t.name}</h3>
								<span>{t.title}</span>
							</div>
						</div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
