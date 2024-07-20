import { useEffect } from "react";
import classNames from "classnames/bind";
import Aos from "aos";

import { experiences } from "../../assets/data/data";

import styles from "./Experience.module.scss";
const cx = classNames.bind(styles);
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <section id="experience" className={cx("exp-section")}>
      <div className={cx("exp-container")}>
        <div className={cx("title")}>
          <h2 className={cx("section-title")}>
            my experience
            <span className={cx("big-title")}>experiences</span>
          </h2>
        </div>
        <div className={cx("time-line")}>
          {experiences.map((experience, index) => (
            <div className={cx("container")} key={index}>
              <div
                className={cx("text-box", index % 2 === 0 ? "right" : "left")}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <h5>{experience.title}</h5>
                <span>{experience.language}</span>
                <p>{experience.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
