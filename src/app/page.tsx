import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import Banner from "@components/components/Banner";
import AboutSection from "@components/components/AboutSection";
import ServicesSection from "@components/components/ServicesSection";
import PortfolioSection from "@components/components/PortfolioSection";
import WhyChooseUs from "@components/components/WhyChooseUs";
import CounterSection from "@components/components/CounterSection";
import SponsorSection from "@components/components/SponsorSection";
import TextScroll from "@components/components/TextScroll";
import ServiceAnimate from "@components/components/ServiceAnimate";
import TextScrollTwo from "@components/components/TextScrollTwo";


export default function Home() {
  return (
    <>
  
      <Header />

      <Banner />
      
      <AboutSection />

      <TextScroll />

      <ServicesSection />

      <ServiceAnimate />

      <PortfolioSection />
      <WhyChooseUs />

      <TextScrollTwo />

      <CounterSection />

      <SponsorSection />

      <Footer />
    </>
  );
}
