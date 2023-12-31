import React, { useState } from "react";
import PropTypes from "prop-types";
import Blogitem from "../blog-item";

Blog.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Latest News",
  subtitle: "Blog",
};

function Blog(props) {
  const { data } = props;
  //   const [dataTitle] = useState({
  //     title: "Latest News",
  //     subtitle: "Blog",
  //   });

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h6 className="sub-heading">{dataTitle.subtitle}</h6>
              <h3 className="heading">{dataTitle.title}</h3>
            </div>
          </div>
          {data.slice(0, 3).map((item) => (
            <Blogitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
