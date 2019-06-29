import React, { useState } from 'react';
import styles from './styles.module.scss';
import Select from '../../components/select';

export const Splash = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.logo}
        onClick={() => setOpened(!opened)}
      >
        FIT-CHA
      </div>
      {opened && <Select onCloseAction={setOpened} />}
    </div>
  );
};
