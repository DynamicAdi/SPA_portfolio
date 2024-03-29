import React from "react";
import css from "@/styles/About.module.scss";
import profile from "@/public/utils/pic.jpg";
import { primary, titles } from "@/public/utils/fonts";
import Image from "next/image";

export default function About() {
  return (
    <div className={`${css.container} ${primary.className}`}>
      <div className={css.image}>
      <Image
        src={profile.src}
        alt={"profile"}
        layout="fill"
        objectFit="cover"        
        className={css.profile}
        />
        </div>
      <div className={css.content}>
        <h1 className={`${css.title} ${titles.variable}`}>About</h1>
        <div className={css.description}>
          <p className={css.desc}>
            Welcome to my creative space!
            <br />
            Hello! I&apos;m <span>Adarsh Pandit</span> from India, West Bengal,
            a passionate
            <span> Developer</span> dedicated to crafting unique experiences
            through my technical skills. With<span> 4 years </span>of immersion
            in Tech, I bring a dynamic blend of creativity and vizulization into
            reality.
            <br />
            My work is not just a job. it&apos;s a <span>canvas</span> where my
            ideas comes to life, and each stroke is meticulously crafted to
            deliver not just a solution but an experience.
            <br />
            Beyond the pixels and code, I&apos;m a <span>Writer</span> that
            enrich my creativity and perspective. I&apos;m always looking for
            new challenges and opportunities to <span>learn and grow</span>, and
            I&apos;m excited about the possibility of growth of my productivity.
            <br />
            <br />
            <span>Thanks</span> for visiting, and I look forward to the prospect
            of collaborating with you to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
}
