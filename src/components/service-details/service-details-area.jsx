import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import service_data from '@/src/data/service-data';

// Hero images for different service types
const heroImages = {
   1: '/assets/img/services/hero-staffing.png',      // Permanent IT Staffing
   2: '/assets/img/services/hero-staffing.png',      // Contract Staffing
   3: '/assets/img/services/hero-hr.png',            // HR & Compliance
   4: '/assets/img/services/hero-development.png',   // Project Development
   10: '/assets/img/services/hero-about.png',        // Who We Are
   11: '/assets/img/services/hero-development.png',  // What We Do
   12: '/assets/img/services/hero-staffing.png',     // Why Choose Us
};

// Theme classes for different service types
const serviceThemes = {
   1: 'service-theme-staffing',
   2: 'service-theme-staffing',
   3: 'service-theme-hr',
   4: 'service-theme-development',
   10: 'service-theme-about',
   11: 'service-theme-development',
   12: 'service-theme-staffing',
};

const ServiceDetailsArea = ({ service }) => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   // Default to first service if no service is provided (fallback)
   const currentService = service || service_data[0];
   const heroImage = heroImages[currentService.id] || heroImages[1];
   const themeClass = serviceThemes[currentService.id] || 'service-theme-staffing';

   return (
      <>
         <div className={themeClass}>
            <section className="tp-service-details-area pt-120 pb-120">
               {/* Floating dots decoration */}
               <div className="floating-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>

               {/* Tech grid pattern */}
               <div className="tech-grid-pattern"></div>

               <div className="container">
                  <div className="row">
                     <div className="col-lg-2">
                        <div className="tp-service-widget"></div>
                     </div>

                     <div className="col-lg-8">
                        <div className="tp-service-details-wrapper">
                           {/* Back button */}
                           <div className="mb-30">
                              <Link href="/" className="tp-btn-border">
                                 <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
                              </Link>
                           </div>

                           {/* Hero Image */}
                           <div className="service-hero-image">
                              <img src={heroImage} alt={currentService.detail_title} />
                           </div>

                           {/* Service Title */}
                           <h3 className="tp-service-details-title">
                              {currentService.detail_title}
                           </h3>

                           {/* Service Description */}
                           <div className="tp-service-details-desc">
                              {currentService.detail_description}
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-2"></div>
                  </div>
               </div>
            </section>
         </div>

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