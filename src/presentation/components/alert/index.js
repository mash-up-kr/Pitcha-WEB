import React, { useEffect } from 'react';
import styles from './styles.module.scss';

export const Alert = ({children, setModalState}) => (
  <div className={styles.wrap}>
    <section className={styles.alertWrap}>
      <div className={styles.contentWrap}>
        {children}
      </div>
      <button
        className={styles.buttonWrap}
        onClick={() => setModalState(false)}
      >
        확인
      </button>
    </section>
  </div>
);

export default Alert;
