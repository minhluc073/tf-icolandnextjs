import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataRoadmap from "../data/data-roadmap";
import dataChart from "../data/data-chart";
import dataTeam from "../data/data-team";
import dataPartner from "../data/data-partner";
import dataBlog from "../data/data-blog";
import dataFaq from "../data/data-faq";
import Banner from "../components/banner/banner-v5";
import Header from "../components/header/header-v4";
import About from "../components/about/home-defi1";
import Feature from "../components/features/features-v4";
import Roadmap from "../components/roadmap/roadmap-v5";
import Token from "../components/allo-dist/allo-dist-v2";
import Team from "../components/team/team-v5";
import Partner from "../components/partner/partner-v2";
import Blog from "../components/blog/blog-v2";
import Faq from "../components/faq/faq-v1";
import Footer from "../components/footer/footer-v5";
import Gotop from "../components/gotop";

function HomeDefi1(props) {
  return (
    <div className="home-defi-1">
      <Header />
      <Banner />
      <About data={dataAbout} />
      <Feature data={dataFeature} />
      <Roadmap data={dataRoadmap} />
      <Token data={dataChart} />
      <Team data={dataTeam} />
      <Partner data={dataPartner} />
      <Blog data={dataBlog} />
      <Faq data={dataFaq} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default HomeDefi1;
