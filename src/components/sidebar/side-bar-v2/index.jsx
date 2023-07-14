import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../blog/styles.scss';

import img1 from '../../../assets/images/blog/blog-main-08.jpg'
import img2 from '../../../assets/images/blog/blog-main-09.jpg'
import img3 from '../../../assets/images/blog/blog-main-10.jpg'


function Sidebar(props) {

    const [dataCategory] = useState([
        {
            id: 1,
            name: 'Blockchain',
            link: '#'
        },
        {
            id: 2,
            name: 'Cryptocurrency',
            link: '#'
        },
        {
            id: 3,
            name: 'Technology',
            link: '#'
        },
    ])

    const [dataRecenpost] = useState([
        {
            id: 1,
            img: img1,
            category: 'TRENDS',
            title: 'September Most-Loved Best Selling Fall Pieces'
        },
        {
            id: 2,
            img: img2,
            category: 'TRENDS',
            title: 'The Knit Top Is The Perfect Fall Top To Layer Under.'
        },
        {
            id: 3,
            img: img3,
            category: 'TRENDS',
            title: 'My Go To Retailer To Find Show-Stopping Fall'
        },
    ])
    
    const [dataTag] = useState([
        {
            id: 1,
            name: 'Bitcoin',
            link: '#'
        },
        {
            id: 2,
            name: 'Ethereum',
            link: '#'
        },
        {
            id: 3,
            name: 'Released',
            link: '#'
        },
        {
            id: 4,
            name: 'Released',
            link: '#'
        },
        {
            id: 5,
            name: 'Coin',
            link: '#'
        },
        {
            id: 6,
            name: 'ICO',
            link: '#'
        },
        {
            id: 7,
            name: 'Tokens',
            link: '#'
        },
    ])
    return (
    <div className="sidebar">
        <div className="widget widget-search">
            <form action="#">
                <input type="text" placeholder="Search Keyword" required="" />
                <button><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0885 16.9109L14.306 13.1283C15.2585 11.9217 15.8327 10.4026 15.8327 8.75008C15.8327 4.84425 12.6552 1.66675 8.74935 1.66675C4.84352 1.66675 1.66602 4.84425 1.66602 8.75008C1.66602 12.6559 4.84352 15.8334 8.74935 15.8334C10.4027 15.8334 11.921 15.2601 13.1277 14.3067L16.9102 18.0893C17.0727 18.2518 17.286 18.3334 17.4993 18.3334C17.7127 18.3334 17.926 18.2518 18.0885 18.0893C18.4144 17.7634 18.4144 17.2367 18.0885 16.9109ZM3.33268 8.75008C3.33268 5.76342 5.76268 3.33342 8.74935 3.33342C11.736 3.33342 14.166 5.76342 14.166 8.75008C14.166 11.7367 11.736 14.1667 8.74935 14.1667C5.76268 14.1667 3.33268 11.7367 3.33268 8.75008Z" fill="white"/>
                    </svg>
                </button>
            </form>
        </div>
        <div className="widget widget-category">
            <h5 className="widget-title">
                Categories
            </h5>
            <div className="content-widget">
                <ul className="">
                    {
                        dataCategory.map(item =>(
                            <li key={item.id}><div className="icon"></div><Link to={item.link}>{item.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="widget widget-recent">
            <h5 className="widget-title">
                Recent Posts
            </h5>
            <ul className="content-widget">
                {
                    dataRecenpost.map(item =>(
                        <li>
                            <div className="recent-blog-box">
                                <div className="image">
                                    <Link to="#"><img src={item.img} alt="" /></Link>
                                </div>
                                <div className="content">
                                    <Link to="#" className="category">{item.category}</Link>
                                    <Link to="#" className="h6 title">{item.title}</Link>
                                </div>
                            </div>
                        </li>

                    ))
                }
            </ul>

            </div>
            <div className="widget widget-tags">
                <h5 className="widget-title">
                    tags
                </h5>
                <div className="content-widget">
                {
                    dataTag.map(item =>(
                        <li key={item.id}><Link to={item.link}>{item.name}</Link></li>
                    ))
                }
            </div>
        </div>
    </div>
    );
}

export default Sidebar;