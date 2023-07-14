import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Feature.propTypes = {
  item: PropTypes.object,
};

function Feature(props) {
  const { item } = props;

  return (
    <div className="featured-blog-box">
      <div className="image">
        <Link href="#">
          <Image src={item.img} alt="image" />
        </Link>
      </div>
      <div className="content">
        <Link href="#" className="h6 title">
          {item.title}
        </Link>
        <p className="fs-17">{item.desc}</p>
      </div>
    </div>
  );
}

export default Feature;
