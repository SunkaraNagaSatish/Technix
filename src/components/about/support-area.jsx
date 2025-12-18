import VideoPopup from "@/src/modals/video-popup";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


import support_img_1 from "@assets/img/about/home-3/img-1.jpg";
import support_img_2 from "@assets/img/about/home-3/img-2.jpg";
import support_img_3 from "@assets/img/about/home-3/img-3.jpg";
import support_shape from "@assets/img/about/home-3/shape-1.png";

const support_contact = {
   sub_title_1: "Building Digital Success",
   sub_title_2: "Through Expertise, Innovation & Integrity",
   info: <>Purnavi IT Solutions Pvt. Ltd. delivers high-quality IT solutions, project-based development, and specialized workforce hiring for businesses worldwide.</>,
   journey: <>Founded to bridge the gap between talent and technology, we pair reliable project execution with transparent communication and measurable accountability for every engagement.</>,
   values_intro: "What we stand for is clear, consistent, and repeatable across every project:",
   lists: [
      {
         title: "Reliability",
         description: "We take complete ownership of outcomes, uphold processes, and keep commitments."
      },
      {
         title: "Quality",
         description: "Every design, line of code, and deployment follows a structured quality framework."
      },
      {
         title: "Innovation",
         description: "Modern, scalable, and efficient solutions that keep our clients ahead of change."
      },
      {
         title: "Integrity",
         description: "Honesty, accountability, and ethical practices are the foundation of how we operate."
      },
   ]

}
const { sub_title_1, sub_title_2, info, journey, values_intro, lists } = support_contact

const SupportArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="tp-support-breadcrumb fix pt-70 pb-5">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                        <span className="tp-section-title__pre">
                           About <span className="title-pre-color">Purnavi IT</span>
                           <AngleArrow />
                        </span>
                        <h3 className="tp-section-title">
                           {sub_title_1}
                           <span className="title-color">
                              {sub_title_2}
                           </span>
                           <span className="title-left-shape">
                              <LineArrowTwo />
                           </span>
                        </h3>
                        <p>{info}</p>
                        <p>{journey}</p>
                        <p className="tp-support-intro">{values_intro}</p>
                        <div className="row gy-4 mb-65">
                           {lists.map((item, i) =>
                              <div key={i} className="col-sm-6">
                                 <div className="tp-support-value">
                                    <h5><span><RightSymbol /></span>{item.title}</h5>
                                    <p>{item.description}</p>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="tp-support-breadcrumb-btn mb-30">
                           <Link className="tp-btn" href="/contact">Share Your Requirements</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-about-3-img p-relative fadeRight">
                        <Image src={support_img_1} alt="theme-pure" />
                        <Image className="shape-1" src={support_img_2} alt="theme-pure" />
                        <div className="shape-2 p-relative">
                           <Image src={support_img_3} alt="theme-pure" />
                           <div className="tp-video-play">
                              <a className="popup-video"
                                 onClick={() => setIsVideoOpen(true)}
                              ><i className="fa-sharp fa-solid fa-play"></i></a>
                           </div>
                        </div>
                        <Image className="shape-3" src={support_shape} alt="theme-pure" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"dGcsHMXbSOA"}
         />
         {/* video modal end */}
      </>
   )
}
export default SupportArea;