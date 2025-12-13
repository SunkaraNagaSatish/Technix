import Link from 'next/link';
import React from 'react';

const tags_data = [
    { id: 1, tag: "IT Staffing", Link: "#" },
    { id: 2, tag: "Recruitment", Link: "#" },
    { id: 3, tag: "Contract Hiring", Link: "#" },
    { id: 4, tag: "Payroll", Link: "#" },
    { id: 5, tag: "Cloud Solutions", Link: "#" },
    { id: 6, tag: "Web Development", Link: "#" },
    { id: 7, tag: "Mobile Apps", Link: "#" },
    { id: 8, tag: "HR Compliance", Link: "#" },
]

const Tags = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Popular Topics</h3>
                <div className="sidebar__widget-content">
                    <div className="tagcloud">
                        {tags_data.map((item, i) => <Link href="#" key={i}>{item.tag}</Link>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tags;