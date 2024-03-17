import React from 'react';
import infoImg from '../../assets/image/infocataloge/infoImg.jpg';
import styles from './InfoCataloge.module.scss';

function InfoCataloge() {
  return (
    <div className="container">
      <div className={styles.infoCataloge}>
        <div className={styles.leftBlock}>
          <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
          <p>
            Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
            термобілизни “Big warm”
          </p>
          <button>До каталогу</button>
        </div>
        <div className={styles.rightBlock}>
          <img src={infoImg} alt="infoImg" />
        </div>
      </div>
    </div>
  );
}

export default InfoCataloge;
