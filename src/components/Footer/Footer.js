import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer>
      <div className={cx("footer-container")}>
        <span>© Copyright. All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
