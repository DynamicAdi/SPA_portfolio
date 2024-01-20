import React, { useEffect, useState } from "react";
import style from "@/styles/Projects.module.scss";
import { primary, titles } from "@/public/utils/fonts";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Links } from "./Background";
import { motion } from "framer-motion";

function Projects() {
  const[code, Setcode] = useState("");
  const showMe = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerDelay: 0.3,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={`${style.main} ${titles.variable} ${primary.className}`}>
      <Links />
      <h1 className={style.head}>
        Projects
      </h1>
      <Link href={"/"} className={style.back}>
        <button className={style.backButton}>Back</button>
      </Link>
      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={showMe}
      viewport={{ once: false }}
      className={style.child}>
        {projects.map((data, index) => {

          useEffect(() => {
            if (data.level===1) {
              Setcode("Basic")
            }
            else if(data.level===2) {
              Setcode("Intermediate")
            } 
            else if(data.level===3) {
              Setcode("Advanced")
            }
          }, [])

          return (
            <motion.div variants={item} className={style.boxes} key={index}>
              <div className={style.box}>
                <img src={data.avtarImg} alt={data.title} />
                <div className={style.content}>
                  <div className={style.upper}>
                    <h3 className={`${style.level} 
                      ${data.level === 1 && `${style.easy}`}
                      ${data.level === 2 && `${style.imidate}`}
                      ${data.level === 3 && `${style.hard}`}
                      `}>
                      {code}
                    </h3>
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.description.slice(0, 150)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Projects;
