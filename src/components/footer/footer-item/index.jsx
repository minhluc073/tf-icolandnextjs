import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

Footer.propTypes = {
  item: PropTypes.object,
};

function Footer(props) {
  const { item } = props;

  return (
    <div className="col-xl-2 col-md-6">
      <div className={`footer-link ${item.classAction}`}>
        <h5 className="title">{item.title}</h5>
        <ul className="list-link">
          {item.listlink.map((text) => (
            <li key={text.id}>
              <Link href={text.link}>{text.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
