import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccordionItem from "../../faq/accordion-item";

Dashboard.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "FaQs",
  desc: "Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others.",
};

const dataTab = [
  {
    id: 1,
    title: "General",
  },
  {
    id: 2,
    title: "Token sales",
  },
  {
    id: 3,
    title: "Legal",
  },
  {
    id: 4,
    title: "Road map",
  },
];

function Dashboard(props) {
  const { data } = props;

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
            <Link href="/dashboard-tokensales">
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
            <Link href="/dashboard-faq" className="active">
              <span className="active"></span>FaQs
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
          <p className="fs-14">© 2022. All rights reserved by Themesflat</p>
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
          <section className="section-faq style-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-8 col-md-12">
                  <div className="faq__content">
                    <div className="block-text">
                      <h2 className="heading">{dataTitle.title}</h2>
                      <p className="fs-17">{dataTitle.desc}</p>
                    </div>
                    <Tabs>
                      <TabList className="menu-tab">
                        {dataTab.map((data) => (
                          <Tab key={data.id}>
                            <h5>{data.title}</h5>
                          </Tab>
                        ))}
                      </TabList>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(0, 4).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(4, 8).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(8, 12).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                          {data.slice(12, 16).map((item) => (
                            <AccordionItem key={item.id} item={item} />
                          ))}
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12">
                  <div className="faq__images">
                    <Image
                      src={require("../../../assets/images/layout/faq.png")}
                      alt="ICOLand"
                    />
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
