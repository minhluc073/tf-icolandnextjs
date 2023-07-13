import dataBanner from "../data/databanner";
import Header from "../components/header/header-v3";
import Banner from "../components/banner/banner-v4";
import About from "../components/about/home-v4";

function HomeMusic(props) {
  return (
    <div className="home-music backgroup-body">
      <Header />
      <Banner data={dataBanner} />
      <About />
    </div>
  );
}

export default HomeMusic;
