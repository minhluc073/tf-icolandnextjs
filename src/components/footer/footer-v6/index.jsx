import Image from "next/image";
import PropTypes from "prop-types";
import Footeritem from "../footer-item";

Footer.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  copyright: "Copyright 2023 ICOLAND @ All right reserved",
};

function Footer(props) {
  const { data } = props;

  return (
    <footer className="footer style-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="info">
              <Image
                src={require("../../../assets/images/logo/logo03.png")}
                alt="ICOLand"
              />
              <p className="fs-20">{dataTitle.copyright}</p>
              <ul className="list-social">
                <li>
                  <span className="icon-twitter"></span>
                </li>
                <li>
                  <span className="icon-facebook"></span>
                </li>
                <li>
                  <span className="icon-place"></span>
                </li>
                <li>
                  <span className="icon-youtobe"></span>
                </li>
                <li>
                  <span className="icon-tiktok"></span>
                </li>
                <li>
                  <span className="icon-reddit"></span>
                </li>
              </ul>
            </div>
          </div>
          {data.map((item) => (
            <Footeritem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
