// components/ContactInfo.js
import Image from 'next/image';
const ContactInfo = () => {
  return (
    <section id="bi-contact-info" className="bi-contact-info-section inner-page-padding">
      <div className="container">
        <div className="bi-contact-info-content">
          <div className="row justify-content-center">
            {/* Email Section */}
            <div className="col-lg-4 col-md-6">
              <div className="bi-contact-info-item position-relative">
                <span className="info-bg position-absolute" style={{ backgroundImage: 'url(/assets/img/ci-bg1.png)' }}></span>
                <div className="inner-icon d-flex justify-content-center align-items-center">
                  <Image alt="" width={35} height={35} src="/assets/img/icon/ci2.png" />
                </div>
                <div className="inner-text headline pera-content">
                  <h3 className="text-white">Email Address</h3>
                  <a href="mailto:Info@brandhawks.ae" className="text-white">Info@brandhawks.ae</a>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="col-lg-4 col-md-6">
              <div className="bi-contact-info-item position-relative">
                <span className="info-bg position-absolute" style={{ backgroundImage: 'url(/assets/img/ci-bg1.png)' }}></span>
                <div className="inner-icon d-flex justify-content-center align-items-center">
                  <Image alt="" width={35} height={35} src="/assets/img/icon/ci1.png"  />
                </div>
                <div className="inner-text headline pera-content">
                  <h3 className="text-white">Phone Number</h3>
                  <a href="tel:+971529557729" className="text-white">+971 52 955 7729</a>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="col-lg-4 col-md-6">
              <div className="bi-contact-info-item position-relative">
                <span className="info-bg position-absolute" style={{ backgroundImage: 'url(/assets/img/ci-bg1.png)' }}></span>
                <div className="inner-icon d-flex justify-content-center align-items-center">
                  <Image alt="" width={35} height={35} src="/assets/img/icon/ci3.png" />
                </div>
                <div className="inner-text headline pera-content">
                  <h3 className="text-white">Location / Address</h3>
                  <a href="javascript:void()" className="text-white">Office# 205, Al Fajer Complex, Oud Metha, Dubai</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
