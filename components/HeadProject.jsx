import React from 'react'
import style from "@/styles/Head_Project.module.scss"
import { IoCodeSlashOutline } from "react-icons/io5";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";


export default function HeadProject() {
  return (
    <div className={style.main}>
      <div className={style.tag}><IoCodeSlashOutline /><h2>Projects</h2></div>
      <div className={style.child}>
        <h2>Projects</h2>
        <p>I've worked on several projects with different techonologies not only coding but Graphic Design, 3D Modeling, 3D Animations, 2D Graphics as well only few are shown {":)"}</p>
        <Link href={"/projects"} className={style.link}>
          <button className={style.button}>View Projects<FaArrowRight /></button>
        </Link>
      </div>
    </div>
  )
}
