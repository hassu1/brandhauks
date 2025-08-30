"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="bi-why-choose-us-4" className="bi-why-choose-us-section-4">
      <div className="bi-title-waterprint headline fordemo">
        <h2>Why Choose Us</h2>
      </div>
      <div className="bi-why-choose-us-content">
        <div className="container">
          <div className="bi-why-choose-us-area-1">
            <div className="row">
              <div className="col-lg-6">
                <div className="bi-why-choose-img1-area position-relative">
                  <div className="why-choose-img1 text-center">
                    <Image
                      src="/assets/images/dazzlewheel.png"
                      alt="Why Choose Us Image 1"
                      width={657}
                      height={581}
                      style={{ borderRadius: "10px" }}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="why-choose-img2 rr position-absolute"
                    data-parallax='{"x" : -60}'
                  >
                    <Image
                      src="/assets/img/about/whc1.2.png"
                      alt="Decorative Image 2"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="why-choose-img3 position-absolute">
                    <Image
                      src="/assets/img/about/wh1.5.png"
                      alt="Decorative Image 3"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className="why-choose-img4 position-absolute"
                    data-parallax='{"x" : -60, "rotateY":-300}'
                  >
                    <Image
                      src="/assets/img/about/wh1.3.png"
                      alt="Decorative Image 4"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className="why-choose-img5 position-absolute"
                    data-parallax='{"y" : -60}'
                  >
                    <Image
                      src="/assets/img/about/wh1.4.png"
                      alt="Decorative Image 5"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_1">
                    <div className="bi-section-title-4 bins-text headline">
                      <div
                        className="sub-title position-relative text-uppercase"
                      >
                        Why choose us
                      </div>
                      <h2 className="">
                        We&apos;re Here to Help Your Business Thrive
                      </h2>
                      <p>
                        At Brand Hawks, we understand that every brand is unique.
                        That&apos;s why we offer personalized strategies tailored to
                        your specific goals, challenges, and audience. Whether
                        you&apos;re just starting out or scaling up, our team works
                        closely with you to craft digital media solutions that
                        truly make a difference.From boosting revenue and hitting
                        short-term targets to building long-term brand equity and
                        expanding your market share. We&apos;re here to help you grow,
                        every step of the way.We don&apos;t believe in one-size-fits-all
                        plans. Instead, we focus on what matters most to you
                        delivering real, measurable results that align with your
                        vision. With data-driven insights, creative execution, and
                        ongoing support, Brand Hawks becomes more than a service
                        provider we become your growth partner.Let&apos;s bring your
                        brand&apos;s full potential to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bi-why-choose-us-area-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="bi-why-choose-textarea">
                  <div className="bi-why-choose-text_2">
                    <div className="bi-section-title-4 headline bins-text">
                      <div
                        className="sub-title position-relative text-uppercase"
                      >
                        Our Experiences
                      </div>
                      <h2 className="split-in-right">
                        We Grow Brands in the Digital World
                      </h2>
                      <p>
                        Our services cover the full spectrum of digital marketing,
                        Social Media Marketing,SEO,Pay-Per-Click advertising, and
                        web and app development. Whatever your goals, we have the
                        tools and expertise to make it happen.
                      </p>
                    </div>
                    <div className="bi-why-choose-skill-area">
                      <div className="skill-set-percent headline">
                        <h4>UI/UX Design</h4>
                        <div className="progress">
                          <div className="progress-bar" data-percent="92"></div>
                        </div>
                      </div>
                      <div className="skill-set-percent headline">
                        <h4>Web Development</h4>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            data-percent="85"
                            style={{ backgroundColor: "var(--base-color)" }}
                          ></div>
                        </div>
                      </div>
                      <div className="skill-set-percent headline">
                        <h4>Marketing & Branding</h4>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            data-percent="85"
                            style={{ backgroundColor: "var(--base-color)" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bi-why-choose-img2-area position-relative">
                  <div className="why-choose-img2 text-center">
                    <Image
                      src="/assets/img/where-party.png"
                      alt="Why Choose Us Image 2"
                      width={657}
                      height={581}
                      style={{ borderRadius: "10px", objectFit:'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="why-choose-img2_1 position-absolute"
                    data-parallax='{"y" : 30}'
                  >
                    <Image
                      src="/assets/img/about/wh2.2.png"
                      alt="Decorative Image 2"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className="why-choose-img2_2 position-absolute"
                    data-parallax='{"x" : 50}'
                  >
                    <Image
                      src="/assets/img/about/wh2.3.png"
                      alt="Decorative Image 3"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className="why-choose-img2_3 position-absolute"
                    data-parallax='{"y" : -60, "rotateY":-150}'
                  >
                    <Image
                      src="/assets/img/about/wh2.4.png"
                      alt="Decorative Image 4"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
