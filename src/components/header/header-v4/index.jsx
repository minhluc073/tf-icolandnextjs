import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import menus from "../menu";
import Button from "../../button/button-st1";
import Button2 from "../../button/button-st2";
import logo from "../../../assets/images/logo/logo-04.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header
      id="header_main"
      className={`header style-3 ${scroll ? "is-fixed" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__body">
              <div className="header__logo">
                <Link href="/">
                  <Image src={logo} alt="Icoland" />
                </Link>
              </div>
              <div className="header__right">
                <nav
                  id="main-nav"
                  className={`main-nav ${menuActive ? "active" : ""}`}
                >
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleDropdown(idx)}
                        className={`menu-item ${
                          data.namesub ? "menu-item-has-children" : ""
                        } ${activeIndex === idx ? "active" : ""}`}
                      >
                        <Link href={data.links}>{data.name}</Link>
                        {data.namesub && (
                          <ul className="sub-menu">
                            {data.namesub.map((submenu) => (
                              <li key={submenu.id} className="menu-item">
                                <Link
                                  href={submenu.links}
                                  onClick={handleDropdown}
                                >
                                  {submenu.sub}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="group-button">
                  <Button2 title="EN" addclass="style-1" path="#" />
                  <Button title="Login" addclass="style-4" path="/sign-in" />
                </div>
                <div
                  className={`mobile-button ${menuActive ? "active" : ""}`}
                  onClick={handleMenuActive}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
