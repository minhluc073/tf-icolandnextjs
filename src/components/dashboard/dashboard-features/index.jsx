import React, { useState } from "react";
import PropTypes from "prop-types";
import Listitem from "../list-itemv2";
import Link from "next/link";
import Image from "next/image";

Dashboard.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Allow us to Introduce Ourselves",
  desc: "ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.",
};

const dataList = [
  {
    id: 1,
    number: "01",
    title: "High-Quality Rendered And Equally Affordable Artwork",
  },
  {
    id: 2,
    number: "02",
    title: "Learning, Researching, And Studying The Crypto Market Daily",
  },
  {
    id: 3,
    number: "03",
    title: "The Immersive World Of NFTs With All Its Collectors & Projects",
  },
  {
    id: 4,
    number: "04",
    title: "The Immersive World Of NFTs With All Its Collectors & Projects",
  },
];

function Dashboard(props) {
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
    <section className="dashboard dashboard-feature">
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
            <Link href="/dashboard-tokensales">
              <span className="icon-token"></span>Token Sales
            </Link>
          </li>
          <li>
            <Link href="/dashboard-features" className="active">
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
        <div className="overlay"></div>
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
          <section className="about style-9">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="block-text">
                    <h2 className="title">{dataTitle.title}</h2>
                    <p className="fs-20 mt-16">{dataTitle.desc}</p>
                  </div>
                  <div className="group-img">
                    <Image
                      src={require("../../../assets/images/layout/item-01.jpg")}
                      alt="ICOLand"
                    />
                    <Image
                      src={require("../../../assets/images/layout/item-02.jpg")}
                      alt="ICOLand"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="about__content">
                    {dataList.map((item) => (
                      <Listitem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
