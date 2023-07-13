import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

Documents.propTypes = {
  item: PropTypes.object,
};

function Documents(props) {
  const { item } = props;

  return (
    <div className="col-xl-3 col-md-6">
      <div className="document-box">
        <Link href="#" className="h5 title">
          {item.title}
        </Link>
        <Link href="#" className="download">
          <span className="icon-Group"></span>
          {item.text}
        </Link>
      </div>
    </div>
  );
}

export default Documents;
