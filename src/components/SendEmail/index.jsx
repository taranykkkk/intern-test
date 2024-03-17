import React from 'react';

import styles from './SendEmail.module.scss';

function SendEmail() {
  return (
    <div className="container">
      <div className={styles.sendEmail__container}>
        <h2>Спіймай всі акції!</h2>
        <p>
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
          будуть з`влятись у нашому магазині. А у нас їх багато :D
        </p>
        <div className={styles.input__block}>
          <input placeholder="введіть" />
          <button>Підписатись</button>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
