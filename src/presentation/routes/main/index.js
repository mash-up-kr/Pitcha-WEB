import React, { useState } from 'react';
import { List } from 'immutable';
import Select from '../../components/select';

export const Main = () => {
  const [modalOpened, setModal] = useState(null);
  const exerciseData = List(['PT', '수영', '필라테스', '요가', '골프']);
  const locationData = List(['신사동', '개포동', '대치동', '도곡동', '수서동', '역삼동', '일원동', '청담동', '논현동', '삼성동',]);
  const preferenceData = List(['가격 높은순', '가격 낮은순', '만족도 순', '거리 순']);

  return (
    <div>
      <button onClick={() => setModal('exercise')}>운동 항목</button><label>을</label>
      <button onClick={() => setModal('location')}>장소</button><label>에서</label>
      <button onClick={() => setModal('preference')}>맞춤순</button><label>으로</label>

      {modalOpened === 'exercise' && <Select data={exerciseData} />}
      {modalOpened === 'location' && <Select data={locationData} />}
      {modalOpened === 'preference' && <Select data={preferenceData} />}
      <div>
        <p>맞춤 검색을 하고 싶다면?</p>
        <button>회원 가입</button>
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Main;
