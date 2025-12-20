import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderOne from '@/src/layout/headers/header';
import React from 'react';
import ContactArea from './contact-area';
import GoogleMap from './google-map';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import FaqArea from '../homes/home/faq-area';
import CtaBanner from '../homes/home/cta-banner';

const Contact = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="" page_title="" bg_image="/assets/img/breadcrumb/contact-bg.jpg" />
                <ContactArea />
                <FaqArea />
                <CtaBanner />
                <GoogleMap />
                <FooterContact contact_style={true} />
            </main>
            <FooterThree />
        </>
    );
};

export default Contact;