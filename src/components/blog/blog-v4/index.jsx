import PropTypes from "prop-types";
import Blogitem from "../blog-item4";
import Link from "next/link";

Blog.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "TOPICS",
  desc: "Read, watch and absorb the secrets that we publish is our official blog.",
  button: "Read All",
};

function Blog(props) {
  const { data } = props;

  return (
    <section className="topics mobie-pb0" id="topics">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="block-text">
              <h2 className="heading">{dataTitle.title}</h2>
              <p className="fs-20">{dataTitle.desc}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="button">
              <Link href="#">{dataTitle.button}</Link>
            </div>
          </div>

          {data.slice(10, 14).map((item) => (
            <Blogitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
