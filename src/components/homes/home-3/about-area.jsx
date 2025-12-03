import Image from 'next/image';
import Link from "next/link";
import React,{useState} from 'react';
import AngleArrow from '@/src/svg/angle-arrow';
import VideoPopup from '@/src/modals/video-popup';
// about img import here
import about_img_1 from "@assets/img/about/home-3/shape-4.png";
import about_img_2 from "@assets/img/about/home-3/img-1.jpg";
import about_img_3 from "@assets/img/about/home-3/img-2.jpg";
import about_img_4 from "@assets/img/about/home-3/img-3.jpg";
// about shape import here
import about_shape_1 from "@assets/img/about/home-3/shape-1.png";
import about_shape_2 from "@assets/img/about/home-3/shape-2.png";
import about_shape_3 from "@assets/img/about/home-3/shape-3.png"; 
// import progressbar   
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1.png";
import about_img_10 from "@assets/img/business/shape-5.png";


const AboutArea = ({about}) => {
    const percentage = 50;
    const percentage2 = 75;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    const aboutHeroCopy = {
        strapline: "We build and support practical web and mobile solutions for growing businesses.",
        intro: "We also provide project‑ready engineers on our payroll, so you can add capacity without increasing headcount.",
        pillars: [
            {
                title: "Project Delivery",
                text: "From first brief to go‑live, we take care of design, build, and rollout with realistic timelines."
            },
            {
                title: "People On Payroll",
                text: "Developers, testers, designers, and cloud specialists who stay on our payroll and plug into your team."
            },
            {
                title: "How We Work",
                text: "Simple updates, one point of contact, and a focus on stable, fast, and maintainable systems."
            }
        ],
        assurance: "Less noise, more work done — with a team you can reach and rely on.",
        contact: {
            closing: "Kind Regards,",
            name: "Asish Makineni",
            role: "Co-Founder & CEO - SOCIAL AUCTUS",
            mobile: "+91 9381736309",
            email: "asish@social.auctus.com",
            location: "Hyderabad, India",
            website: "www.socialauctus.com"
        }
    };

    return (
        <>
            <section className={`${about ? "tp-about-breadcrumb pt-100 pb-90" : "tp-about-3-area pt-185 pb-170"} p-relative`}>
                {about ? 
                <div className="tp-about-3-shape d-none d-lg-block">
                    <Image src={about_img_10} alt="theme-pure" />
                </div>
                :
                <div className="shape-bg">
                    <Image src={about_img_1} alt="theme-pure" />
                </div> 
               }                
                <div className="container">
                <div className="row">
                    {about ?  
                    <div className="col-lg-6">
                        <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                            <Image src={about_img} alt="theme-pure" />
                        </div> 
                    </div>  
                    :  
                    <div className="col-lg-6">
                        <div className="tp-about-3-img p-relative fadeLeft">
                            <Image src={about_img_2} alt="theme-pure" />
                            <Image className="shape-1" src={about_img_3} alt="theme-pure" />
                            <div className="shape-2 p-relative">
                            <Image src={about_img_4} alt="theme-pure" />
                            <div className="tp-video-play">
                                <a className="popup-video" 
                                onClick={() => setIsVideoOpen(true)}>
                                    <i className="fa-sharp fa-solid fa-play"></i>
                                </a>
                            </div>
                            </div>
                            <Image className="shape-3" src={about_shape_1} alt="theme-pure" />
                            <Image className="shape-4" src={about_shape_2} alt="theme-pure" />
                            <Image className="shape-5" src={about_shape_3} alt="theme-pure" />
                        </div>
                    </div>
                    }

                    <div className="col-lg-6">
                        <div className="tp-about-3-wrapper">
                            <div className="tp-about-3-title-wrapper"> 
                                <span className="tp-section-title__pre">
                                    {about ? (
                                        <>About <span className="title-pre-color">Purnavi IT Solutions Pvt. Ltd.</span></>
                                    ) : (
                                        <>about <span className="title-pre-color">IT Solutions</span></>
                                    )}
                                    <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">
                                    {about ? (
                                        <>Transforming Ideas into <span className="title-color">Digital Excellence</span></>
                                    ) : (
                                        <>Best Digital <span className="title-color">Technology</span> <br /> Agency For People</>
                                    )}
                                </h3> 
                            </div>
                            {about ? (
                                <div className="tp-about-3-copy-stack">
                                    <p className="text mb-20">{aboutHeroCopy.strapline}</p>
                                    <p className="tp-about-3-copy mb-25">{aboutHeroCopy.intro}</p>
                                    <div className="tp-about-3-pillars">
                                        {aboutHeroCopy.pillars.map((pillar, idx) => (
                                            <div key={idx} className="tp-about-3-pillar">
                                                <h4>{pillar.title}</h4>
                                                <p className="tp-about-3-pillar-text">
                                                    {pillar.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="tp-about-3-copy mb-0">
                                        {aboutHeroCopy.assurance}
                                    </p>
                                </div>
                            ) : (
                                <p className="text">
                                    Transmax is the world’s driving worldwide coordinations supplier — we <br /> uphold industry and exchange the worldwide trade of merchandise <br /> through land transport.
                                </p>
                            )}
                            {!about && (
                                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20">
                                    <div className="tp-about-3-progressbar d-flex align-items-center">
                                        <div className="circular tl-progress"> 
                                            <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth={5}   
                                            className="knob"
                                            />
                                        </div>
                                        <div className="tp-about-3-progressbar-title">
                                            <p>Business <br /> Strategy Growth</p>
                                        </div>
                                    </div>
                                    <div className="tp-about-3-progressbar d-flex align-items-center">
                                        <div className="circular tl-progress"> 
                                            <CircularProgressbar
                                            value={percentage2}
                                            text={`${percentage2}%`}
                                            strokeWidth={5} 
                                            />
                                        </div>
                                        <div className="tp-about-3-progressbar-title">
                                            <p>Health Valuable <br /> Ideas</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="tp-about-3-btn-inner d-flex flex-wrap">
                            <div className="tp-about-btn ">
                                {about ? (
                                    <Link className="tp-btn" href="/contact">Hire Our Team 
                                        <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                ) : (
                                    <Link className="tp-btn" href="/about">Our History 
                                        <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                )}
                            </div>
                            <div className="tp-about-3-year">
                                {about ? (
                                    <div className="tp-about-3-contact-card">
                                        <Link className="tp-about-link" href="/contact">Join Our Workforce</Link>
                                        <p className="mb-5">{aboutHeroCopy.contact.closing}</p>
                                        <p className="tp-about-contact-name">
                                            {aboutHeroCopy.contact.name}
                                            <br />
                                            <span>{aboutHeroCopy.contact.role}</span>
                                        </p>
                                        <ul className="tp-about-contact-details">
                                            <li><span>Mobile:</span> {aboutHeroCopy.contact.mobile}</li>
                                            <li><span>Email:</span> {aboutHeroCopy.contact.email}</li>
                                            <li><span>Location:</span> {aboutHeroCopy.contact.location}</li>
                                            <li><span>Website:</span> {aboutHeroCopy.contact.website}</li>
                                        </ul>
                                    </div>
                                ) : (
                                    <p>
                                        BRENDON GARREY
                                        <br />
                                        <span>
                                            mayor, since 21st Oct , 2019
                                        </span>
                                    </p>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                {about && (
                    <div className="row tp-about-progressbar-row pt-40">
                        <div className="col-md-6">
                            <div className="tp-about-3-progressbar d-flex align-items-center justify-content-center">
                                <div className="circular tl-progress"> 
                                    <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={5}   
                                    className="knob"
                                    />
                                </div>
                                <div className="tp-about-3-progressbar-title ms-3">
                                    <p>Project Delivery <br /> Confidence</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-about-3-progressbar d-flex align-items-center justify-content-center">
                                <div className="circular tl-progress"> 
                                    <CircularProgressbar
                                    value={percentage2}
                                    text={`${percentage2}%`}
                                    strokeWidth={5} 
                                    />
                                </div>
                                <div className="tp-about-3-progressbar-title ms-3">
                                    <p>Workforce Readiness <br /> Index</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </section>

         {/* video modal start */}
        <VideoPopup 
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"csnD5EVL5z8"}
        />
      {/* video modal end */}
        </>
    );
};

export default AboutArea;