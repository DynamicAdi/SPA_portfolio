import React from 'react'
import style from "@/styles/Intro.module.scss";
import logo from "@/public/orange.png";


export default function Intro() {
  return (
    <div className={style.main}>
      <img src={logo.src} alt="Calligraphy" />
    </div>
  )
}
