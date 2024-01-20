import React from "react";
import style from "@/styles/Serve.module.scss";
import Slider from "react-slick";
// import { IoCodeSlash } from "react-icons/io5";

import  developer from "@/public/utils/serve/dev.png";
import  design  from "@/public/utils/serve/designer.webp";
import web from "@/public/utils/serve/web.webp";

import programmer from "@/public/utils/serve/programming.webp";
import imageEditor from "@/public/utils/serve/image.webp";
import videoEditor from "@/public/utils/serve/video.webp";

import ThreeAni from "@/public/utils/serve/Threeani.webp";
import ThreeScu from "@/public/utils/serve/sculpture.png";
import ThreeModel from "@/public/utils/serve/modeling.webp";

import Interior from "@/public/utils/serve/interior.webp";
import layout from "@/public/utils/serve/layout.webp";
import writer from "@/public/utils/serve/story.webp";


function Services() {
  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: false,
          verticalSwiping: false,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "10px",
          vertical: false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "10px",
          vertical: true,
          verticalSwiping: true,
        }
      }
    ]
  };
  let icons = [];

  let skills = [
    {
      title: "Full stack Developer",
      img: developer.src,
    },
    {
      title: "UI Designer",
      img: design.src,
    },
    {
      title: "Web Developer",
      img: web.src,
    },


    {
      title: "Programmer",
      img: programmer.src,
    },
    {
      title: "Image Editor",
      img: imageEditor.src,
    },
    {
      title: "Video Editor",
      img: videoEditor.src,
    },


    {
      title:"3D Animator",
      img: ThreeAni.src,
    },
    {
      title:"3D Sculpture",
      img: ThreeScu.src,
    },
    {
      title:"3D Model Artist",
      img: ThreeModel.src,
    },


    {
      title: "Ienterior Designer",
      img: Interior.src,
    },
    {
      title: "Layout Designer",
      img: layout.src,
    },
    {
      title: "Story Writer",
      img: writer.src,
    },
  ];
  return (
    <>
      <Slider {...settings} className={style.setting}>
        {skills.map((txt, i) => {
          return (
            <div
              className={`${style.serve} ${
                (i + 1) % 2 === 0 ? `${style.graspary}` : {}
              }`}
              key={i}
            >
              <div className={style.content}>
                <div className={style.img}>
                  {/* {console.log(developer)} */}
                 <img src={txt.img} alt={txt.title} />
                </div>
                <h2 className={style.head}>{txt.title}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Services;
