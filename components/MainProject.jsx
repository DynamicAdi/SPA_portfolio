import React from 'react'
import style from "@/styles/MainProject.module.scss";
import Link from 'next/link';
import { projects } from '@/data/projects';

function MainProject() {
  return (
    <div className={style.project}>
      <h2 className={style.head}>Total No. of Projects</h2>
      <h2 className={style.head} id={style.num}> ~ {projects.length}</h2>
      <Link href={"/projects"} className={style.link}>
        <button className={style.button}>View all</button>
      </Link>
      <p>Note: I can't display them here. So, Click Here {"->"}</p>

    </div>
  )
}

export default MainProject
