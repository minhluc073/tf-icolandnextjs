import PropTypes from "prop-types";
import DocumentItem from "../documents-item3";

Documents.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Document",
  subtitle:
    "Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.",
};

function Documents(props) {
  const { data } = props;
  return (
    <section className="documents style-3" id="documents">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h2 className="heading">{dataTitle.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {data.slice(8, 12).map((item) => (
            <DocumentItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Documents;
