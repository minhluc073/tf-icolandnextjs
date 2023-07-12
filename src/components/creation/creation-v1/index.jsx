import PropTypes from "prop-types";
import Creationtitem from "../creation-item";

Creation.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Creation",
  subtitle:
    "The most technologically advanced species will not stop any time soon...",
};

function Creation(props) {
  const { data } = props;

  return (
    <section className="creation mobie-pb0" id="creation">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="block-text center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="title">{dataTitle.title}</h3>
              <p className="desc">{dataTitle.subtitle}</p>
            </div>
            <div className="creation__main">
              {data.map((item) => (
                <Creationtitem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creation;
