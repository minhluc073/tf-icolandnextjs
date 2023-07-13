import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";
import Image from "next/image";

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
              <i className="far fa-times"></i>
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
  const [buttonPopup, setButtonPopup] = useState(false);
  const [dataTitle] = useState({
    subtitle: "About us",
    title: "What is ICOLAND?",
    desc: "ICOLAND offers music artists the ability to connect with each other along with investors and digitally exchange NFTs for their creations within a sustainable and powerful tokenomics system running on the blockchain, giving access to a world of opportunities for those with a passion tied to the entertaining values of music and performance arts.",
  });

  return (
    <section className="about style-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="about__video">
              <div className="wrap-video">
                <Image
                  src={require("../../../assets/images/background/bg-video.jpg")}
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
          <div className="col-xl-6 col-md-12">
            <div className="about__content">
              <h6 className="sub-title">{dataTitle.subtitle}</h6>
              <h3 className="title">{dataTitle.title}</h3>
              <p className="text">{dataTitle.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
