import React from 'react'
import style from "@/styles/Goals.module.scss";
import { GoGoal } from "react-icons/go";


function Goals() {
  return (
    <div className={style.main}>
      <div className={style.tag}><GoGoal /> <h2>My Major's</h2></div>
      <div className={style.child}>
        <h2>My Goals👀</h2>
        <p>Self-taught tech explorer with a passion for learning. Transforming curiosity into innovation, Mastering languages, tools, embracing challenges to dive deep into the world to tech.
</p>
      </div>
    </div>
  )
}

export default Goals
