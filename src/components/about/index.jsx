import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutContentArea from './about-content-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="About Us" page_title="About Us" />
        <AboutContentArea />
        <FooterContact />
      </main>
      <FooterThree />
    </>
  );
};

export default About;