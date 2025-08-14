'use client';

export default function CounterSection() {
    return (
        <>
            <section id="bi-counter-4" className="bi-counter-section-4 position-relative" data-background="assets/img/counter-bg.png">
                <span className="bi-counter-landing1 counter-landing position-absolute d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <img src="assets/images/project/4.png" alt="" className='lazy' />
                </span>
                <span className="bi-counter-landing2 counter-landing position-absolute d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <img src="assets/images/project/5.png" alt="" className='lazy'  />
                </span>
                <span className="bi-counter-landing3 counter-landing position-absolute d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <img src="assets/images/project/6.png" alt="" className='lazy'  />
                </span>
                <div className="container">
                    <div className="bi-counter-content-4 d-flex justify-content-end">
                        <div className="bi-fun-fact-counter-2  position-relative">
                            <span className="bi-fun-fact-star position-absolute">
                                <img src="assets/img/icon/star2.png" className='lazy'  alt="" />
                            </span>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="bi-counter-item-2 headline pera-content">
                                        <h3><span className="counter">12</span>+</h3>
                                        <p>Experience</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bi-counter-item-2 headline pera-content">
                                        <h3><span className="counter">145</span>+</h3>
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bi-counter-item-2 headline pera-content">
                                        <h3><span className="counter">110</span>+</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bi-counter-item-2 headline pera-content">
                                        <h3><span className="counter">92</span>%</h3>
                                        <p>Client Retention</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .bi-counter-section-4 .counter-landing.bi-counter-landing1 {
                    left: -45%;
                    z-index: 2;
                    bottom: -85%;
                    -webkit-transition-delay: 0.1s;
                    transition-delay: 0.1s;
                }

                .bi-counter-section-4 .counter-landing.bi-counter-landing2 {
                    left: -36%;
                    z-index: 4;
                    bottom: -600px;
                    -webkit-transition-delay: 0.2s;
                    transition-delay: 0.2s;
                }

                .bi-counter-section-4 .counter-landing.bi-counter-landing3 {
                    left: -52%;
                    bottom: -70%;
                    -webkit-transition-delay: 0.3s;
                    transition-delay: 0.3s;
                }

                @media only screen and (max-width: 1700px) {
                    .bi-counter-section-4 .counter-landing.bi-counter-landing1 {
                        left: -50%;
                        z-index: 2;
                        bottom: -85%;
                        -webkit-transition-delay: 0.1s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing2 {
                        left: -37%;
                        z-index: 4;
                        bottom: -600px;
                        -webkit-transition-delay: 0.2s;
                        transition-delay: 0.2s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing3 {
                        left: -58%;
                        bottom: -70%;
                        -webkit-transition-delay: 0.3s;
                        transition-delay: 0.3s;
                    }
                }

                @media only screen and (max-width: 1650px) {
                    .bi-counter-section-4 .counter-landing.bi-counter-landing1 {
                        left: -64%;
                        z-index: 2;
                        bottom: -85%;
                        -webkit-transition-delay: 0.1s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing2 {
                        left: -50%;
                        z-index: 4;
                        bottom: -600px;
                        -webkit-transition-delay: 0.2s;
                        transition-delay: 0.2s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing3 {
                        left: -73%;
                        bottom: -70%;
                        -webkit-transition-delay: 0.3s;
                        transition-delay: 0.3s;
                    }
                }

                @media only screen and (max-width: 1400px) {
                    .bi-counter-section-4 .counter-landing.bi-counter-landing1 {
                        left: -73%;
                        z-index: 2;
                        bottom: -85%;
                        -webkit-transition-delay: 0.1s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing2 {
                        left: -61%;
                        z-index: 4;
                        bottom: -600px;
                        -webkit-transition-delay: 0.2s;
                        transition-delay: 0.2s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing3 {
                        left: -80%;
                        bottom: -70%;
                        -webkit-transition-delay: 0.3s;
                        transition-delay: 0.3s;
                    }
                }

                @media only screen and (max-width: 1300px) {
                    .bi-counter-section-4 .counter-landing.bi-counter-landing1 {
                        left: -92%;
                        z-index: 2;
                        bottom: -85%;
                        -webkit-transition-delay: 0.1s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing2 {
                        left: -71%;
                        z-index: 4;
                        bottom: -600px;
                        -webkit-transition-delay: 0.2s;
                        transition-delay: 0.2s;
                    }

                    .bi-counter-section-4 .counter-landing.bi-counter-landing3 {
                        left: -105%;
                        bottom: -70%;
                        -webkit-transition-delay: 0.3s;
                        transition-delay: 0.3s;
                    }
                }
            `}</style>
        </>
    );
}
