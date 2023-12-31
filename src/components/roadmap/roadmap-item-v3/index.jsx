import PropTypes from "prop-types";

Roadmap.propTypes = {
  item: PropTypes.object,
};

function Roadmap(props) {
  const { item } = props;

  return (
    <div className="roadmap-box">
      <h2 className="time">{item.time}</h2>
      <h3 className="title">{item.title}</h3>
      <p className="fs-20">
        {item.desc1} <span>{item.title2}</span>
      </p>
      <p className="fs-20">{item.desc2}</p>
    </div>
  );
}

export default Roadmap;
