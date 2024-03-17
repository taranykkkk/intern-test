import React from 'react';
import styles from './Slider.module.scss';

function ArrowPrev({ onClick }) {
  return (
    <div className={styles.nextPrev} onClick={onClick}>
      <svg
        width="17"
        height="32"
        viewBox="0 0 17 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9474 31.6433L0.345602 16.8433C-0.115201 16.3763 -0.115201 15.6243 0.345602 15.1573L14.9474 0.35727C15.4132 -0.11573 16.1728 -0.11873 16.6436 0.34627C17.1144 0.81227 17.1194 1.57127 16.6546 2.04327L2.88551 16.0003L16.6546 29.9573C17.1194 30.4293 17.1144 31.1883 16.6436 31.6543C16.4097 31.8853 16.1059 32.0003 15.801 32.0003C15.4911 32.0003 15.1823 31.8813 14.9474 31.6433Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default ArrowPrev;
