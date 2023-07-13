import PropTypes from "prop-types";
import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

Gallery.propTypes = {
  item: PropTypes.object,
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

function Gallery(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { item } = props;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="gallery__box">
        <Image src={item.img} alt="ICOLand" />
        <div className="wrap-video">
          <a className="popup-youtube" onClick={() => setButtonPopup(true)}>
            <span className="icon-play"></span>
          </a>
        </div>
        <div className="content">
          <h5 className="title">{item.title}</h5>
          <p className="category">{item.category}</p>
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
  );
}

export default Gallery;
