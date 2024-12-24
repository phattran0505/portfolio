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
            <a href="https://www.facebook.com/phat.tran.306106/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/so4._0505/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/phattran0505">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/phat-tran-10872831a/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
