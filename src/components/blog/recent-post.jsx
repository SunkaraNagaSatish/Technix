import Link from 'next/link';
import React from 'react';

import thumb_1 from "@assets/img/blog/details/side-1.jpg";
import thumb_2 from "@assets/img/blog/details/side-2.jpg";
import thumb_3 from "@assets/img/blog/details/side-3.jpg";
import Image from 'next/image';
import Calendar from '@/src/svg/calendar';

const recent_post_data = [
    {
        id: 1,
        img: thumb_1,
        date: "December 10, 2024",
        title: <>Top Skills Every IT Professional Should Have in 2025</>,
    },
    {
        id: 2,
        img: thumb_2,
        date: "December 05, 2024",
        title: <>How to Find the Right Tech Talent for Your Startup</>,
    },
    {
        id: 3,
        img: thumb_3,
        date: "November 28, 2024",
        title: <>Understanding the Contract to Hire Model</>,
    },
]

const RecentPost = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Recent Insights</h3>
                <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                        {recent_post_data.map((item, i) =>
                            <div key={i} className="rc__post mb-20 d-flex align-items-center">
                                <div className="rc__post-thumb mr-20">
                                    <Link href="/blog-details"><Image src={item.img} alt="blog thumbnail" /></Link>
                                </div>
                                <div className="rc__post-content">
                                    <div className="rc__meta">
                                        <span><Calendar /> {" "}{item.date}</span>
                                    </div>
                                    <h3 className="rc__post-title">
                                        <Link href="/blog-details">{item.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPost;