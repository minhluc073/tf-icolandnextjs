import PropTypes from "prop-types";
import Image from "next/image";
import Roadmapitem from "../roadmap-item-v5";

Roadmap.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  desc: "The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate for transactions.",
  title: "Road map",
};

function Roadmap(props) {
  const { data } = props;

  return (
    <section className="road-map style-4 mobie-pb0" id="roadmap">
      <Image
        className="s1"
        src={require("../../../assets/images/layout/rm-1.png")}
        alt="ICOLand"
      />
      <Image
        className="s2"
        src={require("../../../assets/images/layout/rm-2.png")}
        alt="ICOLand"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h3 className="heading">{dataTitle.title}</h3>
              <p className="mt-16 fs-17">{dataTitle.desc}</p>
            </div>

            <div
              className="road-map__main"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {data.slice(15, 21).map((item) => (
                <Roadmapitem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
