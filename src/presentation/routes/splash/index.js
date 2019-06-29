import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Service from '../../../apis';

export const Splash = () => {
  useEffect(() => {
    Service.kakaoAuthApi.login();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.logo}>FIT-CHA</div>
    </div>
  );
};
