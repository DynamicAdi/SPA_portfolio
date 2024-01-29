import React from "react";
import css from "@/styles/ContactMain.module.scss";
import Link from "next/link";
import { SiGithub, SiGmail, SiInstagram, SiKofi, SiLinkedin, SiTelegram, SiTwitter, SiWhatsapp, SiYoutube } from 'react-icons/si';
import {RiMessage2Line } from "react-icons/ri";

function MainContacts() {
  return (
    <div className={css.main}>
      <h2 className={css.head}>Get in <span>Touch</span>?</h2>
      <h3>Feel Free To <span>connect</span> with me!!</h3>
      <div className={css.lower}>
        <Link href={"/connect"} className={css.link}>
          <button className={css.button}>Message me <RiMessage2Line style={{fontSize: "1.4rem"}} /></button>
        </Link>

        <div className={css.social}>
          <ul>
            <a href="mailto:adarshpanditdev@gmail.com"><li><SiGmail /></li></a>
            <a href="https://github.com/DynamicAdi"><li><SiGithub /></li></a>
            <a href="https://twitter.com/Modern_Coder"><li><SiTwitter /></li></a>
            <a href="https://www.linkedin.com/in/devadarsh"><li><SiLinkedin /></li></a>
            <a href="https://wa.me/+919484025507"><li><SiWhatsapp /></li></a>
            <a href="https://t.me/Alone_Loverboy"><li><SiTelegram /></li></a>
            <a href="https://instagram.com/coding_champions_"><li><SiInstagram /></li></a>
            <a href="https://https://ko-fi.com/dev_adarsh"><li><SiKofi /></li></a>
            <a href="https://https://youtube.com/@coding_champions"><li><SiYoutube /></li></a>
          </ul>
        </div>
        <p>Feel Totally free to connect with me you can ask me any queries or we can talk casually too!😉 <br />Just Connect via the <span>Social Media</span> mentioned above or simply <span>Message Me!</span></p>
      </div>
    </div>
  );
}

export default MainContacts;
