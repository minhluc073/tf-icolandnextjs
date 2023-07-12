import PropTypes from "prop-types";
import Roadmapitem from "../roadmap-item-v2";

const dataRoadmap = {
  title: "Roadmap",
  subtitle:
    "The most technologically advanced species will not stop any time soon...",
};

Roadmap.propTypes = {
  data: PropTypes.array,
};

function Roadmap(props) {
  const { data } = props;
  //   const [dataRoadmap] = useState({
  //     title: "Roadmap",
  //     subtitle:
  //       "The most technologically advanced species will not stop any time soon...",
  //   });

  return (
    <section className="road-map style-1" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="block-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="heading">{dataRoadmap.title}</h3>
              <p>{dataRoadmap.subtitle}</p>
            </div>

            <div className="road-map__content">
              {data.slice(7, 11).map((item) => (
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
