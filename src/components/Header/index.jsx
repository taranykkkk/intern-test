import React from 'react';
import styles from './Header.module.scss';

//icon
import search from '../../assets/image/search.svg';
import heart from '../../assets/image/heart.svg';
import bag from '../../assets/image/bag.svg';

function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.header__top}>
            <div>
              <a>098 900 09 09</a>
              <a>Допомога</a>
            </div>
            <a>Увійти/Зареєструватися</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.header__bottom}>
          <a className={styles.logo}>IGNAT</a>
          <ul className={styles.left}>
            <li>НОВИНКИ</li>
            <li>ЧОЛОВІКИ</li>
            <li>ЖІНКИ</li>
            <li>АКСЕСУАРИ</li>
            <li>АКЦІЇ</li>
          </ul>
          <div className={styles.right}>
            <div className={styles.input__wrapper}>
              <input />
              <img src={search} alt="search" />
            </div>
            <img src={heart} alt="heart" />
            <img src={bag} alt="bag" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
