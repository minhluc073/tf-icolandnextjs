import dataBannerSwiper from "../data/databannerswiper";
import dataPartner from "../data/data-partner";
import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataDocument from "../data/data-document";
import dataRoadmap from "../data/data-roadmap";
import dataTeam from "../data/data-team";
import dataFaq from "../data/data-faq";
import Header from "../components/header/header-v2";
import Banner from "../components/banner/banner-v3";
import Partner from "../components/partner/parner-v1";
import About from "../components/about/home-v3";
import Feature from "../components/features/features-v2";
import Documents from "../components/documents/documents-v3";
import Roadmap from "../components/roadmap/roadmap-v3";
import Team from "../components/team/team-v3";
import Faq from "../components/faq/faq-v3";
import Footer from "../components/footer/footer-v3";
import Gotop from "../components/gotop";

function HomeNft2(props) {
  return (
    <div className="home-nft-v2">
      <Header />
      <Banner data={dataBannerSwiper} />
      <Partner data={dataPartner} />
      <About data={dataAbout} />
      <Feature data={dataFeature} />
      <Documents data={dataDocument} />
      <Roadmap data={dataRoadmap} />
      <Team data={dataTeam} />
      <Faq data={dataFaq} />
      <Footer />
      <Gotop />
    </div>
  );
}
export default HomeNft2;
