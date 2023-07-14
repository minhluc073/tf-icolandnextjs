import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataRoadmap from "../data/data-roadmap";
import dataTokendetails from "../data/data-tokendeials";
import dataTeam from "../data/data-team";
import dataBlog from "../data/data-blog";
import dataPartner from "../data/data-partner";
import dataFaq from "../data/data-faq";
import Banner from "../components/banner/banner-v8";
import Header from "../components/header/header-v7";
import About from "../components/about/home-defi4";
import Feature from "../components/features/features-v7";
import Roadmap from "../components/roadmap/roadmap-v8";
import Tokendetails from "../components/token-details/token-details-v3";
import Token from "../components/token-details/token-v4";
import Team from "../components/team/team-v8";
import Blog from "../components/blog/blog-v5";
import Parner from "../components/partner/parter-v4";
import Faq from "../components/faq/faq-v7";
import Footer from "../components/footer/footer-v5";
import Gotop from "../components/gotop";

function HomeDefi4(props) {
  return (
    <div className="home-defi-4">
      <Header />
      <Banner />
      <About data={dataAbout} />
      <Feature data={dataFeature} />
      <Roadmap data={dataRoadmap} />
      <Tokendetails data={dataTokendetails} />
      <Token />
      <Team data={dataTeam} />
      <Blog data={dataBlog} />
      <Parner data={dataPartner} />
      <Faq data={dataFaq} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default HomeDefi4;
