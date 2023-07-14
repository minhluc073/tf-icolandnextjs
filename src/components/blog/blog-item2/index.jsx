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
    <div
      className="col-xl-4 col-md-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="blog-box">
        <div className="box-image">
          <Link href="blog-v1.html">
            <Image src={item.img} alt="ICOLand" />
          </Link>
        </div>
        <div className="box-content">
          <Link href="#" className="category">
            {item.category}
          </Link>
          <Link href="/blogdetail" className="h5 title">
            {item.title}
          </Link>
          <p className="text">{item.content}</p>
          <div className="meta">
            <div className="avt">
              <Link href="#">
                <Image src={item.avt} alt="ICOLand" />
              </Link>
            </div>
            <div className="right">
              <Link href="#" className="h6 name">
                {item.name}
              </Link>
              <ul className="list">
                {item.list.map((text) => (
                  <li key={text.id}>
                    <Link href={text.link}>{text.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
