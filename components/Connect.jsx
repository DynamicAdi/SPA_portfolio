import React from 'react'
import style from "@/styles/Connect.module.scss";
import { Links } from './Background';
import { primary } from '@/public/utils/fonts';
import {TbClover, TbMessage2} from "react-icons/tb"
import Link from 'next/link';
import img from "@/public/utils/contact.webp"
import {motion} from "framer-motion";


function Connect() {
  return (
    <div className={`${style.parent} ${primary.className}`}>
      <Links />
      <Link href={"/"} className={style.back}>
        <button className={style.backButton}>Back</button>
      </Link>
      <div className={style.child}>
        <motion.div 
        initial={{
          scale: 0,
          opacity: 0
        }}
        whileInView={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.4,
          delay: 0.5,
          ease: [0.68, -0.55, 0.265, 1.55]
        }}
        
        className={style.box}>
            <div className={style.heading}>
              <h2>Queries |  Questions? Feel Free to write us</h2>
              <h3>Get in <span>Touch! <TbClover /></span></h3>
            </div>
              
        <motion.form 
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.9,
          delay: 1.6,
          ease: [0.33, 1, 0.68, 1]
        }}
        action="#" method="post">
        <div className={style.form_items}>
          <input type="text" id="name" name="name" required />
          <label for="name">Name</label>
        </div>
        
        <div className={style.form_items}>
          <input type="email" id="email" name="email" required />
          <label for="email">Email</label>
        </div>

        <div className={style.form_items}>
          <input type="number" id="phone" name="phone" required />
          <label for="phone">Phone</label>
        </div>
      
        <div className={style.form_items}>
          <textarea id="message" name="message" rows="4" required></textarea>
          <label for="message">Message</label>
        </div>
      
          <button type="submit">Send Message <TbMessage2 /></button>
      </motion.form>
      
      <motion.div 
      initial={{
        x: 200,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.9,
        delay: 1.6,
        ease: [0.33, 1, 0.68, 1]
      }}
      className={style.image}>
      <img src={img.src} alt="connect with us" />
      </motion.div>
    </motion.div>
    </div>
    </div>
  )
}

export default Connect
