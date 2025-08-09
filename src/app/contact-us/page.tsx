import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

export const metadata = {
  title: 'Contact Us | Brands Hauks',
  description: 'Get in touch with our team for web development, design, and digital marketing services in Dubai. We’re here to help your business grow.',
  alternates: {
    canonical: 'https://www.brandhawks.ae/contact-us',
  },
};

export default function ContactUs(){
    return(
        <>
            <Header />
            <ContactInfo />
            <ContactForm />
            <Footer />
        </>
    )
}