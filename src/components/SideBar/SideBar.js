import classNames from "classnames/bind";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

import styles from "./SideBar.module.scss";
const cx = classNames.bind(styles);
function SideBar() {
  return (
    <aside className={cx("side-bar")}>
      <div className={cx("container")}>
        <p>follow me</p>
        <div className={cx("line")}></div>
        <ul>
          <li>
            <a href="*">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="*">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="*">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="*">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
