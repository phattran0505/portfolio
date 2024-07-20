import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import classNames from "classnames/bind";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import env from "react-dotenv";

import { icons, informations } from "../../assets/data/data";

import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const id = toast.loading("Loading...", {
      autoClose: 5000,
      pauseOnHover: false,
    });
    emailjs
      .sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, {
        publicKey: env.PUBLIC_KEY,
      })
      .then(
        () => {
          toast.update(id, {
            render: "Sent success !!",
            type: "success",
            isLoading: false,
            pauseOnHover: false,
            autoClose: 2000,
          });
          e.target.reset();
        },
        (error) => {
          return toast.update(id, {
            render: error.text,
            type: "error",
            isLoading: false,
            pauseOnHover: false,
            autoClose: 2000,
          });
        }
      );
  };
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  });
  return (
    <section className={cx("contact-section")} id="contact">
      <div className={cx("contact-container")}>
        <div className={cx("title")}>
          <h2 className={cx("section-title")}>
            get in touch
            <span className={cx("big-title")}>contact</span>
          </h2>
        </div>
        <div className={cx("message-form")}>
          <div className={cx("form")} data-aos="zoom-in-right">
            <h4>message me</h4>
            <form onSubmit={sendEmail} ref={form}>
              <div className={cx("row")}>
                <div className={cx("input-box")}>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    required
                    name="user_name"
                  ></input>
                </div>
                <div className={cx("input-box")}>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="user_email"
                    required
                  ></input>
                </div>
              </div>
              <div className={cx("input-box")}>
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  required
                  name="subject"
                ></input>
              </div>
              <textarea
                type="text"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
              <button type="submit">send message</button>
            </form>
          </div>
          <div className={cx("information-container")} data-aos="zoom-in-left">
            <h4>contact info</h4>
            <p>
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
            <div className={cx("information-content")}>
              <div className={cx("icons")}>
                {icons.map((icon) => (
                  <i key={icon.id}>
                    <icon.name />
                  </i>
                ))}
              </div>
              <div className={cx("information")}>
                {informations.map((info) => (
                  <div className={cx("information-box")} key={info.id}>
                    <h6>{info.title}</h6>
                    <p>{info.info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
