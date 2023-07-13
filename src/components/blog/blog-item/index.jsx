import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

Blog.propTypes = {
  item: PropTypes.object,
};

function Blog(props) {
  const { item } = props;

  return (
    <div className="col-md-4">
      <div className="blog-box">
        <div className="box-image">
          <Link href="blog-v3.html">
            <Image src={item.img} alt="ICOLand" />
          </Link>
        </div>
        <div className="box-content">
          <p className="meta">{item.meta}</p>
          <Link href="/blog-v3" className="h5 title">
            {item.title}
          </Link>
          <p className="text">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
