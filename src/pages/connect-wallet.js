import React from "react";
import dataWallet from "../data/data-wallet";
import PageTitle from "../components/page-title";
import Walletitem from "../components/connect-wallet";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import Gotop from "../components/gotop";

const dataTitle = {
  title: "Connect your wallet",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
};

function Connectwallet(props) {
 
  return (
    <div className="home-blog backgroup-body button-top-style">
      <Header />
      <PageTitle
        title="Connect Wallet"
        desc="Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue."
      />
      <section className="connect">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text center">
                <h3 className="heading">{dataTitle.title}</h3>
                <p className="text">{dataTitle.subtitle}</p>
              </div>
            </div>
            {dataWallet.map((item) => (
              <Walletitem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </div>
  );
}

export default Connectwallet;
