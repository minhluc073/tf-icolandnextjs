import React from "react";
import Blogitem from "../components/blog/blog-item7";
import dataBlog from "../data/data-blog";
import Link from "next/link";
import PageTitle from "../components/page-title";
import Header from "../components/header";
import Footer from "../components/footer/footer-v2";
import Sidebar from "../components/sidebar/side-bar-v2";
import Gotop from "../components/gotop";
function Blogv2(props) {
  return (
    <div className="home-blog backgroup-body">
      <Header />
      <PageTitle
        title="Blog Style 3"
        desc="Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue."
      />
      <section className="blog-page-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-page__main">
                <div className="main-content">
                  {dataBlog.slice(28, 31).map((item) => (
                    <Blogitem key={item.id} item={item} />
                  ))}
                  <ul className="pagination">
                    <li>
                      <Link href="#">1</Link>
                    </li>
                    <li className="active">
                      <Link href="#">2</Link>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33203 7H14.6654"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.83203 1.16699L14.6654 7.00033L8.83203 12.8337"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>

                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </div>
  );
}

export default Blogv2;
