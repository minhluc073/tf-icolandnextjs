import React from "react";
import dataFooter from "../data/data-footer";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import Footerst1 from "../components/footer/footer-v1";
import Footerst2 from "../components/footer/footer-v2";
import Footerst3 from "../components/footer/footer-v4";
import Footerst4 from "../components/footer/footer-v5";
import Footerst5 from "../components/footer/footer-v6";
import Footerst6 from "../components/footer/footer-v3";
import Footerst7 from "../components/footer/footer-v7";
import Gotop from "../components/gotop";

function ElFooter(props) {
  return (
    <div className="page-about backgroup-body">
      <Header />
      <PageTitle
        title="Footer"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst1 />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst2 />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst3 />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst4 />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 5</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst5 data={dataFooter} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 6</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst6 />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Footer Style 7</h3>
            </div>
          </div>
        </div>
      </div>
      <Footerst7 />
      <Footer />
      <Gotop />
    </div>
  );
}

export default ElFooter;
