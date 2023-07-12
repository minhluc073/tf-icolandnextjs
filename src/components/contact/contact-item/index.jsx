import PropTypes from "prop-types";

Contact.propTypes = {
  item: PropTypes.object,
};

function Contact(props) {
  const { item } = props;

  return (
    <li>
      <div className="icon">
        <span className={`${item.classAction}`}></span>
      </div>
      <h5 className="fs-20">{item.content}</h5>
    </li>
  );
}

export default Contact;
