import WhyChooseUs from "@components/components/WhyChooseUs";
import WhyChoose from "./components/WhyChoose";
import Image from "next/image";
import Testimonial from "@components/components/Testimonal";
import FAQ from "./components/FAQ";
import Header from "@components/components/Header";
import Footer from "@components/components/Footer";

export default function demo() {
  return (
    <>
    <Header />
      <WhyChoose />
      <section
        id="bi-why-choose-us-4"
        className="bi-why-choose-us-section-4"
        style={{ padding: "30px 0px 0px" }}
      >
        <div className="bi-title-waterprint headline text-center">
          <h2>What We Do</h2>
          <div className="row">
            <div className="col-md-6 col-12 m-auto">
              <p>
                We’re a team of passionate developers and digital creatives
                dedicated to helping businesses grow and succeed online. While
                web design is at the heart of what we do, we also offer a suite
                of powerful services—from SEO and digital marketing to mobile
                app development and explainer videos. Everything we create is
                thoughtfully crafted to boost your brand, connect with your
                audience, and deliver real, measurable results.
              </p>
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
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}
