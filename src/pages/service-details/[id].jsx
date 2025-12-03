import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import ServiceDetailsArea from '../../components/service-details/service-details-area';
import service_data from '../../data/service-data';

const ServiceDetailsDynamic = () => {
    const router = useRouter();
    const { id } = router.query;
    const service = service_data.find(item => item.id === Number(id)) || service_data[0];

    return (
        <Wrapper>
            <SEO pageTitle={service ? service.detail_title : "Service Details"} />
            <ServiceDetailsArea service={service} />
        </Wrapper>
    );
};

export default ServiceDetailsDynamic;
