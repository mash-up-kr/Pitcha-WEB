import React from 'react';
import styles from './styles.module.scss';

const SearchHeader = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.inputWrap}>
        <p>다시 찾아볼까요?</p>
        <div className={styles.searchIcon} />
      </div>
      <div className={styles.info}>
        <span>필라테스</span>를 <span>역삼동</span>에서 <span>가격순</span>으로 찾은결과에요.
      </div>
    </header>
  );
};

export default SearchHeader;
