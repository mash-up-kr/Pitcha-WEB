import React, { useState } from 'react';
import { List } from 'immutable';
import Select from '../../components/select';
import styles from './styles.module.scss';

export const Main = ({ history }) => {
  const [modalOpened, setModal] = useState(null);
  const exerciseData = List(['PT', '수영', '필라테스', '요가', '골프']);
  const locationData = List(['신사동', '개포동', '대치동', '도곡동', '수서동', '역삼동', '일원동', '청담동', '논현동', '삼성동',]);
  const preferenceData = List(['가격 높은순', '가격 낮은순', '만족도 순', '거리 순']);

  return (
    <div className={styles.wrap}>
      <div className={styles.selector}>
        <div className={styles.selectitem}>
          <div className={styles.underBar}>
            <button onClick={() => setModal('exercise')}>운동 항목</button>
            <img src={require('../../resources/svg/ic-dropdown.svg')} />
          </div>
          <label>을/를</label>
        </div>
        <div className={styles.selectitem}>
          <div className={styles.underBar}>
            <button onClick={() => setModal('location')}>장소</button>
            <img src={require('../../resources/svg/ic-dropdown.svg')} />
          </div>
          <label> 에서</label>
        </div>
        <div className={styles.selectitem}>
          <div className={styles.underBar}>
            <button onClick={() => setModal('preference')}>맞춤순</button>
            <img src={require('../../resources/svg/ic-dropdown.svg')} />
          </div>
          <label> 으로</label>
        </div>

        <button className={styles.btn3} onClick={() => history.push('/result')}>찾아요</button>
      </div>

      {modalOpened === 'exercise' && <Select data={exerciseData} />}
      {modalOpened === 'location' && <Select data={locationData} />}
      {modalOpened === 'preference' && <Select data={preferenceData} />}

      <div className={styles.text}>
        <p>직접 트레이너와 얘기하고 싶다면?</p>
        <button className={styles.btn}>회원 가입  </button>
        <button className={styles.btn2}>  로그인</button>
      </div>
    </div>
  );
};

export default Main;
