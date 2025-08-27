import Footer from "@components/components/Footer";
import Header from "@components/components/Header";
import Testimonial from "@components/components/Testimonal";
import Image from "next/image";
import FAQ from "../demo/components/FAQ";

export default function SEO() {
  return (
    <>
      <Header />
      <section
        id="bi-why-choose-us-4"
        className="bi-why-choose-us-section-4"
        style={{ padding: "125px 0px 0px 0px" }}
      >
        <div className="bi-title-waterprint headline text-center">
          <h1 className="text-white fs-1 mb-4">SEO Agency in Dubai – Brandhawks</h1>
          <div className="row">
            <div className="col-md-6 col-12 m-auto">
              <p className="">Looking for a results-driven SEO agency in Dubai that can take your business to the top of Google? At Brandhawks, we specialize in crafting powerful SEO strategies tailored for UAE businesses. Whether you’re a startup or an established brand, our mission is simple — to boost your online visibility, drive qualified traffic, and generate measurable growth.</p>
            </div>
          </div>
        </div>
      </section>

            <section id="bi-why-choose-us-4" className="bi-why-choose-us-section-4" style={{ padding: '10px 0px 0px 0px'}}>
              <div className="bi-why-choose-us-content">
                <div className="container">
                  <div className="bi-why-choose-us-area-1">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="bi-why-choose-img1-area position-relative">
                          <div className="why-choose-img1 text-center">
                            <Image
                              src="/assets/images/mock-4.png"
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
                              <h2 className="pb-3">
                                Why Choose Brandhawks as Your SEO Agency in Dubai?
                              </h2>
                              <ul>
                                <li>Proven track record of helping businesses rank higher on Google.</li>
                                <li>Customized SEO campaigns tailored to your business goals.</li>
                                <li>Transparent reporting with real-time progress tracking.</li>
                                <li>Experienced SEO experts in Dubai who know the local market.</li>
                                <li>Ethical, white-hat practices focused on long-term success.</li>
                              </ul>
                              <p>When you work with Brandhawks, you&apos;re not just getting SEO services — you&apos;re gaining a partner committed to helping your business grow.
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
                              <h2 className="">
                                Best SEO Company in Dubai for Measurable Results
                              </h2>
                              <p>As the best SEO company in Dubai, we combine global best practices with a deep understanding of the local digital landscape. From keyword research to technical optimization, every step we take is designed to maximize your ROI. Our focus is on strategies that don&apos;t just increase rankings, but actually convert visitors into customers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
        
                      <div className="col-lg-6">
                        <div className="bi-why-choose-img2-area position-relative">
                          <div className="why-choose-img2 text-center">
                            <Image
                              src="/assets/images/mock-2.png"
                              alt="Why Choose Us Image 2"
                              width={657}
                              height={581}
                              style={{ borderRadius: "10px" }}
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

      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}
