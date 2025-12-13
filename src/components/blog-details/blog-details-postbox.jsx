import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tags from '../blog/tags';
import Category from '../blog/category';
import SearchArea from '../blog/search-area';
import RecentPost from '../blog/recent-post';
import UserProfile from '../blog/user-profile';
import CommentForm from '@/src/forms/comment-form';


import thumb_1 from "@assets/img/blog/details/blog-1.jpg";
import thumb_2 from "@assets/img/blog/details/blog-2.jpg";
import thumb_3 from "@assets/img/blog/details/blog-3.jpg";

import quate from "@assets/img/blog/details/quate.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import VideoPopup from '@/src/modals/video-popup';

const single_post_details = {
   thumb: thumb_1,
   comments: "Insights",
   upload_time: "6 min Read",
   title_1: <>Why Contract Staffing is Transforming the IT Industry</>,
   des_1: <>The IT industry is undergoing a fundamental shift in how companies approach talent acquisition and workforce management. With technology evolving rapidly and project requirements becoming increasingly specialized, traditional hiring methods are no longer sufficient to meet the dynamic needs of modern businesses. Contract staffing has emerged as a strategic solution that offers flexibility, access to specialized skills, and cost efficiency.</>,
   des_2: <>Organizations across India are recognizing that contract staffing allows them to quickly scale their teams based on project demands. Whether it's a six month development project or an ongoing support requirement, contract professionals bring immediate value without the long term commitments and overhead costs associated with permanent hires.</>,
   des_3: <>At Purnavi IT Solutions, we understand the nuances of IT staffing and have developed a comprehensive approach to matching the right talent with the right opportunities. Our extensive network of vetted professionals, combined with our deep understanding of technical requirements, enables us to provide staffing solutions that truly make a difference for our clients.</>,
   quate_icon: quate,
   blockquote: <>The future of work is flexible. Companies that embrace contract staffing gain a competitive advantage by accessing top talent exactly when they need it, without the constraints of traditional employment models.</>,
   writer: "Purnavi IT Solutions",
   title_2: <>Key Benefits of Partnering with an IT Staffing Company</>,
   postbox_list: [
      {
         id: 1,
         active: "",
         title: "Access to a pre-vetted pool of skilled IT professionals",
         icon: <RightSymbol />
      },
      {
         id: 2,
         active: "active",
         title: "Reduced time to hire and faster project kickoffs",
         icon: <RightSymbol />
      },
      {
         id: 3,
         active: "",
         title: "Complete payroll and compliance management handled for you",
         icon: <RightSymbol />
      },
      {
         id: 4,
         active: "",
         title: "Flexibility to scale teams up or down based on project needs",
         icon: <RightSymbol />
      },
      {
         id: 5,
         active: "",
         title: "Risk mitigation with replacement guarantees and quality assurance",
         icon: <RightSymbol />
      },
   ],
   thumb_list: thumb_2,
   video_thumb: thumb_3,
   title_3: <>"Building Your Dream Team with the Right Staffing Partner"</>,
   des_4: <>Whether you are looking for permanent IT professionals, contract developers, or complete project teams, choosing the right staffing partner is crucial. Look for a partner who understands your industry, has a proven track record, and offers transparent communication throughout the engagement. At Purnavi IT Solutions, we pride ourselves on being more than just a staffing agency. We are your strategic partner in building high performing technology teams.</>,
   tags: ["IT Staffing", "Recruitment", "Contract Hiring", "Workforce"],
}
const { thumb, comments, upload_time, title_1, des_1, des_2, des_3, quate_icon, blockquote, writer, title_2, postbox_list, thumb_list, video_thumb, title_3, des_4, tags } = single_post_details
const BlogDetailsPostbox = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="postbox__area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper">
                        <article className="postbox__item format-image mb-50 transition-3">
                           <div className="postbox__thumb m-img">
                              <Image src={thumb} alt="IT Staffing Solutions" />
                           </div>
                           <div className="postbox__content">
                              <div className="postbox__meta">
                                 <span><i className="fa-light fa-briefcase"></i>{comments}</span>
                                 <span><Link href="#"><i className="fa-regular fa-clock"></i>{upload_time}</Link></span>
                              </div>
                              <h3 className="postbox__title">{title_1}</h3>
                              <div className="postbox__text">
                                 <p>{des_1}</p>
                                 <p>{des_2}</p>
                                 <p>{des_3}</p>
                                 <div className="postbox__blockquote p-relative">
                                    <div className="postbox__blockquote-shape">
                                       <Image src={quate_icon} alt="quote" />
                                    </div>
                                    <blockquote>
                                       <p>{blockquote}</p>
                                       <cite>{writer}</cite>
                                    </blockquote>
                                 </div>

                                 <div className="postbox__list">
                                    <h3 className="postbox__list-title">{title_2}</h3>
                                    <div className="row">
                                       <div className="col-xl-7 col-lg-12">
                                          <div className="postbox__list-content">
                                             <ul>
                                                {postbox_list.map((item, i) =>
                                                   <li key={i}><span className={item.active}>{item.icon}
                                                   </span>{item.title}
                                                   </li>

                                                )}
                                             </ul>
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-12">
                                          <div className="posbox__list-img">
                                             <Image src={thumb_list} alt="IT Team" />
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="postbox__thumb m-img p-relative">
                                    <Image src={video_thumb} alt="Staffing Solutions" />
                                    <div className="tp-video-play play-btn text-center">
                                       <a className="popup-video"
                                          onClick={() => setIsVideoOpen(true)}
                                       ><i className="fa-sharp fa-solid fa-play"></i></a>
                                    </div>
                                    <span className="postbox-details-desc-thumb-caption">{title_3} </span>
                                 </div>
                                 <p>{des_4}</p>

                                 <div className="postbox__details-share-wrapper">
                                    <div className="row">
                                       <div className="col-lg-7">
                                          <div className="postbox__details-tag tagcloud">
                                             <span>Topics:</span>
                                             {tags.map((tag, i) => <Link href="#" key={i}>{tag}</Link>)}
                                          </div>
                                       </div>
                                       <div className="col-lg-5">
                                          <div className="postbox__details-share text-lg-end">
                                             <span>Share:</span>
                                             <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                             <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </article>

                        {/* Contact CTA instead of comments */}
                        <div className="postbox__contact-cta mb-50" style={{
                           background: 'linear-gradient(135deg, #020C1B 0%, #0a1929 100%)',
                           padding: '40px',
                           borderRadius: '16px',
                           textAlign: 'center'
                        }}>
                           <h3 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '24px' }}>
                              Need IT Staffing Solutions?
                           </h3>
                           <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px' }}>
                              Let us help you find the right talent for your projects. Contact our team today.
                           </p>
                           <Link href="/contact" className="tp-btn">
                              Get In Touch
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper">
                        <UserProfile />
                        <SearchArea />
                        <RecentPost />
                        <Category />
                        <Tags />
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"EW4ZYb3mCZk"}
         />
      </>
   );
};

export default BlogDetailsPostbox;