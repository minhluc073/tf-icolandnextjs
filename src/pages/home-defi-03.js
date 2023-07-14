import React from "react";
import dataBanner from "../data/databanner";
import dataAbout from "../data/data-about";
import dataTeam from "../data/data-team";
import dataRoadmap from "../data/data-roadmap";
import dataFeature from "../data/data-feature";
import dataPartner from "../data/data-partner";
import dataBlog from "../data/data-blog";
import dataFaq from "../data/data-faq";
import Header from "../components/header/header-v6";
import Banner from "../components/banner/banner-v7";
import About from "../components/about/home-defi3";
import Team from "../components/team/team-v7";
import Roadmap from "../components/roadmap/roadmap-v7";
import Token from "../components/token-details/token-v3";
import Feature from "../components/features/features-v6";
import Parner from "../components/partner/parter-v3";
import Blog from "../components/blog/blog-v4";
import Faq from "../components/faq/faq-v6";
import Footer from "../components/footer/footer-v7";
import Gotop from "../components/gotop";

function HomeDefi3(props) {
  return (
    <div className="home-defi-3">
      <Header />
      <Banner data={dataBanner} />
      <About data={dataAbout} />
      <Team data={dataTeam} />
      <Roadmap data={dataRoadmap} />
      <Token />
      <Feature data={dataFeature} />
      <Parner data={dataPartner} />
      <Blog data={dataBlog} />
      <Faq data={dataFaq} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default HomeDefi3;
