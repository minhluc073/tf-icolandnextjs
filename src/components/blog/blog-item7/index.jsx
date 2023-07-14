import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Blog.propTypes = {
  item: PropTypes.object,
};

function Blog(props) {
  const { item } = props;

  return (
    <div className="blog-box">
      <div className="image">
        <Image src={item.img} alt="ICOLand" />
      </div>
      <div className="content">
        <ul className="meta">
          <li className="category">
            <Link href="#">{item.category}</Link>
          </li>
        </ul>
        <Link href="#" className="h3 title">
          {item.title}
        </Link>
        <ul className="meta">
          <li className="user">
            <Link href="#">{item.user}</Link>
          </li>
          <li className="time">
            <Link href="#">{item.time}</Link>
          </li>
        </ul>
        <p className="text">{item.text}</p>
        <Link href="#" className="readmore">
          {item.readmore}
        </Link>
      </div>
    </div>
  );
}

export default Blog;
