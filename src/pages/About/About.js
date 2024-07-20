import { useEffect } from "react";
import classNames from "classnames/bind";
import Aos from "aos";

import portfolioImg from "../../assets/image/portfolio.jpg";

import styles from "./About.module.scss";
const cx = classNames.bind(styles);
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <section id="about" className={cx("about-section")}>
      <div className={cx("about-container")}>
        <div className={cx("about-image")} data-aos="fade-right">
          <img src={portfolioImg} alt=""></img>
        </div>
        <div className={cx("about-content")} data-aos="fade-left">
          <h3>Who am i?</h3>
          <h2>I'm Xuan Phat a Fullstack Web Developer </h2>
          <p>
            My fullname name is Tran Xuan Phat, and I am 20 years
            old. I live and work in Ho Chi Minh City. Currently, I am a
            second-year student at the Posts and Telecommunications Institute of
            Technology, majoring in the Internet of Things. The reason I decided
            to become a full-stack developer is my interest in lively,
            beautiful, and convenient websites. This passion has motivated me on
            my path to becoming a full-stack developer. Thank you for getting to
            know me.
          </p>
          <div className={cx("information")}>
            <div className={cx("information-box")}>
              <span>Name:</span> Tran Xuan Phat
            </div>
            <div className={cx("information-box")}>
              <span>from:</span> Ho Chi Minh city, Viet Nam
            </div>
            <div className={cx("information-box")}>
              <span>Age:</span> 20
            </div>
            <div className={cx("information-box")}>
              <span>email:</span> phattran052004@gmail.com
            </div>
          </div>
          <a
            href="/template-CV.pdf"
            download={"CV.pdf"}
            className={cx("btn", "about-btn")}
          >
            download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
