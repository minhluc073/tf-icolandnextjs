import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Documents.propTypes = {
  item: PropTypes.object,
};

function Documents(props) {
  const { item } = props;

  return (
    <div className="box-document">
      <div className="content">
        <h4 className="title">{item.title}</h4>
        <Link href="#" className="icon">
          <Image src={item.img} alt="ICOLand" style={{ height: "auto" }} />
        </Link>
      </div>
    </div>
  );
}

export default Documents;
