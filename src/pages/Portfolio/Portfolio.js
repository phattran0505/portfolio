import classNames from "classnames/bind";

import { portfolios } from "../../assets/data/data";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./Portfolio.module.scss";
const cx = classNames.bind(styles);
function Portfolio() {
  return (
    <section id="portfolio" className={cx("portfolio-section")}>
      <div className={cx("portfolio-container")}>
        <div className={cx("title")}>
          <h2 className={cx("section-title")}>
            my portfolio
            <span className={cx("big-title")}>portfolios</span>
          </h2>
        </div>
        <div className={cx("portfolios")}>
          {portfolios.map((portfolio, index) => (
            <div className={cx("portfolio-box")} key={index}>
              <div className={cx("portfolio-content")} href="#">
                <img src={portfolio.image} alt=""></img>
                <div className={cx("portfolio-desc")}>
                  <h5>{portfolio.title}</h5>
                  <p>{portfolio.desc}</p>
                  <a href={portfolio.path}>
                    quick view{" "}
                    <i>
                      <FiArrowUpRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
