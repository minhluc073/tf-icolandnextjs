import PropTypes from "prop-types";
import Link from "next/link";


Button.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

function Button(props) {
  const { title, path, onClick, addclass } = props;
  return (
    <Link className={`btn-action ${addclass}`} href={path} onClick={onClick}>
      <span className="effect">{title}</span>
    </Link>
  );
}

export default Button;
