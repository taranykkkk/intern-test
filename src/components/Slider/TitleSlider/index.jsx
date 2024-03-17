import React from 'react';
import Slider from 'react-slick'; // Libs  for the slider

// Default styles for the ReactSlick

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Slider.module.scss';
import ArrowNext from './ArrowNext'; // CUSTOM ARROW
import ArrowPrev from './ArrowPrev'; // CUSTOM ARROW

export default function TitleSlider() {
  const settings = {
    customPaging: function () {
      // Custom pagination
      return <div></div>;
    },
    dots: true, // pagination active
    dotsClass: styles.slider__pagination, // class for pagination styling
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />, // custom arrow
    prevArrow: <ArrowPrev />, // custom arrow
  };

  return (
    <div className={styles.slider__container}>
      <Slider {...settings}>
        <div className={styles.content}>
          <div className={styles.slider__title__left}>
            <h1>Швидше. Вище. Сильніше.</h1>
            <p>Разом із Nike</p>
          </div>
          <div className={styles.slider__title__right}>
            <span>Знижки до 40%</span>
            <p>Залишився лише тиждень</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.slider__title__left}>
            <h1>Швидше. Вище. Сильніше.</h1>
            <p>Разом із Nike</p>
          </div>
          <div className={styles.slider__title__right}>
            <span>Знижки до 40%</span>
            <p>Залишився лише тиждень</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.slider__title__left}>
            <h1>Швидше. Вище. Сильніше.</h1>
            <p>Разом із Nike</p>
          </div>
          <div className={styles.slider__title__right}>
            <span>Знижки до 40%</span>
            <p>Залишився лише тиждень</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
