import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

Roadmap.propTypes = {
  item: PropTypes.object,
};

function Roadmap(props) {
  const { item } = props;

  return (
    <div className={`box-roadmap ${item.classAction}`}>
      <div className="box-roadmap__top">
        <h6>
          <span>{item.title}</span>
          {item.title2}
        </h6>
        <div className={`shape ${item.classAction2}`}></div>
      </div>
      <div className="box-roadmap__main">
        <div className="text">
          <p>{item.desc}</p>
        </div>
        <Image
          src={item.img}
          alt="ICOLand"
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Roadmap;
