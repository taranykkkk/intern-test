import React from 'react';

import styles from './Slider.module.scss';

// CUSTOM ARROW
function ArrowNext({ onClick, next, sliderPage }) {
  return (
    <div
      className={styles.arrowNext}
      onClick={() => {
        if (sliderPage > 2) return;
        else {
          onClick();
          next();
        }
      }}>
      <svg
        width="25"
        height="7"
        viewBox="0 0 25 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25 3.5L20 0.613249V6.38675L25 3.5ZM0 4L20.5 4V3L0 3L0 4Z"
          fill="#343434"
        />
      </svg>
    </div>
  );
}

export default ArrowNext;
