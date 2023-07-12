import dataBanner from "../data/databanner";
import dataAbout from "../data/data-about";
import dataRoadmap from "../data/data-roadmap";
import dataCreation from "../data/data-creation";
import dataDocument from "../data/data-document";
import dataFaq from "../data/data-faq";
import Header from "../components/header/header-v1";
import Banner from "../components/banner/banner-v2";
import About from "../components/about/home-v2";
import Gotop from "../components/gotop";
import Roadmap from "../components/roadmap/roadmap-v2";
import Creation from "../components/creation/creation-v1";
import Documents from "../components/documents/documents-v2";
import Team from "../components/team/team-v2";
import Faq from "../components/faq/faq-v2";
import Contact from "../components/contact/contact-v2";
import Footer from "../components/footer/footer-v1";

function HomeNft(props) {
  return (
    <div className="home-nft backgroup-body">
      <Header />
      <Banner data={dataBanner} />
      <About data={dataAbout} />
      <Roadmap data={dataRoadmap} />
      <Creation data={dataCreation} />
      <Documents data={dataDocument} />
      <Team />
      <Faq data={dataFaq} />
      <Contact />
      <Footer />
      <Gotop />
    </div>
  );
}

export default HomeNft;
