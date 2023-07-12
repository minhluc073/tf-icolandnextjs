import dataBannerSwiper from "../data/databannerswiper";
import Header from "../components/header/header-v2";
import Banner from "../components/banner/banner-v3";

function HomeNft2(props) {
  return (
    <div className="home-nft-v2">
      <Header />
      <Banner data={dataBannerSwiper} />
    </div>
  );
}
export default HomeNft2;
