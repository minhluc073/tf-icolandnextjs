import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import dataTokendetails from "../data/data-tokendeials";
import Tokendetails from "../components/token-details/token-details-v1";
import Tokendetails2 from "../components/token-details/token-details-v2";
import Tokendetails3 from "../components/token-details/token-details-v3";
import Gotop from "../components/gotop";

function About1(props) {
  return (
    <div className="page-about backgroup-body">
      <Header />
      <PageTitle
        title="Token Sales"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Token Sales - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Tokendetails data={dataTokendetails} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Token Sales - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Tokendetails2 data={dataTokendetails} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Token Sales - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Tokendetails3 data={dataTokendetails} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default About1;
