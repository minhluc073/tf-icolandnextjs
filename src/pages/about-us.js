import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import About from "../components/about/home-v1";
import dataAbout from "../data/data-about";
import About2 from "../components/about/home-v2";
import About3 from "../components/about/home-v4";
import About4 from "../components/about/home-defi1";
import About5 from "../components/about/pg-about";
import About6 from "../components/about/home-v3";
import About7 from "../components/about/home-defi3";
import About8 from "../components/about/home-defi4";
import About9 from "../components/about/about-st9";
import Gotop from "../components/gotop";

function About1(props) {
  return (
    <div className="page-about backgroup-body">
      <Header />
      <PageTitle
        title="About Us"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <About data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <About2 data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <About3 />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <About4 data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 5</h3>
            </div>
          </div>
        </div>
      </div>
      <About5 data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 6</h3>
            </div>
          </div>
        </div>
      </div>
      <About6 data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 7</h3>
            </div>
          </div>
        </div>
      </div>
      <About7 data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 8</h3>
            </div>
          </div>
        </div>
      </div>
      <About8 data={dataAbout} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>About Us - Style 9</h3>
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

export default About1;
