import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import About from '../components/about';

const AboutUs = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"About Us - Purnavi IT Solutions"} />
            <About />
        </Wrapper>
    );
};

export default AboutUs;
