import PropTypes from "prop-types";
import Roadmapitem from "../roadmap-item-v4";

Roadmap.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  subtitle: "Milestones",
  title: "Road map",
};

function Roadmap(props) {
  const { data } = props;
  // const [dataTitle] = useState(
  //     {
  //         subtitle: 'Milestones',
  //         title: 'Road map',
  //     }
  // )

  return (
    <section className="road-map style-3 mobie-pb0" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h6 className="sub-heading">{dataTitle.subtitle}</h6>
              <h3 className="heading">{dataTitle.title}</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="road-map__main"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {data.slice(27, 31).map((item) => (
          <Roadmapitem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
