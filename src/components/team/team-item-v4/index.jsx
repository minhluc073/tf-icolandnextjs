import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Team2.propTypes = {
  item: PropTypes.object,
};

function Team2(props) {
  const { item } = props;

  return (
    <div
      className="col-xl-3 col-md-6"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="team-box-s3">
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
    </div>
  );
}

export default Team2;
