import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import OurPortfolio from "./components/OurPortfolio";

export const metadata = {
  title: 'Our Portfolio | Brands Hauks',
  description: "Explore our portfolio to see the stunning websites, creative designs, and digital solutions we've delivered for clients across Dubai and beyond.",
  alternates: {
    canonical: 'https://www.brandhawks.ae/our-portfolio',
  },
};

export default function Portfolio(){
    return(
        <>
            <Header />
            <OurPortfolio />
            <Footer />
        </>
    )
}