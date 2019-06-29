import React from 'react';
import styles from './styles.module.scss';

const Select = ({ onCloseAction }) => (
  <div className={styles.wrap}>
    <div
      onClick={() => onCloseAction(false)}
    >
      셀렉터입니다
    </div>
  </div>
);

export default Select;
