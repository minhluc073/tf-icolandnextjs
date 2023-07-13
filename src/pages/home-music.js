import dataBanner from "../data/databanner";
import dataFeature from "../data/data-feature";
import dataToken from "../data/datatoken";
import dataRoadmap from "../data/data-roadmap";
import dataGallery from "../data/data-gallery";
import dataTeam from "../data/data-team";
import dataBlog from "../data/data-blog";
import dataFaq from "../data/data-faq";
import Header from "../components/header/header-v3";
import Banner from "../components/banner/banner-v4";
import About from "../components/about/home-v4";
import Feature from "../components/features/features-v3";
import Token from "../components/token-details/token-v1";
import Roadmap from "../components/roadmap/roadmap-v4";
import Gallery from "../components/gallery/gallery-v1";
import Team from "../components/team/team-v4";
import Blog from "../components/blog/blog-v1";
import Community from "../components/community";
import Faq from "../components/faq/faq-v4";
import Footer from "../components/footer/footer-v4";
import Gotop from "../components/gotop";

function HomeMusic(props) {
  return (
    <div className="home-music backgroup-body">
      <Header />
      <Banner data={dataBanner} />
      <About />
      <Feature data={dataFeature} />
      <Token data={dataToken} />
      <Roadmap data={dataRoadmap} />
      <Gallery data={dataGallery} />
      <Team data={dataTeam} />
      <Blog data={dataBlog} />
      <Community />
      <Faq data={dataFaq} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default HomeMusic;
