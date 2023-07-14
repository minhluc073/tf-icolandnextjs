import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

Footer.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Newsletter",
  desc: "We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly ",
  copyright: "icoland 2022- ALL rights reserved",
  title2: "Email Address",
};

function Footer(props) {
  return (
    <footer className="footer style-7">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12">
              <div className="content-left">
                <h5>{dataTitle.title}</h5>
                <p className="fs-17">{dataTitle.desc}</p>

                <form action="#" id="subscribe-form">
                  <h6>{dataTitle.title2}</h6>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required=""
                    id="subscribe-email"
                  />
                  <button
                    className="btn-action style-5"
                    type="submit"
                    id="subscribe-button"
                  >
                    <span>SIGN UP</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="content-right">
                <h5>Contact</h5>
                <ul className="list-info">
                  <li>
                    <span className="icon-internet"></span>Company.com
                  </li>
                  <li>
                    <span className="icon-message"></span>
                    Info.yourcompany@gmail.com
                  </li>
                  <li>
                    <span className="icon-Calling"></span>+345 54689435
                  </li>
                </ul>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image
                src={require("../../../assets/images/logo/logo04.png")}
                alt="ICOLand"
              />
            </div>
            <div className="col-md-6">
              <p>{dataTitle.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
