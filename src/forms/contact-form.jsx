import React from "react";

const ContactForm = () => {
  return (
    <>
      <form id="contact-form" onClick={(e) => e.preventDefault()} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="company"
                type="text"
                placeholder="Company Name*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phone"
                type="text"
                placeholder="Phone Number*"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <select name="interest" className="nice-select" required style={{ width: '100%', height: '60px', border: '1px solid #e5e5e5', padding: '0 20px', borderRadius: '0', marginBottom: '20px', color: '#687077' }}>
                <option value="" disabled selected>I'm Interested In*</option>
                <option value="Permanent Staffing">Permanent Staffing</option>
                <option value="Contract Staffing">Contract Staffing</option>
                <option value="HR & Payroll Management">HR & Payroll Management</option>
                <option value="Project Development">Project Development</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Tell Us About Your Requirements*"
                required
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
