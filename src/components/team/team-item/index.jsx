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
      <div className="team-box">
        <div className="team-box__image">
          <Link href="/team">
            <Image src={item.img} alt="ICOLand" />
          </Link>
        </div>
        <div className="team-box__info">
          <Link href="/team" className="name h5">
            {item.name}
          </Link>
          <p className="position">{item.position}</p>
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
      </div>
    </div>
  );
}

export default Team;
