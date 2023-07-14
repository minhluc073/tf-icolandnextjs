import PropTypes from "prop-types";
import Blogitem from "../blog-item3";
import Button2 from "../../button/button-st2";

Blog.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  subtitle: "Blog",
  title: "The Lastes News",
  desc: "Acurated directory of the best cryptocurrency resources. We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies. ",
};

function Blog(props) {
  const { data } = props;

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h6 className="sub-heading">{dataTitle.subtitle}</h6>
              <h3 className="heading">{dataTitle.title}</h3>
              <p className="fs-20">{dataTitle.desc}</p>
            </div>
          </div>

          {data.slice(6, 10).map((item) => (
            <Blogitem key={item.id} item={item} />
          ))}

          <div className="col-md-12">
            <div className="button-more center">
              <Button2 title="View more" addclass="style-3" path="/blog-v3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
