import React, { useEffect, useRef, useState } from "react";
import style from "@/styles/Connect.module.scss";
import { Links } from "./Background";
import { primary } from "@/public/utils/fonts";
import { TbClover, TbMessage2 } from "react-icons/tb";
import Link from "next/link";
import img from "@/public/utils/contact.webp";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MdDone, MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import Image from "next/image";


const Success = () => {
  return (
    <motion.div 
    initial={{
      x: -200,
      opacity: 0
    }}
    animate={{
      x: 0,
      opacity: 1
    }}
    transition={{
      duration: 1,
      delay: 0,
      type: "spring",
      stiffness: "100"
    }}
    className={style.popup}
    >
    <h1>Message Sent! <MdDone className={style.done}/></h1>
    <p>Your message has been successfully sent to Dev Adarsh, Its a request to wait for a while he&apos;ll try to reach you back as soon as possible.</p>
    </motion.div>
  )
}
const Fail = ({error}) => {
  return (
    <motion.div 
    initial={{
      x: -200,
      opacity: 0
    }}
    animate={{
      x: 0,
      opacity: 1
    }}
    transition={{
      duration: 1,
      delay: 0,
      type: "spring",
      stiffness: "100"
    }}
    className={style.popup}
    >
    <h1>Error <MdOutlineWifiTetheringErrorRounded className={style.error} /></h1>
    <p>There is a error while sending your message. Its a request to try again later after a bit while. 
      <br />
      <br />
      Error: {error} <br />
      Thanks for patience
      </p>
    </motion.div>
  )
}
function Connect() {
  const form = useRef();
const[Alert, SetAlert] = useState(false);
const[Error, SetError] = useState(false);
const[Text, SetText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.
    sendForm(
        "service_u7mayfk",
        "template_asjzacu",
        form.current,
        "4jiAAs3tHtASO3ohz"
      )
      .then(
        (result) => {
        setTimeout(() => {
          SetAlert(false)
        }, 3000);
          e.target.reset()
            return SetAlert(true)
        },
        (error) => {
          SetText(error);
          setTimeout(() => {
            SetError(false)
          }, 3000);
        return SetError(true)
        }
      );
  };

  return (
    <div className={`${style.parent} ${primary.className}`}>
      <Links />
      {Alert && <Success />}
      {Error && <Fail error={Text}/>}
      <Link href={"/"} className={style.back}>
        <button className={style.backButton}>Back</button>
      </Link>
      <div className={style.child}>
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 0.5,
            ease: [0.68, -0.55, 0.265, 1.55],
          }}
          className={style.box}
        >
          <div className={style.heading}>
            <h2>Queries | Questions? Feel Free to write us</h2>
            <h3>
              Get in{" "}
              <span>
                Touch! <TbClover />
              </span>
            </h3>
          </div>

          <motion.form
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 1.6,
              ease: [0.33, 1, 0.68, 1],
            }}
            onSubmit={sendEmail}
            ref={form}
          >
            <div className={style.form_items}>
              <input type="text" id="name" name="first_name" required />
              <label for="name">First Name</label>
            </div>
            <div className={style.form_items}>
              <input type="text" id="name" name="last_name" required />
              <label for="name">Last Name</label>
            </div>

            <div className={style.form_items}>
              <input type="email" id="email" name="user_email" required />
              <label for="email">Email</label>
            </div>

            <div className={style.form_items}>
              <input type="number" id="phone" name="user_phone" required />
              <label for="phone">Phone</label>
            </div>

            <div className={style.form_items}>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
              <label for="message">Message</label>
            </div>

            <button type="submit" value="send">
              Send Message <TbMessage2 />
            </button>
          </motion.form>

          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 1.6,
              ease: [0.33, 1, 0.68, 1],
            }}
            className={style.image}
          >
            <Image src={img.src} className={style.img} alt="connect with us" width={500} height={550} priority={true}/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Connect;
