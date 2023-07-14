import PropTypes from "prop-types";
import Blogitem from "../blog-item2";

Blog.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Latest Blog Posts",
  desc: "Read, watch and absorb the secrets that we publish is our official blog.",
};

function Blog(props) {
  const { data } = props;

  return (
    <section className="blog mobie-pb0" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h3 className="heading">{dataTitle.title}</h3>
              <p className="fs-17">{dataTitle.desc}</p>
            </div>
          </div>

          {data.slice(3, 6).map((item) => (
            <Blogitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
