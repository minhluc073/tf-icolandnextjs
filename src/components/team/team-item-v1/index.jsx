import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Team.propTypes = {
  item: PropTypes.object,
};

function Team(props) {
  const { item } = props;

  return (
    <div className="col-xl-3 col-md-6">
      <div className="team-box-6">
        <div className="team-box__image">
          <Link href="#">
            <Image src={item.img} alt="ICOLand" />
          </Link>
        </div>
        <div className="team-box__content">
          <Link href="#">
            <span className="icon-twitter"></span>
          </Link>
          <Link href="#" className="h5 title">
            {item.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Team;
