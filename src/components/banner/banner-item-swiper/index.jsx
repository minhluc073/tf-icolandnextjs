import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

Banner.propTypes = {
  item: PropTypes.object,
};

function Banner(props) {
  const { item } = props;

  return <Image src={item.img} alt="ICOLand" style={{ height: "auto" }} />;
}

export default Banner;
