import Link from 'next/link';
import React from 'react';

const category_data = [
    { id: 1, category: "IT Staffing", items: "05" },
    { id: 2, category: "Workforce Management", items: "04" },
    { id: 3, category: "Technology Trends", items: "06" },
    { id: 4, category: "Talent Acquisition", items: "03" },
    { id: 5, category: "Project Development", items: "04" },
]
const Category = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Categories</h3>
                <div className="sidebar__widget-content">
                    <ul>
                        {category_data.map((item, i) => <li key={i}><Link href="/blog">{item.category}<span>{item.items}</span></Link></li>)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Category;