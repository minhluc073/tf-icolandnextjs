import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import dataRoadmap from "../data/data-roadmap";
import Roadmap from "../components/roadmap/roadmap-v2";
import Roadmap2 from "../components/roadmap/roadmap-v1";
import Roadmap3 from "../components/roadmap/roadmap-v4";
import Roadmap4 from "../components/roadmap/roadmap-v5";
import Roadmap5 from "../components/roadmap/roadmap-v6";
import Roadmap6 from "../components/roadmap/roadmap-v3";
import Roadmap7 from "../components/roadmap/roadmap-v7";
import Roadmap8 from "../components/roadmap/roadmap-v8";
import Roadmap9 from "../components/roadmap/roadmap-v9";
import Gotop from "../components/gotop";

function Blogv1(props) {
  return (
    <div className="page-roadmap backgroup-body">
      <Header />
      <PageTitle
        title="Roadmap"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap2 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap3 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap4 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 5</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap5 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 6</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap6 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 7</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap7 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 8</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap8 data={dataRoadmap} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Roadmap - Style 9</h3>
            </div>
          </div>
        </div>
      </div>
      <Roadmap9 data={dataRoadmap} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Blogv1;
