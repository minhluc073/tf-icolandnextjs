import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import dataAbout from "../data/data-about";
import About from "../components/about/home-v2";
import dataFeature from "../data/data-feature";
import Feature from "../components/features/features-v1";
import Feature2 from "../components/features/features-v3";
import Feature4 from "../components/features/features-v4";
import Feature5 from "../components/features/features-v5";
import Feature6 from "../components/features/features-v8";
import Feature7 from "../components/features/features-v6";
import About9 from "../components/about/about-st9";
import Gotop from "../components/gotop";

function ElFeature(props) {
  return (
    <div className="page-features backgroup-body">
      <Header />
      <PageTitle
        title="Features"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <About data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Feature data={dataFeature} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Feature2 data={dataFeature} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <Feature4 data={dataFeature} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 5</h3>
            </div>
          </div>
        </div>
      </div>
      <Feature5 data={dataFeature} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 6</h3>
            </div>
          </div>
        </div>
      </div>
      <Feature6 data={dataFeature} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 7</h3>
            </div>
          </div>
        </div>
      </div>
      <Feature7 data={dataFeature} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Features - Style 8</h3>
            </div>
          </div>
        </div>
      </div>
      <About9 data={dataAbout} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default ElFeature;
