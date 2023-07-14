import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

Blog.propTypes = {
    item: PropTypes.object,
};

function Blog(props) {
    const {item} = props;

    return (
        <div className="blog-box">
            <div className="image">
                <Image src={item.img} alt="ICOLand" />
            </div>
            <div className="content">
                <ul className="meta">
                    <li className="category"><Link href="#">{item.category}</Link></li>
                    <li className="time"><Link href="#">{item.time}</Link></li>
                </ul>
                <Link href="#" className="title">{item.title}</Link>
                <p className="text">{item.text}</p>
            </div>
        </div>
    );
}

export default Blog;