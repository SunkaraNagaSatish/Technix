import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import service_details_thumb from "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from "@assets/img/services/service-details/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import service_data from '@/src/data/service-data';

const ServiceDetailsArea = ({ service }) => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   // Default to first service if no service is provided (fallback)
   const currentService = service || service_data[0];

   return (
      <>
         <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-2">
                     <div className="tp-service-widget">

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="mb-30">
                           <Link href="/" className="tp-btn-border">
                              <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
                           </Link>
                        </div>
                        {/* <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                        </div> */}
                        <h3 className="tp-service-details-title">{currentService.detail_title}</h3>
                        <div className="tp-service-details-desc">
                           {currentService.detail_description}
                        </div>
                        {/* <div className="row">
                           <div className="col-lg-6">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                                 <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2"
                                       onClick={() => setIsVideoOpen(true)}
                                    ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">

                                 <ul>
                                    {currentService.detail_features && currentService.detail_features.map((feature, i) =>
                                       <li key={i}><span> <RightSymbol /></span>{feature}</li>
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
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

export default ServiceDetailsArea;