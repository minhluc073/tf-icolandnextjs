import React  from "react";
import PropTypes from "prop-types";
import Teamitem from "../team-item-v7";

Team2.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Meet Our Team",
  desc: "ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.",
};

function Team2(props) {
  const { data } = props;

  return (
    <section className="dashboard">
      <div className="dashboard__main">
        <div className="section-team style-9">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block-text">
                  <h2 className="heading">{dataTitle.title}</h2>
                  <div className="desc fs-20 mt-21">{dataTitle.desc}</div>
                </div>

                <div className="team-main">
                  {data.slice(38, 42).map((item) => (
                    <Teamitem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team2;
