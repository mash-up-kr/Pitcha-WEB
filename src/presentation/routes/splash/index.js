import React from 'react';
import styles from './styles.module.scss';

export const Splash = ({ history }) => {
  setTimeout(() => {
    history.push('/main');
  }, 3000);

  return (
    <div className={styles.wrap}>
      <div className={styles.logo} />
        <div className={styles.text}>
          <div className={styles.text2}>
            운동에만 집중하세요.
          </div>
          선택은 핏챠가 도와드릴게요!
        </div>
      <div className={styles.splash} />
    </div>
  );
};

export default Splash;
