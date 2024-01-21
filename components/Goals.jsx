import React from "react";
import style from "@/styles/Goals.module.scss";
import { GoGoal } from "react-icons/go";

function Goals() {
  return (
    <div className={style.main}>
      <div className={style.tag}>
        <GoGoal /> <h2>My Major&apos;s</h2>
      </div>
      <div className={style.child}>
        <h2>My Goals👀</h2>
        <p>
        Tech Trailblazer | Self-taught in Code, Design, 3D Wizardry. Crafting digital dreams with a DIY spirit. Welcome to my evolving tech odyssey! 
        </p>
      </div>
    </div>
  );
}

export default Goals;
