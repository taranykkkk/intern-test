import React from 'react';

import styles from './Footer.module.scss';

import { footerRenderMenu } from './footerRenderMenu'; //data for the render elements

function Footer() {
  return (
    <>
      <div className={styles.footer__top}>
        <div className="container">
          <div className={styles.footer__top__desc}>
            {/* render ul and h3 */}
            {footerRenderMenu.map((elem, i) => (
              <div key={elem.id} className={styles.desc__item}>
                <h3>{elem.title}</h3>
                <ul key={i}>
                  {/* render list elements */}
                  {elem.description.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom__wrapper}>
        <div className="container">
          <div className={styles.footer__bottom__desc}>
            <ul>
              <li>новинки</li>
              <li>чоловіки</li>
              <li>жінки</li>
              <li>аксесуари</li>
              <li>акції</li>
            </ul>
            <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
