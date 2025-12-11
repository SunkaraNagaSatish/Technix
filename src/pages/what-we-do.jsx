import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetailsArea from '../components/service-details/service-details-area';
import service_data from '../data/service-data';

const WhatWeDo = () => {
    const service = service_data.find(item => item.id === 12);

    return (
        <Wrapper>
            <SEO pageTitle={service ? service.detail_title : "What We Do"} />
            <ServiceDetailsArea service={service} />
        </Wrapper>
    );
};

export default WhatWeDo;
