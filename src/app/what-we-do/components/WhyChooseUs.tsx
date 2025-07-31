import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <section id="bi-why-choose-us-4" className="bi-why-choose-us-section-4">
      <div className="bi-title-waterprint headline text-center">
        <h2>What We Do</h2>
        <div className="row">
          <div className="col-md-6 col-12 m-auto">
            <p>
              We’re a team of passionate developers and digital creatives dedicated to helping businesses grow and succeed online. While web design is at the heart of what we do, we also offer a suite of powerful services—from SEO and digital marketing to mobile app development and explainer videos. Everything we create is thoughtfully crafted to boost your brand, connect with your audience, and deliver real, measurable results.
            </p>
          </div>
        </div>
      </div>

      <div className="bi-why-choose-us-content">
        <div className="container">
          {/* Web Development Section */}
          <div className="bi-why-choose-us-area-1">
            <div className="row">
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img1-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/web.png"
                    alt="Web Development"
                    width={504}
                    height={445}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_1">
                    <div className="bi-section-title-4 bins-text headline">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                        Why choose us
                      </div>
                      <h2 className="tx-split-text split-in-right">Web Development</h2>
                      <p>
                        Building responsive and aesthetically pleasing websites that reflect your brand identity, optimized for performance and user engagement. Crafting seamless digital experiences with clean code, modern design principles, and user-centric functionality. From intuitive layouts to mobile-first responsiveness, every element is tailored to elevate your brand online.
                        <br />
                        Let’s transform your vision into a powerful online presence that connects, converts, and grows.
                      </p>
                    </div>
                    <div className="bi-btn-4 text-uppercase wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1000ms">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Development Section */}
          <div className="bi-why-choose-us-area-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_2">
                    <div className="bi-section-title-4 headline bins-text">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1000ms">
                        Our Experiences
                      </div>
                      <h2 className="tx-split-text split-in-right">App Development</h2>
                      <p>
                        Crafting user-friendly and innovative mobile applications tailored to your business needs, ensuring a seamless user experience on both iOS and Android platforms. We specialize in intuitive interfaces and scalable architecture that drive engagement and long-term usability.
                        <br />
                        Empowering your digital presence with reliable, high-quality apps that deliver real business value.
                      </p>
                    </div>
                    <div className="bi-btn-4 text-uppercase">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img2-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/769x662-9.png"
                    alt="App Development"
                    width={769}
                    height={662}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Marketing Section */}
          <div className="bi-why-choose-us-area-1">
            <div className="row">
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img1-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/769x662-8.png"
                    alt="Social Media Marketing"
                    width={769}
                    height={662}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_1">
                    <div className="bi-section-title-4 bins-text headline">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                        Social Media Marketing
                      </div>
                      <h2 className="tx-split-text split-in-right">Social Media Marketing</h2>
                      <p>
                        We create platform-specific content that resonates with your target market and builds authentic connections. From campaign planning to performance analytics, every step is tailored to meet your business goals.
                        <br />
                        Let your brand speak with purpose—where every post contributes to a larger story and measurable impact.
                      </p>
                    </div>
                    <div className="bi-btn-4 text-uppercase wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1000ms">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bi-why-choose-us-area-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_2">
                    <div className="bi-section-title-4 headline bins-text">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1000ms">
                        Search Engine Optimization
                      </div>
                      <h2 className="tx-split-text split-in-right">Search Engine Optimization</h2>
                     <p>
                      We implement on-page and off-page optimization techniques aligned with the latest algorithm updates. Our SEO solutions focus on increasing discoverability, enhancing user experience, and boosting site authority.
                      <br />
                      Whether you&apos;re aiming for local, national, or global reach, we tailor strategies to match your business objectives.
                    </p>

                    </div>
                    <div className="bi-btn-4 text-uppercase">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img2-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/769x662-7.png"
                    alt="SEO"
                    width={769}
                    height={662}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Influencer Marketing Section */}
          <div className="bi-why-choose-us-area-1">
            <div className="row">
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img1-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/769x662-8.png"
                    alt="Influencer Marketing"
                    width={769}
                    height={662}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_1">
                    <div className="bi-section-title-4 bins-text headline">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                        Influencer Marketing
                      </div>
                      <h2 className="tx-split-text split-in-right">Influencer Marketing</h2>
                      <p>
                        Our approach focuses on strategic partnerships that build credibility, spark conversation, and drive measurable engagement. From micro-influencers to industry leaders, we curate talent that resonates with your target market and reflects your brand values.
                        <br />
                        Influencer marketing isn’t just about reach—it’s about trust, relevance, and lasting impact. Let us help you turn influence into action.
                      </p>
                    </div>
                    <div className="bi-btn-4 text-uppercase wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1000ms">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ecommerce Services Section */}
          <div className="bi-why-choose-us-area-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_2">
                    <div className="bi-section-title-4 headline bins-text">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1000ms">
                        Take Your Business Online Today
                      </div>
                      <h2 className="tx-split-text split-in-right">Ecommerce Services</h2>
                      <p>
                        Enhance your online retail business with our end-to-end e-commerce solutions. We provide seamless website design, secure payment gateways, efficient product management, and personalized marketing strategies to drive sales and deliver an exceptional customer experience. Transform your online store with our comprehensive e-commerce solutions. Let us help you grow your e-commerce business and reach new heights.
                      </p>
                    </div>
                    <div className="bi-btn-4 text-uppercase">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img2-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/ecom.png"
                    alt="Ecommerce Services"
                    width={769}
                    height={662}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ad Campaigns Section */}
          <div className="bi-why-choose-us-area-1">
            <div className="row">
              <div className="col-lg-6 text-center">
                <div className="bi-why-choose-img1-area position-relative">
                  <Image
                    src="/assets/images/what_we_do/ad.png"
                    alt="Ad Campaigns"
                    width={769}
                    height={662}
                    style={{ width: '70%', margin: 'auto' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_1">
                    <div className="bi-section-title-4 bins-text headline">
                      <div className="sub-title position-relative pera-content text-uppercase wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                        Ad Campaigns
                      </div>
                      <h2 className="tx-split-text split-in-right">Ad Campaigns</h2>
                      <p>
                        We specialize in building responsive, visually stunning websites that not only reflect your unique brand identity but are also optimized for high performance, seamless functionality, and maximum user engagement across all devices.
                      </p>
                    </div>
                    <div className="bi-btn-4 text-uppercase wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1000ms">
                      <Link href="#!">
                        
                          Chat now <span className="d-flex justify-content-center align-items-center">
                            <Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} />
                          </span>
                        
                      </Link>
                    </div>
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

export default WhyChooseUs;
