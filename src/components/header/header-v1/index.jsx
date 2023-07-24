import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import menus from "../menu";
import { Collapse } from "react-collapse";
import Button from "../../button/button-st1";
import Button2 from "../../button/button-st2";
import logo from "@/src/assets/images/logo/logo-nft.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggle, setToggle] = useState({
    id: "",
    status: false,
  });
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const handleDropdown = (index) => {
    setActiveIndex(index);
  };
  const handleToggle = (id) => {
    if (toggle.id === id) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        id,
      });
    }
  };

  return (
    <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
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
                  <div className="header__logo mobile_logo">
                    <Link href="/">
                      <Image src={logo} alt="Icoland" />
                    </Link>
                  </div>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleDropdown(idx)}
                        className={`menu-item ${
                          data.name ? "menu-item-has-children" : ""
                        } ${activeIndex === idx ? "active" : ""}`}
                      >
                        {data?.links ? (
                          <Link href={`${data?.links}`}>{data.name}</Link>
                        ) : (
                          <a
                            onClick={() => {
                              handleToggle(data.id);
                            }}
                          >
                            {data.name}
                          </a>
                        )}
                        <Collapse isOpened={toggle.id === data.id}>
                          {data.namesub && (
                            <ul className="sub-menu">
                              {data.namesub.map((submenu) => (
                                <li key={submenu.id} className="menu-item">
                                  <Link
                                    href={submenu.links}
                                    className={`${
                                      router.pathname === submenu.links
                                        ? "active"
                                        : ""
                                    } `}
                                  >
                                    {submenu.sub}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </Collapse>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="group-button">
                  <Button2 title="EN" addclass="style-1" path="#" />
                  <Button title="Login" addclass="style-2" path="/sign-in" />
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
