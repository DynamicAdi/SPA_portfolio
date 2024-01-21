import React from "react";
import style from "@/styles/feedback.module.scss";
import { VscFeedback } from "react-icons/vsc";
import { PiQuotesFill } from "react-icons/pi";
import Slider from "react-slick";
import { feedback } from "@/data/testmonials";


export default function Testmonials() {

  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2800,
    dotsClass: "button__bar",
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

  return (
    <div className={`${style.main}`}>
      <div className={style.tag}>
        <VscFeedback />
        <h2>Testmonials</h2>
      </div>
    <div className={style.parent}>
  <Slider {...settings} className={style.slideMenu}>

  {feedback.map((items, index) => {
    return (
      <div className={style.testmonials} key={index}>
        <div className={style.quotes}>
          <PiQuotesFill />
        </div>
        <p>
        {items.UserFeedback}
         </p>
        <div className={style.user}>
          <h2 className={style.name}>{items.UserName}</h2>
          <h3 className={style.designation}>{items.UserProfession}</h3>
        </div>
      </div>
    )
  })}
      
  </Slider>
    </div>
    </div>
  );
}
