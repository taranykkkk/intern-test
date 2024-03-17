import React from 'react';
import styles from './Slider.module.scss';

function ArrowNext({ onClick }) {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <svg
        width="17"
        height="32"
        viewBox="0 0 17 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.05265 31.6433L16.6544 16.8433C17.1152 16.3763 17.1152 15.6243 16.6544 15.1573L2.05265 0.35727C1.58685 -0.11573 0.827171 -0.11873 0.356373 0.34627C-0.114426 0.81227 -0.119425 1.57127 0.345377 2.04327L14.1145 16.0003L0.345377 29.9573C-0.119425 30.4293 -0.114426 31.1883 0.356373 31.6543C0.590273 31.8853 0.894144 32.0003 1.19901 32.0003C1.50888 32.0003 1.81775 31.8813 2.05265 31.6433Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
export default ArrowNext;
