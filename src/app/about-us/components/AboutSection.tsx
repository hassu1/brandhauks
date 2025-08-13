import Image from 'next/image'


const AboutSection = () => {


  return (
    
    <section id="bi-about-4" className="bi-about-section-4" style={{ padding:'100px 0px'}}>
      <div className="container">
        <div className="bi-about-content-4 pt-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="bi-about-img-wrapper4 position-relative">
                <span
                  className="about-circle-shape position-absolute wow zoomIn"
                  data-wow-delay="500ms"
                  data-wow-duration="1000ms"
                >
                  <Image
                    src="/assets/img/about/circle1.png"
                    alt="Circle Shape"
                    width={100}
                    height={100}
                  />
                </span>
                <div
                  className="about-img1 d-xl-block d-lg-block d-md-block d-sm-block d-none"
                >
                  <Image
                    src="/assets/images/657x581-5.png"
                    alt="Image 1"
                    height={400}
                    width={657}
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <div
                  className="about-img2 position-absolute wow fadeInRight mt-5"
                >
                  <Image
                    src="/assets/images/421x483-2.png"
                    alt="Image 2"
                    height={400}
                    width={421}
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="bi-about-text-4 position-relative">
                <div className="bi-section-title-4 headline" style={{ position: 'static' }}>
                  <div
                    className="sub-title position-relative text-uppercase wow fadeInRight"
                  >
                    Welcome To Brand Hauks
                  </div>
                  <h2 className="tx-split-text split-in-right">About Us</h2>
                </div>
                <div className="bi-about-text-area-4 bins-text" style={{ paddingTop: '5px' }}>
                  <p>
                    No matter how big your company gets, growth brings new challenges. That’s where we come in. We’re the agency
                    that scales with you—backed by a proven process that delivers, time and time again. From alignment to refinement,
                    design to build—we’re here to move you forward, faster.
                  </p>
                </div>
                <div
                  className="bi-abut-feature-list-4 ul-li"
                >
                  <ul>
                    <li>
                      <i className="fal fa-users"></i> Dedicated Team
                    </li>
                    <li>
                      <i className="fal fa-cogs"></i> Solve Together
                    </li>
                    <li>
                      <i className="fal fa-user-headset"></i> 24/7 Support
                    </li>
                    <li>
                      <i className="fal fa-award"></i> Collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default AboutSection
