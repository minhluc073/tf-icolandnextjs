import React from "react";
import PageTitle from "../components/page-title";
import Header from "../components/header/header-v8";
import Footer from "../components/footer/footer-v2";
import dataTeam from "../data/data-team";
import Team from "../components/team/team-v1";
import Team2 from "../components/team/team-v4";
import Team3 from "../components/team/team-v5";
import Team4 from "../components/team/team-v6";
import Team5 from "../components/team/team-v7";
import Team6 from "../components/team/team-v3";
import Team7 from "../components/team/team-v8";
import Team8 from "../components/team/team-v2";
import Team9 from "../components/team/team-v9";
import Gotop from "../components/gotop";

function OurTeam(props) {
  return (
    <div className="page-team backgroup-body">
      <Header />
      <PageTitle
        title="Our Team"
        desc="We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more."
      />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 1</h3>
            </div>
          </div>
        </div>
      </div>
      <Team data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Team2 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 3</h3>
            </div>
          </div>
        </div>
      </div>
      <Team3 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 4</h3>
            </div>
          </div>
        </div>
      </div>
      <Team4 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 5</h3>
            </div>
          </div>
        </div>
      </div>
      <Team5 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 6</h3>
            </div>
          </div>
        </div>
      </div>
      <Team6 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 7</h3>
            </div>
          </div>
        </div>
      </div>
      <Team7 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 8</h3>
            </div>
          </div>
        </div>
      </div>
      <Team8 data={dataTeam} />
      <div className="title-style center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team - Style 9</h3>
            </div>
          </div>
        </div>
      </div>
      <Team9 data={dataTeam} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default OurTeam;
