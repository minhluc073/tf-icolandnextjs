import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Team2.propTypes = {
  item: PropTypes.object,
};

function Team2(props) {
  const { item } = props;

  return (
    <div className="team-box">
      <div className="team-box__image">
        <Image src={item.img} alt="ICOLand" style={{ height: "auto" }} />
        <ul className="list-social">
          {item.listsocial.map((icon) => (
            <li key={icon.id}>
              <Link href={icon.link}>
                <i className={icon.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="team-box__content">
        <Link href="#" className="h5 name fs-24">
          {item.name}
        </Link>
        <p className="position fs-17">{item.position}</p>
      </div>
    </div>
  );
}

export default Team2;
