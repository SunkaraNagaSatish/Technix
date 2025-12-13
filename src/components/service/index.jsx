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
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentLocation: '',
    preferredLocation: '',
    noticePeriod: '',
    currentCTC: '',
    expectedCTC: '',
    skills: '',
    linkedIn: '',
    resume: null
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

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for registering! Our team will review your profile and get back to you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        currentLocation: '',
        preferredLocation: '',
        noticePeriod: '',
        currentCTC: '',
        expectedCTC: '',
        skills: '',
        linkedIn: '',
        resume: null
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
                    Register Your <span className="title-pre-color">Profile</span>
                    <AngleArrow />
                  </span>
                  <h3 className="tp-section-title">
                    Submit Your <span className="title-color">Details</span>
                  </h3>
                  <p className="mt-15">Fill out the form below to join our talent network</p>
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
                          <label htmlFor="fullName">Full Name *</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
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
                          <label htmlFor="experience">Total Experience *</label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Experience</option>
                            <option value="fresher">Fresher</option>
                            <option value="1-2">1-2 Years</option>
                            <option value="2-4">2-4 Years</option>
                            <option value="4-6">4-6 Years</option>
                            <option value="6-10">6-10 Years</option>
                            <option value="10+">10+ Years</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="currentLocation">Current Location *</label>
                          <input
                            type="text"
                            id="currentLocation"
                            name="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleInputChange}
                            placeholder="e.g., Hyderabad"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="preferredLocation">Preferred Location</label>
                          <input
                            type="text"
                            id="preferredLocation"
                            name="preferredLocation"
                            value={formData.preferredLocation}
                            onChange={handleInputChange}
                            placeholder="e.g., Bangalore, Remote"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mb-25">
                        <div className="form-group">
                          <label htmlFor="noticePeriod">Notice Period</label>
                          <select
                            id="noticePeriod"
                            name="noticePeriod"
                            value={formData.noticePeriod}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Notice Period</option>
                            <option value="immediate">Immediate</option>
                            <option value="15days">15 Days</option>
                            <option value="30days">30 Days</option>
                            <option value="60days">60 Days</option>
                            <option value="90days">90 Days</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 mb-25">
                        <div className="form-group">
                          <label htmlFor="currentCTC">Current CTC (LPA)</label>
                          <input
                            type="text"
                            id="currentCTC"
                            name="currentCTC"
                            value={formData.currentCTC}
                            onChange={handleInputChange}
                            placeholder="e.g., 8 LPA"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mb-25">
                        <div className="form-group">
                          <label htmlFor="expectedCTC">Expected CTC (LPA)</label>
                          <input
                            type="text"
                            id="expectedCTC"
                            name="expectedCTC"
                            value={formData.expectedCTC}
                            onChange={handleInputChange}
                            placeholder="e.g., 12 LPA"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-25">
                        <div className="form-group">
                          <label htmlFor="skills">Key Skills *</label>
                          <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            placeholder="e.g., Java, React, AWS, Docker"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="linkedIn">LinkedIn Profile</label>
                          <input
                            type="url"
                            id="linkedIn"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/yourprofile"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="form-group">
                          <label htmlFor="resume">Upload Resume * (PDF, DOC, DOCX)</label>
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            required
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
                              Register Your Profile <i className="fa-solid fa-arrow-right"></i>
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

