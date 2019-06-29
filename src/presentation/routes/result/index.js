import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import ResultItem from '../../components/result-item';
import Logo from '../../components/logo';
import SearchHeader from '../../components/search-header';

const Result = () => {
  const gyms = useSelector(state => state.gym.gyms);
  const fetchState = useSelector(state => state.gym.fetchState);

  return (
    <div className={styles.wrap}>
      <Logo />
      <SearchHeader />
      <div className={styles.mapButton}>🗺 지도로 보기</div>
      <section className={styles.resultWrap}>
        {
          gyms.map(item => (
            <ResultItem
              key={item.gym_id}
              item={item}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Result;
