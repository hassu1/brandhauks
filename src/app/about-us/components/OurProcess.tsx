
import Image from 'next/image'

const OurProcess = () => {

  return (
    <section
      id="bi-key-feature"
      className="bi-key-feature-section position-relative"
      style={{ padding: '10px 0' }}
    >
      <span className="bi-side-shape shape_1 position-absolute">
        <Image
          src="/assets/img/bg/shape_1.png"
          alt="Shape Background"
          layout="intrinsic"
          width={500} // Adjust size as needed
          height={500} // Adjust size as needed
          style={{
            width:'100%',
            height:'auto'
          }}
        />
      </span>
      <div className="container">
        <div className="bi-key-feature-content">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <div className="bi-key-feature-title-text dark-bg-title">
                <div className="bi-section-title-2 headline">
                  <div
                    className="bi-subtitle text-uppercase wow fadeInRight"
                    data-wow-delay="200ms"
                    data-wow-duration="1000ms"
                  >
                    Welcome To Brand Hawks
                  </div>
                  <h2
                    className="headline-title"
                    style={{ perspective: '400px' }}
                  >
                    <div
                      style={{
                        display: 'block',
                        position: 'relative',
                        transformOrigin: '247.5px 29.9902px',
                        transform: 'translate3d(0px, 0px, 0px)',
                        opacity: 1,
                        textAlign: 'center',
                      }}
                    >
                      Our Process
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="bi-key-feature-item-area">
                <div className="row m-auto" style={{ justifyContent: 'center' }}>
                  {[
                    {
                      icon: 'fas fa-bullhorn',
                      number: '1',
                      title: 'Discovery & Strategy',
                      description:
                        'We start by understanding your business, audience, and goals. Through deep research and competitive analysis, we craft a custom strategy built for growth.',
                    },
                    {
                      icon: 'fas fa-lightbulb',
                      number: '2',
                      title: 'Creative Direction',
                      description:
                        'Whether it’s content, design, or campaigns — we blend creative thinking with brand alignment to ensure your message connects and converts.',
                    },
                    {
                      icon: 'fas fa-cogs',
                      number: '3',
                      title: 'Execution & Optimization',
                      description:
                        'From SEO and content to paid ads and social media, we bring the strategy to life — monitoring performance and fine-tuning in real time for maximum ROI.',
                    },
                    {
                      icon: 'fas fa-tachometer-alt',
                      number: '4',
                      title: 'Performance & Reporting',
                      description:
                        'We believe in full transparency. You’ll receive clear, data-driven insights that show exactly how your brand is growing and where we go next.',
                    },
                    {
                      icon: 'fas fa-seedling',
                      number: '5',
                      title: 'Evolve & Scale',
                      description:
                        'Digital is always changing — and so are we. As your brand grows, we continuously adapt, scale, and explore new opportunities to keep you ahead.',
                    },
                  ].map((feature, index) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 mb-3 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                      key={index}
                      style={{
                        visibility: 'visible',
                        animationDuration: '1500ms',
                        animationDelay: '300ms',
                        animationName: 'fadeInUp',
                      }}
                    >
                      <div className="bi-key-feature-item">
                        <div className="bi-key-feature-icon-number d-flex justify-content-between align-items-center">
                          <div className="feature-icon position-relative">
                            <i className={feature.icon}></i>
                          </div>
                          <div className="feature-number">{feature.number}</div>
                        </div>
                        <div className="bi-key-feature-text headline pera-content">
                          <h3>
                            <a href="#">{feature.title}</a>
                          </h3>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess
