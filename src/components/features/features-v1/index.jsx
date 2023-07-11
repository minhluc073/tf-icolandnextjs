import PropTypes from "prop-types";
import Featureitem from "../features-item";

Feature.propTypes = {
  data: PropTypes.array,
};
const dataFeature = {
  title: "Why Choose Our Token?",
  subtitle:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official",
};

function Feature(props) {
  const { data } = props;
  //

  return (
    <section className="features style-2  mobie-pb0" id="features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h3 className="title">{dataFeature.title}</h3>
              <p className="fs-17 mt-12">{dataFeature.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {data.slice(0, 4).map((item) => (
            <Featureitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
