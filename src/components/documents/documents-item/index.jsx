import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Documents.propTypes = {
  item: PropTypes.object,
};

function Documents(props) {
  const { item } = props;

  return (
    <div className="col-xl-3 col-md-6">
      <div className="document-box">
        <div className={`card-title ${item.classAction}`}>
          <Image src={item.img} alt="ICOLand" />
          <Link className="fs-16" href="/document">
            {item.title}
          </Link>
        </div>
        <div className="content">
          <Link href="/document#" className="title">
            {item.subtitle}
          </Link>
          <Link href="/document" className="download">
            <span className="icon-Group"></span>PDF
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Documents;
