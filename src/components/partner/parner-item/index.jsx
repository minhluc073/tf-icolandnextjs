import PropTypes from "prop-types";
import Image from "next/image";

Parner.propTypes = {
  item: PropTypes.object,
};

function Parner(props) {
  const { item } = props;

  return <Image src={item.img} alt="ICOLand" />;
}

export default Parner;
