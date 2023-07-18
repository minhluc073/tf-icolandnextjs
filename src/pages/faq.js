import React from "react";
import dataFaq from "../data/data-faq";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import Faq from "../components/faq/faq-v1";
import Faq2 from "../components/faq/faq-v2";
import Faq3 from "../components/faq/faq-v4";
import Faq4 from "../components/faq/faq-v6";
import Faq5 from "../components/faq/faq-v8";
import Gotop from "../components/gotop";
function ElFaq(props) {
  return (
    <div className="page-faq backgroup-body">
      <Header />
      <PageTitle
        title="FaQs"
        desc="Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>FaQs - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Faq data={dataFaq} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>FaQs - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Faq2 data={dataFaq} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>FaQs - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Faq3 data={dataFaq} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>FaQs - Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <Faq4 data={dataFaq} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>FaQs - Style 5</h3>
            </div>
          </div>
        </div>
      </div>
      <Faq5 data={dataFaq} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default ElFaq;
