"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="bi-about-4" className="bi-about-section-4">
      <div className="container">
        <div className="bi-about-content-4">
          <div className="row">
            {/* Left Column - Images */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="bi-about-img-wrapper4 position-relative">
                <span
                  className="about-circle-shape position-absolute"
                >
                  <Image
                    src="/assets/img/about/circle1.png"
                    alt="Circle Shape"
                    width={100}
                    height={100}
                    loading="lazy"
                    style={{
                      position:'relative',
                      top:'-12.7rem',
                      left:'4rem'
                    }}
                  />
                </span>

                <div
                  className="about-img2"
         
                >
                  <Image
                    src="/assets/images/mockup-3.png"
                    alt="About 2"
                    width={800}
                    height={500}
                    loading="lazy"
                    style={{ height: "auto", borderRadius: "10px", width: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="bi-about-text-4 position-relative">
                <div className="bi-section-title-4 headline" style={{ position: "static" }}>
                  <div
                    className="sub-title position-relative text-uppercase"
                  >
                    WHO WE ARE
                  </div>
                  <h2 className="tx-split-text split-in-right">
                    Helping Your Business Reach Its Full Potential
                  </h2>
                </div>

                <div className="" style={{ paddingTop: "5px" }}>

                  <p>
                    Brand Hawks is a dynamic and evolving marketing company, founded in 2018, dedicated to
                    delivering smart, effective online marketing solutions. We work with businesses of all
                    shapes and sizes—whether you&apos;re just starting out or already well-established.
                  </p>

                  <div
                    className="bi-abut-feature-list-4 ul-li"
                  >
                    <ul>
                      <li>
                        <Image
                          src="/assets/images/icons-30x30-5.png"
                          alt="Icon"
                          width={30}
                          height={30}
                        />
                        &nbsp;&nbsp;Brand Builders
                      </li>
                      <li>
                        <Image
                          src="/assets/images/icons-30x30-2.png"
                          alt="Icon"
                          width={30}
                          height={30}
                        />
                        &nbsp;&nbsp;Experts Who Care
                      </li>
                      <li>
                        <Image
                          src="/assets/images/icons-30x30-4.png"
                          alt="Icon"
                          width={30}
                          height={30}
                        />
                        &nbsp;&nbsp;24/7 Support
                      </li>
                      <li>
                        <Image
                          src="/assets/images/icons-30x30-1.png"
                          alt="Icon"
                          width={30}
                          height={30}
                        />
                        &nbsp;&nbsp;Smart Solutions
                      </li>
                    </ul>
                  </div>

                  <div
                    className="bi-about-btn-cta d-flex align-items-center"
                  >
                    <div className="bi-btn-4 text-uppercase">
                      <Link href="/about-us">
                        Our Company{" "}
                        <span className="d-flex justify-content-center align-items-center">
                          <Image
                            src="/assets/img/icon/arrow.svg"
                            alt="Arrow"
                            width={20}
                            height={20}
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </div>
    </section>
  );
}
