import React, { useState } from "react";
import PropTypes from "prop-types";
import Tokenitem from "../token-details-item";
import Image from "next/image";

Tokendetails.propTypes = {
  data: PropTypes.array,
};

const dataToken = {
  title: "ICO Token Details",
  subtitle:
    "Join the industry leaders to discuss where the markets are heading. We accept token payments.",
};

function Tokendetails(props) {
  const { data } = props;
  //   const [dataToken] = useState({
  //     title: "ICO Token Details",
  //     subtitle:
  //       "Join the industry leaders to discuss where the markets are heading. We accept token payments.",
  //   });

  return (
    <section className="token-details style-1" id="token">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h3>{dataToken.title}</h3>
              <p className="mt-12">{dataToken.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row mt-25">
          <div className="col-md-6">
            <div
              className="infomation"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <ul className="info-list">
                {data.slice(0, 6).map((item) => (
                  <Tokenitem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="token-details__image">
              <Image
                src={require("../../../assets/images/layout/tokendetails.png")}
                alt="image"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokendetails;
