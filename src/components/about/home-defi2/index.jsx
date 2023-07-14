import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import AboutItem from "../about-item5";
import ReactPlayer from "react-player/youtube";

About.propTypes = {
  data: PropTypes.array,
};

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="overlay" onClick={() => props.setTrigger(false)}></div>
      <div className="popup-inner">
        <div className="popup-inner-content">
          <div className="mfp-iframe-scaler">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=i7EMACWuErA"
              playing={false}
              controls={false}
              className="popup-youtube"
            >
              <span className="icon-play"></span>
            </ReactPlayer>
            <button
              className="close-btn"
              onClick={() => props.setTrigger(false)}
            >
              <i class="far fa-times"></i>
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

function About(props) {
  const { data } = props;
  const [buttonPopup, setButtonPopup] = useState(false);

  const [dataTitle] = useState({
    subtitle: "About us",
    title: "Why choose ICOLand?",
  });

  return (
    <section className="about style-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="about__video">
              <div className="wrap-video">
                <Image
                  src={require("../../../assets/images/background/ab-video.jpg")}
                  alt="ICOLand"
                />
                <a
                  className="popup-youtube"
                  onClick={() => setButtonPopup(true)}
                >
                  <span className="icon-play"></span>
                </a>
              </div>
            </div>
            <Popup
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
              className="popup-youtube"
            >
              <span className="icon-play">abc</span>
            </Popup>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="about__content">
              <div className="block-text">
                <h6 className="sub-title">{dataTitle.subtitle}</h6>
                <h3 className="title">{dataTitle.title}</h3>
              </div>
              <div
                className="list-icon-box"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.slice(6, 9).map((item) => (
                  <AboutItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
