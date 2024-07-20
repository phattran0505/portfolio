import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import classNames from "classnames/bind";
import Aos from "aos";


import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <section id="home" className={cx("home-section")}>
      <div className={cx("home-container")}>
        <div className={cx("content")} data-aos="fade-right">
          <div className={cx("introduce")}>
            <h1>Hi there! </h1>
            <h4>
              I am{" "}
              <ReactTyped
                strings={["XuanPhat", "Developer"]}
                loop
                typeSpeed={100}
                backSpeed={100}
              />
            </h4>
            <h1>I make the complex simple.</h1>
            <a href="#contact" className={cx("btn", "home-btn")}>
              contact me
            </a>
          </div>
          <div className={cx("info")}>
            <div className={cx("info-box")}>
              <h4>email</h4>
              <p>phattran052004@gmail.com</p>
            </div>
            <div className={cx("info-box")}>
              <h4>phone</h4>
              <p>(+84) 397192664</p>
            </div>
            <div className={cx("info-box")}>
              <h4>location</h4>
              <p>Ho Chi Minh city</p>
            </div>
            <div className={cx("scroll")}>
              <div className={cx("scroll-mouse")}></div>
              <div className={cx("line")}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
