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
          <h2>I'm Xuan Phat a Frontend Developer </h2>
          <p>
            My name is Tran Xuan Phat, I am 21 years old and currently living
            and studying in Ho Chi Minh City. I am a third-year student at the
            Posts and Telecommunications Institute of Technology, majoring in
            Internet of Things. I have a strong passion for creating lively,
            visually appealing, and user-friendly websites, which has inspired
            me to pursue a career as a Frontend Developer. This interest drives
            me to continuously improve my skills in building modern, responsive
            interfaces that enhance the user experience. Thank you for taking
            the time to get to know me.
          </p>
          <div className={cx("information")}>
            <div className={cx("information-box")}>
              <span>Name:</span> Tran Xuan Phat
            </div>
            <div className={cx("information-box")}>
              <span>from:</span> Ho Chi Minh city, Viet Nam
            </div>
            <div className={cx("information-box")}>
              <span>Age:</span> 21
            </div>
            <div className={cx("information-box")}>
              <span>email:</span> phattran052004@gmail.com
            </div>
          </div>
          <a
            href="/My CV.pdf"
            download={"My CV.pdf"}
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
