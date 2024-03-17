import React, { useState } from 'react';
import Slider from 'react-slick'; // Libs  for the slider

import ArrowNext from './ArrowNext'; // CUSTOM ARROW
import ArrowPrev from './ArrowPrev'; // CUSTOM ARROW

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';

// RENDER SLIDER ITEMS

function ItemSlider({
  children,
  data,
  slidesToShow,
  slidesToScroll,
  title,
  countPage,
}) {
  const [sliderPage, setSliderPage] = useState(1);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // how many items the slider should display
    slidesToScroll: slidesToScroll, // how many elements to display in the slider
    nextArrow: (
      <ArrowNext // custom arrow
        next={() => setSliderPage(sliderPage + 1)}
        sliderPage={sliderPage}
      />
    ),
    prevArrow: (
      <ArrowPrev // custom arrow
        back={() => setSliderPage(sliderPage - 1)}
        sliderPage={sliderPage}
      />
    ),
  };
  return (
    <div className="container">
      <div className={styles.slider__container}>
        <div className={styles.slider__title}>
          <h2>{title}</h2>
          <div className={styles.countPages}>
            0{+sliderPage} / 0{data.length / +countPage}
          </div>
        </div>

        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}

export default ItemSlider;
