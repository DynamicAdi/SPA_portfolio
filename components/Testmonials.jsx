import React from "react";
import style from "@/styles/feedback.module.scss";
import { VscFeedback } from "react-icons/vsc";
import { PiQuotesFill } from "react-icons/pi";
import Slider from "react-slick";

export default function Testmonials() {

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
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

  return (
    <div className={`${style.main}`}>
      <div className={style.tag}>
        <VscFeedback />
        <h2>Testmonials</h2>
      </div>
  {/* <Slider {...settings}> */}
      <div className={style.testmonials}>
        <div className={style.quotes}>
          <PiQuotesFill />
        </div>
        <p>
        Lorem ipsum dolonndis suscipit, consequatur placeat a velit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit 343433
        </p>
        <div className={style.user}>
          <h2 className={style.name}>Adarsh Pandit</h2>
          <h3 className={style.designation}>Web Developer</h3>
        </div>
      </div>
  {/* </Slider> */}
    </div>
  );
}
