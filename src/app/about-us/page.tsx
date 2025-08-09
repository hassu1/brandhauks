
import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import AboutSection from "./components/AboutSection";
import OurProcess from "./components/OurProcess";
import ServicesSection from "@components/components/ServicesSection";
import ScrollFixer from "@components/components/ScrollFixer";

export const metadata = {
  title: 'About Us | Brands Hauks',
  description: 'Brand Hawks is an agency that scales with you-backed by a proven process that delivers, time and time again. ',
  alternates: {
    canonical: 'https://www.brandhawks.ae/about-us',
  },
};

export default function AboutUsPage() {



  return (
    <>
   <ScrollFixer />

    <Header />
      <AboutSection />
      <ServicesSection />
      <OurProcess />
    <Footer />
    </>

  );
}