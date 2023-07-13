import dataAbout from "../data/data-about";
import dataFeature from "../data/data-feature";
import dataRoadmap from "../data/data-roadmap";
import dataChart from "../data/data-chart";
import Banner from "../components/banner/banner-v5";
import Header from "../components/header/header-v4";
import About from "../components/about/home-defi1";
import Feature from "../components/features/features-v4";
import Roadmap from "../components/roadmap/roadmap-v5";

function HomeDefi1(props) {
  return (
    <div className="home-defi-1">
      <Header />
      <Banner />
      <About data={dataAbout} />
      <Feature data={dataFeature} />
      <Roadmap data={dataRoadmap} />
      {/* <Token data={dataToken}/> */}
    </div>
  );
}

export default HomeDefi1;
