import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import WhyChooseUs from './components/WhyChooseUs';

export const metadata = {
  title: 'What We Do | Brands Hauks',
  description: 'Everything we create is thoughtfully crafted to boost your brand, connect with your audience, and deliver real, measurable results.',
  alternates: {
    canonical: 'https://www.brandhawks.ae/what-we-do',
  },
};

export default function WhatWeDo(){
    return (
        <>
            <Header />
            <WhyChooseUs />
            <Footer />
        </>
    )
}