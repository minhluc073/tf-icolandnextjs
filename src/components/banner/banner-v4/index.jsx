import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../button/button-st1";
import Button2 from "../../button/button-st2";
import PropTypes from "prop-types";
import Banneritem from "../banner-item-v2";
import CountUp from "react-countup";

Banner.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "decentralised",
  title2: "music platform",
  title3: "built on Ethereum",
  title4: "Token sale End In!",
  desc: "Discover songs, claim limited editions and support your favorite artists. Buy, sell or auction any audio file into a unique NFT with the power of blockchain.",
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

  // const [dataTitle] = useState(
  //     {
  //         title : 'decentralised',
  //         title2 : 'music platform',
  //         title3 : 'built on Ethereum',
  //         title4 : 'Token sale End In!',
  //         desc : 'Discover songs, claim limited editions and support your favorite artists. Buy, sell or auction any audio file into a unique NFT with the power of blockchain.',
  //     }
  // )

  return (
    <section className="banner-top style-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="banner-top__content">
              <h2 className="title">
                {dataTitle.title}
                <span>{dataTitle.title2}</span>
                {dataTitle.title3}
              </h2>
              <p className="desc">{dataTitle.desc}</p>
              <div className="button">
                <Button title="BUY TOKEN" addclass="style-3" path="#" />
                <Button2 title="White paper" addclass="style-2" path="#" />
              </div>

              <ul className="content-list">
                {/* {data.slice(3, 6).map((item) => (
                  <Banneritem key={item.id} item={item} />
                ))} */}
                <li>
                  <h5 className="number">
                    <CountUp end={1} suffix="M+" duration={3} enableScrollSpy />
                  </h5>
                  <p>Supply</p>
                </li>
                <li>
                  <h5 className="number">
                    <CountUp
                      end={20}
                      suffix="k+"
                      duration={3}
                      enableScrollSpy
                      scrollSpyDelay={3}
                    />
                  </h5>
                  <p>Market Cap</p>
                </li>
                <li>
                  <h5 className="number">
                    <CountUp
                      end={10}
                      suffix="M+"
                      duration={3}
                      enableScrollSpy
                      scrollSpyDelay={3}
                    />
                  </h5>
                  <p>Holders</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="banner-top__sale">
              <Image
                src={require("../../../assets/images/layout/img-music.jpg")}
                alt="ICOLand"
                style={{ height: "auto" }}
              />
              <div className="sale-content">
                <h6>{dataTitle.title4}</h6>
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
