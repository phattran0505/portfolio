import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";

import { links } from "../../assets/data/data";
import logo from '../../assets/image/logo.png'

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const isScrolling = useRef(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    if (!isScrolling.current) {
      // Check which section is in view
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveLink(`#${section.id}`);
        }
      });
    }
  };

  const handleLinkClick = (path) => {
    isScrolling.current = true;
    setActiveLink(path);
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <li onClick={() => handleLinkClick(link.path)} key={index}>
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
            <li onClick={() => handleLinkClick(link.path)} key={index}>
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
