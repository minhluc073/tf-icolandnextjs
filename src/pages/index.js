import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataRoadmap from "../data/data-roadmap";
import dataTokendetails from "../data/data-tokendeials";
import dataTeam from "../data/data-team";
import dataFaq from "../data/data-faq";
import dataDocument from "../data/data-document";
import dataContact from "../data/data-contact";
import Header from "../components/header";
import Banner from "../components/banner/banner-v1";
import About from "../components/about/home-v1";
import Feature from "../components/features/features-v1";
import Allodist from "../components/allo-dist";
import Roadmap from "../components/roadmap/roadmap-v1";
import Tokendetails from "../components/token-details/token-details-v1";
import Team from "../components/team/team-v1";
import Faq from "../components/faq/faq-v1";
import Documents from "../components/documents/documents-v1";
import Contact from "../components/contact/contact-v1";
import Footer from "../components/footer/footer-v2";
import Gotop from "../components/gotop";

function HomeOne() {
  return (
    <>
      <div className="home-main backgroup-body">
        <Header />
        <Banner />
        <About data={dataAbout} />
        <Feature data={dataFeature} />
        <Allodist />
        <Roadmap data={dataRoadmap} />
        <Tokendetails data={dataTokendetails} />
        <Team data={dataTeam} />
        <Faq data={dataFaq} />
        <Documents data={dataDocument} />
        <Contact data={dataContact} />
        <Footer />
        <Gotop />
      </div>
    </>
  );
}

export default HomeOne;
