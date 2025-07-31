import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

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