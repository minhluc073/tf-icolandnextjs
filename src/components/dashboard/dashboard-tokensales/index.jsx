import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Listitem from "../list-item";
import Link from "next/link";
import Image from "next/image";

Dashboard.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "WELCOME TO THE ICOLAND NFT CLUB",
  desc: "ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.",
};

const dataList = [
  {
    id: 1,
    number: "01",
    title: "+200K",
    text: "Current Holders",
  },
  {
    id: 2,
    number: "02",
    title: "+5 MILLION",
    text: "cryptoItem",
  },
  {
    id: 3,
    number: "03",
    title: "+500.000 USD",
    text: "Total Volume",
  },
];

function Dashboard(props) {
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

  const [btnState, setbtnState] = useState(false);
  const [menuState, setmenuState] = useState(false);
  function handleClick() {
    setbtnState((btnState) => !btnState);
  }
  function handleClickmenu() {
    setmenuState((menuState) => !menuState);
  }

  let toggleClassclick = btnState ? "click" : null;
  let togglemenu = menuState ? "show" : null;

  return (
    <section className="dashboard">
      <div className={`btn ${toggleClassclick}`} onClick={handleClick}>
        <span className="fas fa-bars"></span>
      </div>
      <nav className={`dashboard__sidebar ${toggleClassclick}`}>
        <div className="sidebar__logo">
          <Link href="/">
            <Image
              src={require("../../../assets/images/logo/logo.png")}
              alt="ICOLand"
            />
          </Link>
        </div>
        <ul className="sidebar__menu">
          <li>
            <Link href="/dashboard-tokensales" className="active">
              <span className="icon-token"></span>Token Sales
            </Link>
          </li>
          <li>
            <Link href="/dashboard-features">
              <span className="icon-menu"></span>Our Feature
            </Link>
          </li>
          <li>
            <Link href="/dashboard-roadmap">
              <span className="icon-map"></span>Road Map
            </Link>
          </li>
          <li>
            <Link href="/dashboard-creations">
              <span className="icon-start"></span>Our Creations
            </Link>
          </li>
          <li>
            <Link href="/dashboard-team">
              <span className="icon-team"></span>Our Team
            </Link>
          </li>
          <li>
            <Link href="/dashboard-faq">
              <span className="icon-faqs"></span>FaQs
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={handleClickmenu}
              className={`feat-btn ${togglemenu}`}
            >
              <span className="icon-setting"></span>Pages
            </Link>
            <ul className={`feat-show ${togglemenu}`}>
              <li>
                <Link href="/">Home Main</Link>
              </li>
              <li>
                <Link href="/home-nft">Home NFT</Link>
              </li>
              <li>
                <Link href="/home-defi-01">Home Defi</Link>
              </li>
              <li>
                <Link href="/connect-wallet">Wallet Connect</Link>
              </li>
              <li>
                <Link href="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link href="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link href="/blog-v1">Blog</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="bottom">
          <ul className="list-social">
            <li>
              <Link href="#">
                <span className="icon-twitter"></span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon-facebook"></span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon-place"></span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon-youtobe"></span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon-tiktok"></span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon-reddit"></span>
              </Link>
            </li>
          </ul>
          <p className="fs-14">© 2023. All rights reserved by Themesflat</p>
        </div>
      </nav>
      <div className={`dashboard__content ${toggleClassclick}`}>
        <div className="overlay" onClick={handleClick}></div>
        <div className="dashboard__header">
          <Link href="/connect-wallet" className="user">
            <Image
              src={require("../../../assets/images/avt/admin.jpg")}
              alt="ICOLand"
            />
          </Link>
          <Link href="/connect-wallet" className="btn-action-outline style-5">
            <span className="icon-wallet"></span>
            <span>Wallet connect</span>
          </Link>
        </div>
        <div className="dashboard__main">
          <div className="banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="block-text">
                    <h2 className="title">{dataTitle.title}</h2>
                    <p className="desc">{dataTitle.desc}</p>
                  </div>
                  <div className="group-button">
                    <Link href="#" className="btn-action style-5">
                      <span>Buy Tokens now</span>
                    </Link>
                    <Link href="#" className="btn-action-outline style-5">
                      <span>White paper</span>
                    </Link>
                  </div>

                  <ul className="content-list">
                    {dataList.map((item) => (
                      <Listitem key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="banner-top__sale">
                    <div className="sale-image">
                      <Image
                        src={require("../../../assets/images/item/nft-01.png")}
                        alt="ICOLand"
                      />
                      <Image
                        src={require("../../../assets/images/item/nft-02.jpg")}
                        alt="ICOLand"
                      />
                      <Image
                        src={require("../../../assets/images/item/nft-03.jpg")}
                        alt="ICOLand"
                      />
                      <Image
                        src={require("../../../assets/images/item/nft-04.png")}
                        alt="ICOLand"
                      />
                      <Image
                        src={require("../../../assets/images/item/nft-05.jpg")}
                        alt="ICOLand"
                      />
                      <Image
                        src={require("../../../assets/images/item/nft-06.jpg")}
                        alt="ICOLand"
                      />
                    </div>
                    <div className="sale-content">
                      <h5>Token sale End In!</h5>

                      <div className="js-countdown">
                        <div className="countdown__timer">
                          <div className="countdown__item">
                            {state.days || "0"}
                          </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
