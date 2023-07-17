import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import dataPartner from "../data/data-partner";
import Partner from "../components/partner/partner-v2";
import Partner2 from "../components/partner/partner-v1";
import Partner3 from "../components/partner/partner-v3";
import Partner4 from "../components/partner/partner-v4";
import Gotop from "../components/gotop";
function About1(props) {
  return (
    <div className="page-partner backgroup-body">
      <Header />
      <PageTitle
        title="Partner"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Partner - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Partner data={dataPartner} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Partner - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Partner2 data={dataPartner} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Partner - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Partner3 data={dataPartner} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Partner - Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <Partner4 data={dataPartner} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default About1;
