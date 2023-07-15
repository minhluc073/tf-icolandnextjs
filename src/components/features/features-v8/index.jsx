import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Featureitem from "../features-item2";

Feature.propTypes = {
  data: PropTypes.array,
};

const dataTile = {
  title: "FEATURES & APPLICATIONS",
};

function Feature(props) {
  const { data } = props;

  return (
    <div className="features style-6" id="features">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="block-text">
              <h2 className="heading">{dataTile.title}</h2>
            </div>
            <div className="features__content">
              {data.slice(4, 10).map((item) => (
                <Featureitem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="features__image">
              <Image
                src={require("../../../assets/images/layout/item-03.png")}
                alt="ICOLand"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
