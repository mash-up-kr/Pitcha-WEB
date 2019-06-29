import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import Logo from '../../components/logo';

const Detail = ({ match }) => {
  const gym = useSelector(state => state.gym.gyms.get(match.params.id));

  return (
    <div className={styles.wrap}>
      <Logo />
      <div className={styles.heroImgWrap}>
        <img
          className={styles.heroImg}
          src={gym.images.get(0)}
          alt={gym.name}
        />
      </div>
      <div className={styles.contentsWrap}>
        <p className={styles.name}>{gym.name}</p>
        <p className={styles.description}>{gym.description.get(0)}</p>
        <ul className={styles.serviceWrap}>
          {gym.facility.map(it => (
            <li
              className={styles.serviceItem}
              key={it}
            >
              {it}
            </li>
          ))}
        </ul>
        <p className={styles.location}>{gym.location}</p>
        <div className={styles.priceWrap}>
          {
            gym.service.map(it => (
              <div className={styles.priceItem}>
                <p className={styles.priceTitle}>{it.toUpperCase()}</p>
                <p className={styles.priceAmount}>{gym.cost[it]}원</p>
              </div>
            ))
          }
        </div>
      </div>
      <a href={`tel:${gym.telephone}`}>
        <div
          className={gym.telephone ? styles.telephoneButton : styles.nonTelephoneButton}
        >
          전화 문의하기
        </div>
      </a>
    </div>
  );
};

export default Detail;
