import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Feature.propTypes = {
  item: PropTypes.object,
};

function Feature(props) {
  const { item } = props;

  return (
    <div
      className="col-xl-3 col-md-6"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="features-box-5 center">
        <div className="icon">
          <Image src={item.img} alt="Icoland" />
        </div>
        <div className="features-box-content">
          <Link href="#" className="h5 title">
            {item.title}
          </Link>
          <p className="fs-15">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
