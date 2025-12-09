import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Careers from '../components/careers';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Careers"} />
            <Careers />
        </Wrapper>
    );
};

export default index;
