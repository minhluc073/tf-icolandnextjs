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
    <div className="team-box-7">
      <div className="team-box__image">
        <Link href="#">
          <Image src={item.img} alt="ICOLand" />
        </Link>
      </div>
      <div className="team-box__info">
        <Link href="#" className="name h5">
          {item.name}
        </Link>
        <p className="position fs-17">{item.position}</p>
        <ul className="list-social">
          {item.listsocial.map((icon) => (
            <li key={icon.id}>
              <Link href={icon.link}>
                <span className={icon.icon}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team2;
