import { List } from 'immutable';
import * as gym from '../actions/gym';

export const STATE_LOADING = 'loading';
export const STATE_SUCCESS = 'success';
export const STATE_FAILURE = 'failure';

const initialState = {
  fetchState: STATE_LOADING,
  gyms: List([
    {
      gym_id: 1,
      name: '뱅크샐러드',
      location: '서울특별시 영등포구 국제금융로8길 16 신영증권빌딩 9층',
      telephone: '02-3453-9300',
      cost: {
        pt: 50000,
        yoga: 35000,
        swimming: null,
        golf: null,
        tabata: 40000,
        spinning: null,
        fitness: 30000,
      },
      service: List(['pt', 'yoga', 'tabata', 'fitness']),
      facility: List(['shower', 'locker', 'uniform']),
      description: List(['신경꺼도 내돈관리!']),
      images: List(['https://cdn.banksalad.com/og/default.png']),
    }, {
      gym_id: 2,
      name: '토스',
      location: '서울특별시 강남구 테헤란로 142 아크플레이스 12층',
      telephone: '02-544-7055',
      cost: {
        pt: 30000,
        yoga: 45000,
        swimming: 20000,
        golf: 10000,
        tabata: null,
        spinning: null,
        fitness: null,
      },
      service: List(['pt', 'yoga', 'swimming', 'golf']),
      facility: List(['shower', 'locker', 'parking']),
      description: List(['돈을 토쓰윽!']),
      images: List(['http://i.011st.com/ui_img/cm_display/2018/11/SM/2296-12/m_101.png']),
    }, {
      gym_id: 3,
      name: '카카오페이',
      location: '경기 성남시 분당구 판교역로 152 알파돔타워 12층',
      telephone: '1644-7405',
      cost: {
        pt: null,
        yoga: 45000,
        swimming: 20000,
        golf: 10000,
        tabata: null,
        spinning: null,
        fitness: 24000,
      },
      service: List(['yoga', 'swimming', 'golf', 'fitness']),
      facility: List(['shower', 'parking']),
      description: List(['라이언이 뛰어온다~~']),
      images: List(['http://www.interview365.com/news/photo/201808/81566_85529_4011.jpg']),
    },
  ]),
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case gym.GYM_ALL_SUCCESS:
      return {
        ...state,
        fetchState: STATE_SUCCESS,
      };
    case gym.GYM_ALL_FAILURE:
      return {
        ...state,
        fetchState: STATE_FAILURE,
      };
    default:
      return state;
  }
};

export default reducer;
