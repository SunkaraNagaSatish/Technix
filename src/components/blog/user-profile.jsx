import { SocialLinksTwo } from '@/src/common/social-links';
import React from 'react';
import Image from 'next/image';

const UserProfile = () => {

    const post_box_content = {
        user_name: "Purnavi IT Solutions",
        designation: <>IT Staffing and Technology Partner</>,
        user_info: <>We specialize in connecting businesses with exceptional IT talent through permanent staffing, contract hiring, and complete workforce management solutions. Based in Hyderabad, India.</>
    }
    const { user_name, designation, user_info } = post_box_content


    return (
        <>
            <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-content">
                    <div className="sidebar__about sidebar__about-custom">
                        <div className="sidebar__company-icon text-center">
                            <div className="company-icon-wrapper">
                                <i className="fa-solid fa-building"></i>
                            </div>
                        </div>
                        <div className="sidebar__content text-center">
                            <div className="sidebar__content-title">
                                {user_name}
                            </div>
                            <span className="sidebar__content-designation">{designation}</span>
                            <p>{user_info}</p>
                            <div className="sidebar__content-social">
                                <SocialLinksTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;