import React, { useEffect } from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetailsArea from '../components/service-details/service-details-area';
import service_data from '../data/service-data';

const ClientCentricProjectOutsourcing = () => {
    const service = service_data.find(item => item.id === 9);

    return (
        <Wrapper>
            <SEO pageTitle={service ? service.detail_title : "Client-Centric Project Outsourcing"} />
            <ServiceDetailsArea service={service} />
        </Wrapper>
    );
};

export default ClientCentricProjectOutsourcing;
