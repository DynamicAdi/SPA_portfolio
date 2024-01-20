import React from 'react'
import css from "@/styles/layout.module.scss";
import About from './About';
import MainContacts from './MainContacts';
import { primary, secondary, titles } from '@/public/utils/fonts';
import Services from './Services';
import Skills from './Skills';
import { Links } from './Background';
import Goals from './Goals';
import Testmonials from './Testmonials';
import HeadProject from './HeadProject';
import {easeIn, motion} from "framer-motion"

export default function HomeBox() {

  const varients = {
    hidden: {
      x: -100,
      opacity: 0
      
    },
    show: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <div className={`${css.parent} ${secondary.variable} ${primary.className} ${titles.variable}`}>
      <Links />
    <div className={css.section}>
        <motion.div 
        initial={'hidden'}
        whileInView={'show'}
        variants={varients}
        transition={{
          duration: 1,
          delay: 0.9,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        
        className={`${css.box} ${css.intro}`}>INTRO</motion.div>
        <motion.div 
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 0.9,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        
        className={`${css.box} ${css.contact}`}><MainContacts /></motion.div>
        <motion.div 
        initial={'hidden'}
        whileInView={'show'}
        variants={varients}
        transition={{
          duration: 0.9,
          delay: 0.8,
          ease: easeIn
        }}
        className={`${css.box} ${css.about}`}><About /></motion.div>
        <motion.div 
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.9,
          delay: 0.9,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        className={`${css.box} ${css.skills}`}><Skills /></motion.div>

        <motion.div 
        initial={{
          y: -200,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 1.5,
          ease: [0.68, -0.55, 0.265, 1.55]
        }}
        className={`${css.box} ${css.tech}`}><Services /></motion.div>

        <motion.div 
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
          delay: 1.2,
          ease: [0.68, -0.55, 0.265, 1.55]
        }}
        className={`${css.box} ${css.principal}`}><HeadProject /></motion.div>
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
          duration: 1,
          delay: 1.1,
          ease: [0.25, 1, 0.5, 1]
        }}
        
        className={`${css.box} ${css.services}`}><Goals /></motion.div>
        <motion.div 
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
          delay: 1.2,
          ease: [0.68, -0.55, 0.265, 1.55]
        }}
        
        className={`${css.box} ${css.project}`}><Testmonials /></motion.div>


    </div>
    </div>
  )
}
