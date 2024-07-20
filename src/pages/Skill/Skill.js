import classNames from "classnames/bind";

import { skillList } from "../../assets/data/data";
import Aos from "aos";

import styles from "./Skill.module.scss";
import { useEffect } from "react";
const cx = classNames.bind(styles);
function Skill() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="skill" className={cx("skill-section")}>
      <div className={cx("skill-container")}>
        <div className={cx("title")}>
          <h2 className={cx("section-title")}>
            my skills
            <span className={cx("big-title")}>skills</span>
          </h2>
        </div>
        <div className={cx("skill-list")}>
          {skillList.map((skill, index) => (
            <div className={cx("skill-box")} key={index}>
              <img src={skill.img} alt=""></img>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className={cx("skill-progresses")}>
          <div className={cx("skill-progress")} data-aos>
            <p className={cx("label")}>HTML/CSS</p>
            <div className={cx("line")}>
              <div className={cx("value", "html-css")}>90%</div>
            </div>
          </div>
          <div className={cx("skill-progress")}>
            <p className={cx("label")}>Javascript</p>
            <div className={cx("line")}>
              <div className={cx("value", "js")}>90%</div>
            </div>
          </div>
          <div className={cx("skill-progress")}>
            <p className={cx("label")}>ReactJS</p>
            <div className={cx("line")}>
              <div className={cx("value", "reactjs")}>85%</div>
            </div>
          </div>
          <div className={cx("skill-progress")}>
            <p className={cx("label")}>NodeJS</p>
            <div className={cx("line")}>
              <div className={cx("value", "nodejs")}>80%</div>
            </div>
          </div>
          <div className={cx("skill-progress")}>
            <p className={cx("label")}>MongoDB</p>
            <div className={cx("line")}>
              <div className={cx("value", "mongodb")}>80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
