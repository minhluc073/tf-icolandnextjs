import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button2 from "../../button/button-st2";
import PropTypes from "prop-types";
import Banneritem from "../banner-item-v2";

Banner.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "UMA enables Anyone to build decentralized financial products.",
  desc: "The ICOLand is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.",
  title2: "Token sale End In!",
};

function Banner(props) {
  const { data } = props;

  const [countdownDate] = useState(new Date("9/25/2023").getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <section className="banner-top style-7">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="banner-top__content">
              <h2 className="title">{dataTitle.title}</h2>
              <p className="desc">{dataTitle.desc}</p>
              <div className="button">
                <Button2
                  title="Buy Token"
                  addclass="style-4 active icon"
                  path="#"
                ></Button2>
                <Button2 title="Watch Video" addclass="style-4" path="#" />
              </div>
              <ul className="content-list">
                {data.slice(6, 9).map((item) => (
                  <Banneritem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="banner-top__sale">
              <Image
                src={require("../../../assets/images/layout/banner-7.jpg")}
                alt="ICOLand"
                style={{ height: "auto" }}
              />
              <div className="sale-content">
                <h6>{dataTitle.title2}</h6>
                <div className="js-countdown">
                  <div className="countdown__timer">
                    <div className="countdown__item">{state.days || "0"}</div>
                    <div className="countdown__item countdownhours">
                      {state.hours || "00"}
                    </div>
                    <div className="countdown__item countdownminutes">
                      {state.minutes || "00"}
                    </div>
                    <div className="countdown__item countdownseconds">
                      {state.seconds || "00"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
