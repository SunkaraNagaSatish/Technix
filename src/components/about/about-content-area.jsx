import React from 'react';
import Link from 'next/link';
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import RightSymbol from '@/src/svg/right-symbol';

const AboutContentArea = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="tp-about-content-hero pt-100 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="tp-about-hero-wrapper text-center">
                                <span className="tp-section-title__pre justify-content-center">
                                    About <span className="title-pre-color">Purnavi IT Solutions</span>
                                    <AngleArrow />
                                </span>
                                <h1 className="tp-about-hero-title">
                                    Building Workforce Success Through{' '}
                                    <span className="title-gradient">Quality Talent</span> &{' '}
                                    <span className="title-gradient">Reliable Service</span>
                                </h1>
                                <p className="tp-about-hero-desc">
                                    Purnavi IT Solutions Pvt. Ltd. is a specialized IT staffing and recruitment company with a strong reputation for connecting businesses with exceptional technical talent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Business Section */}
            <section className="tp-about-core-section pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-40">
                            <div className="tp-about-card tp-about-card-primary">
                                <div className="tp-about-card-icon">
                                    <i className="fa-solid fa-bullseye"></i>
                                </div>
                                <h3 className="tp-about-card-title">Our Core Business</h3>
                                <p className="tp-about-card-text">
                                    With extensive experience in the IT landscape, our primary expertise lies in <strong>permanent staffing</strong>, <strong>contract hiring</strong>, and <strong>complete workforce management</strong> including payroll processing and statutory compliance. We've successfully placed hundreds of IT professionals in permanent and contract roles across diverse industries.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="tp-about-card tp-about-card-secondary">
                                <div className="tp-about-card-icon">
                                    <i className="fa-solid fa-rocket"></i>
                                </div>
                                <h3 className="tp-about-card-title">Our Evolving Capability</h3>
                                <p className="tp-about-card-text">
                                    Leveraging our network of skilled IT professionals, we also undertake <strong>select project-based development</strong> for clients who need complete execution support. As we gain more experience and build internal capabilities, we continue to expand this service offering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="tp-about-highlight-box text-center">
                                <p>
                                    <i className="fa-solid fa-quote-left"></i>
                                    We combine technical talent acquisition with project delivery capabilities to serve as a <strong>comprehensive technology partner</strong> for businesses worldwide.
                                    <i className="fa-solid fa-quote-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="tp-about-journey-section pt-80 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-40">
                            <div className="tp-about-journey-title-wrapper">
                                <span className="tp-section-title__pre">
                                    Our <span className="title-pre-color">Journey</span>
                                    <AngleArrow />
                                </span>
                                <h2 className="tp-section-title">
                                    From Vision to{' '}
                                    <span className="title-color">Trusted Partnership</span>
                                    <span className="title-left-shape">
                                        <LineArrowTwo />
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-40">
                            <div className="tp-about-journey-content">
                                <p className="tp-about-journey-text">
                                    Founded with a vision to bridge the gap between talent and technology, Purnavi IT Solutions has evolved into a <strong>trusted partner</strong> for businesses looking for reliable talent acquisition and professional IT resources.
                                </p>
                                <p className="tp-about-journey-text">
                                    From startups to established enterprises, our support model ensures every client receives the <strong>right expertise at the right time</strong>, backed by transparent communication and consistent delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Stand For Section */}
            <section className="tp-about-values-section pt-80 pb-100">
                <div className="container">
                    <div className="row justify-content-center mb-60">
                        <div className="col-lg-8 text-center">
                            <span className="tp-section-title__pre justify-content-center">
                                Core <span className="title-pre-color">Values</span>
                                <AngleArrow />
                            </span>
                            <h2 className="tp-section-title text-white">
                                What We{' '}
                                <span className="title-color">Stand For</span>
                                <span className="title-left-shape">
                                    <LineArrowTwo />
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="tp-about-value-card">
                                <div className="tp-about-value-icon">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <h4 className="tp-about-value-title">Reliability</h4>
                                <p className="tp-about-value-text">
                                    We take full ownership of every placement and project, ensuring processes are followed and commitments are met. For staffing, we provide <strong>90 day replacement guarantees</strong> and immediate support for any performance issues.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="tp-about-value-card">
                                <div className="tp-about-value-icon">
                                    <i className="fa-solid fa-gem"></i>
                                </div>
                                <h4 className="tp-about-value-title">Quality</h4>
                                <p className="tp-about-value-text">
                                    Rigorous screening for every talent placement and structured quality frameworks for every project we undertake. Only the <strong>top 10-15% of candidates</strong> reach client interviews.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="tp-about-value-card">
                                <div className="tp-about-value-icon">
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                                <h4 className="tp-about-value-title">Innovation</h4>
                                <p className="tp-about-value-text">
                                    We focus on modern, scalable, and efficient solutions whether connecting you with professionals skilled in cutting edge technologies or building applications using the <strong>latest frameworks</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="tp-about-value-card">
                                <div className="tp-about-value-icon">
                                    <i className="fa-solid fa-handshake"></i>
                                </div>
                                <h4 className="tp-about-value-title">Integrity</h4>
                                <p className="tp-about-value-text">
                                    Honesty, accountability, and ethical practices form the foundation of how we operate. We're <strong>transparent about our strengths</strong> and where we're building capability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Model Section */}
            <section className="tp-about-business-section pt-100 pb-80">
                <div className="container">
                    <div className="row justify-content-center mb-60">
                        <div className="col-lg-8 text-center">
                            <span className="tp-section-title__pre justify-content-center">
                                Business <span className="title-pre-color">Model</span>
                                <AngleArrow />
                            </span>
                            <h2 className="tp-section-title">
                                Our Business Model is{' '}
                                <span className="title-color">Clear & Transparent</span>
                                <span className="title-left-shape">
                                    <LineArrowTwo />
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        {/* Core Expertise */}
                        <div className="col-lg-6 mb-50">
                            <div className="tp-about-expertise-card tp-about-expertise-primary">
                                <div className="tp-about-expertise-header">
                                    <div className="tp-about-expertise-badge">Core Expertise</div>
                                    <h3 className="tp-about-expertise-title">
                                        <i className="fa-solid fa-users"></i>
                                        IT Staffing & Recruitment
                                    </h3>
                                </div>
                                <p className="tp-about-expertise-intro">
                                    We have extensive experience connecting businesses with top tier IT talent through permanent staffing, contract hiring, and complete HR-payroll management. <strong>This is where we've built our reputation and deliver the greatest value.</strong>
                                </p>
                                <h5 className="tp-about-expertise-subtitle">We specialize in:</h5>
                                <ul className="tp-about-expertise-list">
                                    <li><span><RightSymbol /></span>Permanent recruitment for fulltime IT positions</li>
                                    <li><span><RightSymbol /></span>Contract staffing with resources on our payroll</li>
                                    <li><span><RightSymbol /></span>Contract to hire for risk free evaluation</li>
                                    <li><span><RightSymbol /></span>Complete payroll and compliance management</li>
                                    <li><span><RightSymbol /></span>Quick team scaling and resource augmentation</li>
                                </ul>
                            </div>
                        </div>

                        {/* Growing Capability */}
                        <div className="col-lg-6 mb-50">
                            <div className="tp-about-expertise-card tp-about-expertise-secondary">
                                <div className="tp-about-expertise-header">
                                    <div className="tp-about-expertise-badge secondary">Growing Capability</div>
                                    <h3 className="tp-about-expertise-title">
                                        <i className="fa-solid fa-code"></i>
                                        Project-Based Development
                                    </h3>
                                </div>
                                <p className="tp-about-expertise-intro">
                                    Leveraging our network of skilled professionals, we also undertake select development projects for clients who need complete execution support. <strong>We're continuously building our product engineering capabilities as we grow.</strong>
                                </p>
                                <h5 className="tp-about-expertise-subtitle">Our development services include:</h5>
                                <ul className="tp-about-expertise-list">
                                    <li><span><RightSymbol /></span>Web and mobile application development</li>
                                    <li><span><RightSymbol /></span>Cloud solutions and DevOps implementation</li>
                                    <li><span><RightSymbol /></span>UI/UX design and modernization</li>
                                    <li><span><RightSymbol /></span>Quality assurance and testing</li>
                                    <li><span><RightSymbol /></span>Custom enterprise software</li>
                                    <li><span><RightSymbol /></span>Software product engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="tp-about-commitment-section pt-80 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="tp-about-commitment-wrapper">
                                <div className="tp-about-commitment-icon">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <h3 className="tp-about-commitment-title">Our Commitment</h3>
                                <p className="tp-about-commitment-text">
                                    We believe in being upfront about our strengths. When you need <strong>IT talent</strong>, we deliver with confidence and speed. When you need <strong>project development</strong>, we'll assess feasibility and recommend whether we're the right fit for your needs.
                                </p>
                                <div className="tp-about-commitment-cta">
                                    <Link className="tp-btn tp-btn-lg" href="/contact">
                                        Start a Conversation
                                        <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                    <Link className="tp-btn tp-btn-outline" href="/service-details/1">
                                        Explore Our Services
                                        <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContentArea;
