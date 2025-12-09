import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetailsArea from '../components/service-details/service-details-area';
import service_data from '../data/service-data';

const WorkforceHiring = () => {
    const service = service_data.find(item => item.id === 8);

    return (
        <Wrapper>
            <SEO pageTitle={service ? service.detail_title : "Workforce Hiring Under Our Payroll"} />
            <ServiceDetailsArea service={service} />
        </Wrapper>
    );
};

export default WorkforceHiring;
