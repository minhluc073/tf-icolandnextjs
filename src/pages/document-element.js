import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import dataDocument from "../data/data-document";
import Document from "../components/documents/documents-v2";
import Document2 from "../components/documents/documents-v1";
import Document3 from "../components/documents/documents-v3";
import Gotop from "../components/gotop";

function Document1(props) {
  return (
    <div className="page-about backgroup-body">
      <Header />
      <PageTitle
        title="Document"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Document - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Document data={dataDocument} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Document - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Document2 data={dataDocument} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Document - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Document3 data={dataDocument} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Document1;
