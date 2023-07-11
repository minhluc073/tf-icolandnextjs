import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataRoadmap from "../data/data-roadmap";
import dataTokendetails from "../data/data-tokendeials";
import Header from "../components/header";
import Banner from "../components/banner/banner-v1";
import About from "../components/about/home-v1";
import Feature from "../components/features/features-v1";
import Allodist from "../components/allo-dist";
import Roadmap from "../components/roadmap/roadmap-v1";
import Tokendetails from "../components/token-details/token-details-v1";

function Home1() {
  return (
    <div className="home-main backgroup-body">
      <Header />
      <Banner />
      <About data={dataAbout} />
      <Feature data={dataFeature} />
      <Allodist />
      <Roadmap data={dataRoadmap} />
      <Tokendetails data={dataTokendetails} />
    </div>
  );
}

export default Home1;
