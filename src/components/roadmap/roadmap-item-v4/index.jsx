import PropTypes from "prop-types";

Roadmap.propTypes = {
  item: PropTypes.object,
};

function Roadmap(props) {
  const { item } = props;

  return (
    <div className="box-roadmap">
      <div className="icon"></div>
      <h5 className="title">{item.title}</h5>
      <ul className="list">
        {item.list.map((text) => (
          <li key={text.id}>
            <span className="icon-roadmap"></span> <p>{text.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Roadmap;
