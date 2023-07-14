import Image from "next/image";

const Modal = ({
  clickImage,
  handleRotationRight,
  setClickImage,
  handleRotationLeft,
}) => {
  const handleClickk = (e) => {
    if (e.target.classList.contains("hide")) {
      setClickImage(null);
    }
  };
  const handleClickk2 = (e) => {
    setClickImage(null);
  };
  const handleClickk3 = (e) => {
    setClickImage(null);
  };
  return (
    <>
      <div className="popup-gallery" onClick={handleClickk}>
        <span className="hide" onClick={handleClickk2}>
          <i className="far fa-times"></i>
        </span>
        <div className="overlay-popup" onClick={handleClickk3}></div>
        <div className="popup-inner">
          <div className="popup-inner-content">
            <Image src={clickImage} alt="img" />
            <div className="right" onClick={handleRotationRight}>
              <i className="far fa-long-arrow-right"></i>
            </div>
            <div className="left" onClick={handleRotationLeft}>
              <i className="far fa-long-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
