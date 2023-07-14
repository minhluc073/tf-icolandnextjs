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
    <div className="team-box-9">
      <div className="team-box__image">
        <Link href="#">
          <Image src={item.img} alt="ICOLand" />
        </Link>
      </div>
      <div className="team-box__content">
        <Link href="#" className="title">
          {item.title}
          <span className="icon-twitter"></span>
        </Link>

        <p className="positon">{item.positon}</p>
      </div>
    </div>
  );
}

export default Team;
