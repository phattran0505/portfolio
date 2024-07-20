import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import { links } from "../../assets/data/data";
import logo from '../../assets/image/logo.png'

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);
  return (
    <nav className={cx(scroll ? "active" : "")}>
      <div className={cx("nav-bar__container")}>
        <a href="#home" className={cx("logo-box")}>
          <img src={logo} alt=""></img>
          <h2>XuanPhat.</h2>
        </a>
        <div className={cx("links")}>
          <ul className={cx("main-link")}>
            {links.map((link, index) => (
              <li onClick={() => setActiveLink(link.path)} key={index}>
                <a
                  href={link.path}
                  className={cx(activeLink === link.path ? "active" : "")}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={cx("line", menu ? "active" : "")}
            onClick={() => setMenu(!menu)}
          >
            <div className={cx("line1")}></div>
            <div className={cx("line2")}></div>
            <div className={cx("line3")}></div>
          </div>
        </div>
        <div className={cx("sub-menu", menu ? "open" : "")}>
          {links.map((link, index) => (
            <li onClick={() => setActiveLink(link.path)} key={index}>
              <a
                href={link.path}
                className={cx(activeLink === link.path ? "active" : "")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
