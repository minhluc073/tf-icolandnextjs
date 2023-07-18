import React from "react";
import Button from "../components/button/button-st1";
import Button2 from "../components/button/button-st2";
import Button3 from "../components/button/button-st3";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import Gotop from "../components/gotop";

function About1(props) {
  return (
    <div className="page-about backgroup-body">
      <Header />
      <PageTitle
        title="Button"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Button Style</h3>
            </div>
          </div>
        </div>
      </div>
      <section className="section-button bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="list-button">
                <Button title="BUY TOKEN" addclass="style-2" path="#" />
                <Button3
                  title="REGISTER & BUY TOKEN NOW"
                  addclass="style-1"
                  path="#"
                />
                <Button title="BUY TOKEN" addclass="style-3" path="#" />
                <Button title="BUY TOKEN NOW" addclass="style-4" path="#" />
                <Button title="Buy Tokens Now" addclass="style-5" path="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Button Outline</h3>
            </div>
          </div>
        </div>
      </div>
      <section className="section-button s1 bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="list-button">
                <Button2 title="EN" addclass="style-1" path="#" />
                <Button2 title="White paper" addclass="style-2" path="#" />
                <Button2 title="White paper" addclass="style-3" path="#" />
                <Button2 title="Watch Video" addclass="style-4" path="#" />
                <Button2 title="White paper" addclass="style-5" path="#" />
                <Button2 title="Buy Token" addclass="style-6" path="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </div>
  );
}

export default About1;
