import React from 'react';
import styles from './styles.module.scss';

const SearchHeader = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.inputWrap}>
        <p>다시 찾아볼까요?</p>
        <div className={styles.searchIcon} />
      </div>
    </header>
  );
};

export default SearchHeader;
