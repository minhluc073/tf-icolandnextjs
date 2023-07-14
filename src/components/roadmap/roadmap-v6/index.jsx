import React, { useState } from "react";
import PropTypes from "prop-types";
import Roadmapitem from "../roadmap-item-v6";

Roadmap.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  subheading: "Road Map",
  desc: "We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies.",
  title: "What our Major goals",
};

function Roadmap(props) {
  const { data } = props;
 

  return (
    <section className="road-map style-5" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h6 className="sub-heading">{dataTitle.subheading}</h6>
              <h3 className="heading">{dataTitle.title}</h3>
              <p className="fs-20">{dataTitle.desc}</p>
            </div>

            <div className="road-map__main">
              {data.slice(31, 36).map((item) => (
                <Roadmapitem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
