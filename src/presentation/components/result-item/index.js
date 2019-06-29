import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ResultItem = ({ item }) => (
  <a href={`/detail/${item.gym_id}`}>
    <div className={styles.wrap}>
      <div className={styles.imgWrap}>
        <img
          className={styles.profileImg}
          src={item.images.get(0)}
          alt={item.name}
        />
      </div>
      <div className={styles.contentsWrap}>
        <p className={styles.title}>{item.name}</p>
        <p className={styles.location}>{item.location}</p>
        <ul className={styles.serviceWrap}>
          {item.service.map(it => (
            <li
              className={styles.serviceItem}
              key={it}
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </a>
);

ResultItem.propTypes = {
  item: PropTypes.shape({
    images: PropTypes.object,
  }).isRequired,
};

export default ResultItem;
