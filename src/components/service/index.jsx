import React, { useState } from "react";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import ServiceArea from "./service-area";
import VideoArea from "@/src/common/video-area";
import IndustryArea from "@/src/common/industry-area";
import BrandArea from "@/src/common/brand-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import AngleArrow from "@/src/svg/angle-arrow";

const Sevice = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for reaching out! Our team will get back to you soon.');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        comments: ''
      });
    }, 1500);
  };

  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Clients" page_title="Clients" />
        <ServiceArea />
        <VideoArea service={true} />
        <IndustryArea service={true} />
        <BrandArea service={true} />

        {/* Registration Form Section */}
        <section id="register-form" className="register-form-area pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-header text-center mb-50">
                  <span className="tp-section-title__pre">
                    Get in <span className="title-pre-color">Touch</span>
                    <AngleArrow />
                  </span>
                  <h3 className="tp-section-title">
                    Connect with <span className="title-color">us</span>
                  </h3>
                  <p className="mt-15">Fill out the form below and we'll get back to you shortly</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="register-form-wrapper">
                  {submitMessage && (
                    <div className="submit-success-message mb-30">
                      <i className="fa-solid fa-circle-check"></i>
                      <p>{submitMessage}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="company">Company Name *</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-25">
                        <div className="form-group">
                          <label htmlFor="comments">Comments</label>
                          <textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleInputChange}
                            placeholder="Tell us about your requirements..."
                            rows="5"
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-20">
                        <button
                          type="submit"
                          className="register-submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fa-solid fa-spinner fa-spin"></i> Submitting...
                            </>
                          ) : (
                            <>
                              Submit <i className="fa-solid fa-arrow-right"></i>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
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

export default Sevice;

