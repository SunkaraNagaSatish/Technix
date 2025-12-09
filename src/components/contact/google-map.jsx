import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
                <div className="tp-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407064!2d78.26795846066224!3d17.412299800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709798734567!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;