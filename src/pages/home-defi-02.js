import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataTokendetails from "../data/data-tokendeials";
import dataRoadmap from "../data/data-roadmap";
import dataTeam from "../data/data-team";
import dataFaq from "../data/data-faq";
import dataBlog from "../data/data-blog";
import dataFooter from "../data/data-footer";
import Banner from "../components/banner/banner-v6";
import Header from "../components/header/header-v5";
import About from "../components/about/home-defi2";
import Feature from "../components/features/features-v5";
import Tokendetails from "../components/token-details/token-details-v2";
import Roadmap from "../components/roadmap/roadmap-v6";
import Token from "../components/token-details/token-v2";
import Team from "../components/team/team-v6";
import Faq from "../components/faq/faq-v5";
import Blog from "../components/blog/blog-v3";
import Footer from "../components/footer/footer-v6";
import Gotop from "../components/gotop";

function HomeDefi2(props) {
  return (
    <div className="home-defi-2">
      <Header />
      <Banner />
      <About data={dataAbout} />
      <Feature data={dataFeature} />
      <Tokendetails data={dataTokendetails} />
      <Roadmap data={dataRoadmap} />
      <Token />
      <Team data={dataTeam} />
      <Faq data={dataFaq} />
      <Blog data={dataBlog} />
      <Footer data={dataFooter} />
      <Gotop />
    </div>
  );
}

export default HomeDefi2;
