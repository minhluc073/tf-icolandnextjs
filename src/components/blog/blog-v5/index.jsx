import PropTypes from "prop-types";
import Blogitem from "../blog-item5";
import Link from "next/link";

Blog.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Latest blog posts",
  subtitle:
    "Read, watch and absorb the secrets that we publish is our official blog.",
  button: "Read More",
};

function Blog(props) {
  const { data } = props;

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="block-text">
              <h3 className="heading">{dataTitle.title}</h3>
              <p className="fs-17">{dataTitle.subtitle}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="button">
              <Link href="/blog-v3">{dataTitle.button}</Link>
            </div>
          </div>

          {data.slice(14, 17).map((item) => (
            <Blogitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
