import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetailsArea from '../components/service-details/service-details-area';
import service_data from '../data/service-data';

const AboutUs = () => {
    const service = service_data.find(item => item.id === 10);

    return (
        <Wrapper>
            <SEO pageTitle={service ? service.detail_title : "About Us"} />
            <ServiceDetailsArea service={service} />
        </Wrapper>
    );
};

export default AboutUs;
