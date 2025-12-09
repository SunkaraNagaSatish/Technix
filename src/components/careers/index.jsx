import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const Careers = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="Careers" page_title="Careers" />
                <section className="tp-about-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-section-wrapper text-center">
                                    <h2 className="tp-section-title">Careers</h2>
                                    <p className="mt-20">Welcome to our Careers page. We are always looking for talented individuals to join our team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterContact />
            </main>
            <FooterThree />
        </>
    );
};

export default Careers;
