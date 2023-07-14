import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

About.propTypes = {
  item: PropTypes.object,
};

function About(props) {
  const { item } = props;

  return (
    <div className="icon-box">
      <div className="icon">
        <Image src={item.img} alt="Icoland" />
      </div>
      <div className="content">
        <h5>{item.title}</h5>
        <p className="fs-20">{item.content}</p>
      </div>
    </div>
  );
}

export default About;
