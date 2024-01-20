import React from "react";
import css from "@/styles/Skills.module.scss";
import { primary } from "@/public/utils/fonts";
import Slider from "react-slick";
import Animation from "@/public/utils/animation.png"
import Model from "@/public/utils/model.png"
import Spline from "@/public/utils/spline.png"

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiThreedotjs,
  SiJson,
  SiPython,
  SiGit,
  SiBlender,
  SiFigma,
  SiCanva,
} from "react-icons/si";

export default function Skills() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const icons = [
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiSass,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiThreedotjs,
    SiJson,
    SiPython,
    SiGit,
  ]
  const design = [
    SiBlender,
    SiFigma,
    SiCanva,
  ]

  return (
    <div className={`${css.skills} ${primary.className}`}>
      <h1 className={css.title}>skills</h1>

      <div className={css.parentContainer}>
        <Slider {...settings} className={css.slideMenu}>
          <div className={css.box}>
            <h2 className={css.TextHead}>Technical</h2>
            <div className={css.parentBox}>
            {icons.map((gen, index) => {
              const Icons = icons[index];
              return <div className={css.round} key={index}><Icons /></div>
            })}
            </div>
          </div>

          <div className={css.box}>
            <h2 className={css.TextHead}>Graphical</h2>
            <div className={css.parentBox}>
            {design.map((designing, idx) => {
              const Design = design[idx];
              return (
                <div className={css.round} key={idx}><Design />
                </div>
                ) 
                
            })}
            <div className={css.round}><img src={Animation.src} alt="animation" /></div>
            <div className={css.round}><img src={Model.src} alt="Model" /></div>
            <div className={css.round}><img src={Spline.src} alt="Model" /></div>
            
            </div>
          </div>

          {/* <div className={css.box}>
            <h2 className={css.TextHead}>Communication</h2>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}
