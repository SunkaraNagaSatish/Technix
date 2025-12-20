import Link from 'next/link';
import Image from 'next/image'
import Count from '@/src/common/count';
import React, { useEffect, useRef, useState } from 'react';
import service_data from '@/src/data/service-data';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// svg icon
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import GreenRightArrow from '@/src/svg/green-right-arrow';

// fun fact shape
import fun_fact_shape_1 from "@assets/img/fun-fact/shape-1.png";
import fun_fact_shape_2 from "@assets/img/fun-fact/shape-2.png";
import fun_fact_shape_3 from "@assets/img/fun-fact/shape-3.png";
import fun_fact_shape_4 from "@assets/img/fun-fact/shape-4.png";
import fun_fact_shape_5 from "@assets/img/fun-fact/shadow.png";

import reload_img from "@assets/img/fun-fact/world.png";

// Service icons mapping
const serviceIcons = {
   1: "fa-solid fa-users", // Permanent IT Staffing
   2: "fa-solid fa-file-contract", // Contract Staffing
   3: "fa-solid fa-clipboard-check", // HR, Payroll & Compliance
   4: "fa-solid fa-code", // Project-Based Development
   // 10: "fa-solid fa-building", // Who We Are
   // 11: "fa-solid fa-cogs", // What We Do
   // 12: "fa-solid fa-award", // Why Choose Us
};

const counter_content = [
   // {
   //    id: 1,
   //    count: 10,
   //    info: "Experience",
   //    cls: "",
   //    cls_2: "purecounter",
   //    icon: "+",
   // },
   // {
   //    id: 2,
   //    count: 255,
   //    info: "square area",
   //    cls: "purecounter",
   //    cls_2: "",
   //    icon: "",
   // },
   // {
   //    id: 3,
   //    count: 310,
   //    info: "square area",
   //    cls: "purecounter",
   //    cls_2: "",
   //    icon: "",
   // },
]
const ServiceArea = () => {

   const setting = {
      type: 'slide',
      drag: 'free',
      pagination: false,
      arrows: false,
      perPage: 4,
      gap: '30px',
      breakpoints: {
         1800: {
            perPage: 4,
         },
         1500: {
            perPage: 4,
         },
         1200: {
            perPage: 3,
         },
         800: {
            perPage: 2,
         },
         566: {
            perPage: 1,
         },
      },
   }
   const splideRef = useRef(null);

   const [reloadClassName, setReloadClassName] = useState(null);
   useEffect(() => {
      const reload = document.getElementById('reload');
      setReloadClassName(reload);
   }, []);

   const scrollRotate = () => {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
   };

   useEffect(() => {
      if (reloadClassName !== null) {
         window.addEventListener('scroll', scrollRotate);
      }
      return () => {
         window.removeEventListener('scroll', scrollRotate);
      };
   }, [reloadClassName]);


   return (
      <>
         <div className="tp-service-funfact-box">

            <section className="tp-service-area pt-40 pb-30">
               <div className="container-fluid">
                  <div className="row">

                     <div className="col-lg-12">
                        <div className="tp-service-title-wrapper text-center">
                           <span className="tp-section-title__pre">
                              Comprehensive <span className="title-pre-color">IT Staffing & Development</span>
                              <AngleArrow />
                           </span>
                           <h3 className="tp-section-title">Our <i>Services</i>
                              <span className="title-center-shape">
                                 <LineArrowTwo />
                              </span>
                           </h3>
                        </div>
                     </div>

                     <div className="tp-service-slider-wrapper">
                        <Splide options={setting} ref={splideRef}
                           className="service-active splide">
                           {service_data.filter(item => ![10, 11, 12].includes(item.id)).map((item, i) =>
                              <SplideSlide key={i}>
                                 <div className="tp-service-wrapper tp-service-wrapper-no-img p-relative mb-55">
                                    <div className="tp-service-designation">
                                       <p>{item.alphabet}</p>
                                    </div>
                                    <h3 className="service-title">{item.title}</h3>
                                    <div className="tp-service-icon-box">
                                       <i className={serviceIcons[item.id] || "fa-solid fa-briefcase"}></i>
                                    </div>
                                    <p className="hide-text">{item.description}</p>
                                    <div className="tp-service-btn">
                                       <Link href={item.link ? item.link : `/service-details/${item.id}`}>
                                          {item.cta || "Read Out More"}
                                          <i className="fa-solid fa-arrow-up-right"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </SplideSlide>
                           )}
                        </Splide>
                     </div>

                  </div>

                  <div className="row">
                     <div className="col-lg-12">
                        <div className="tp-service-all-btn text-center fadeUp">
                           <Link className="tp-btn" href="/contact">Get Started Today</Link>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

            <section className="tp-fun-fact-area pt-40 pb-40 p-relative">
               <div className="container container-1400">

                  <div className="tp-fun-fact-shape">
                     <Image className="shape-1" src={fun_fact_shape_1} alt="theme-pure" />
                     <Image className="shape-2" src={fun_fact_shape_2} alt="theme-pure" />
                     <Image className="shape-3" src={fun_fact_shape_3} alt="theme-pure" />
                     <Image className="shape-4" src={fun_fact_shape_4} alt="theme-pure" />
                     {/* <Image className="shadow" src={fun_fact_shape_5} alt="theme-pure" /> */}
                  </div>

                  <div className="row">
                     <div className="col-lg-2 col-md-4">
                        <div className="tp-fun-fact-wrapper-box">
                           {counter_content.map((item, i) =>
                              <div key={i} className="tp-fun-fact-wrapper">
                                 <h3 className={`counter-title ${item.cls}`}>
                                    <span data-purecounter-duration="4" className="purecounter">
                                       <Count number={item.count} text={item.icon} />
                                    </span></h3>
                                 <p>{item.info}</p>
                              </div>
                           )}
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-8">
                        <div className="tp-fun-fact-thumb p-relative">
                           <Image id="reload" src={reload_img} alt="scroll" />
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-12">
                        <div className="tp-fun-fact-content">
                           <div className="tp-fun-fact-title-wrapper">
                              <span className="tp-section-title__pre">
                                 About <span className="title-pre-color">Purnavi IT</span>
                                 <AngleArrow />
                              </span>
                              <h3 className="tp-section-title">Building Digital Success
                                 <span className="title-left-shape">
                                    <LineArrowTwo />
                                 </span>
                              </h3>
                              <p>
                                 Through Expertise, Innovation & Integrity - delivering high-quality <br /> IT solutions and specialized workforce hiring for businesses worldwide.
                              </p>
                              <ul>
                                 <li>
                                    <span> <GreenRightArrow /></span>
                                    Reliability - We take full ownership of every project and assignment, ensuring processes are followed and commitments are met.
                                 </li>
                                 <li>
                                    <span><GreenRightArrow /> </span>
                                    Quality - Every line of code, design module, and deployment goes through a structured quality framework.
                                 </li>
                                 <li>
                                    <span><GreenRightArrow /> </span>
                                    Innovation - We focus on modern, scalable and efficient tech solutions that help businesses stay ahead.
                                 </li>
                                 <li>
                                    <span><GreenRightArrow /> </span>
                                    Integrity - Honesty, accountability, and ethical practices form the foundation of how we operate.
                                 </li>
                              </ul>
                              <div className="tp-fun-fact-btn">
                                 <Link className="tp-btn" href="/contact">Tell us How Can We Help</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

         </div>
      </>
   );
};

export default ServiceArea;