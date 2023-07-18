import React from "react";
import PropTypes from "prop-types";

Icon.propTypes = {
  item: PropTypes.object,
};

function Icon(props) {
  const { item } = props;

  return (
    <div className="icon">
      <span className={`${item.classAction}`}></span>
      <h6 className="name">{item.name}</h6>
    </div>
  );
}

export default Icon;
