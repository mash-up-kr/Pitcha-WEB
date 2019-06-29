import { List } from 'immutable';
import * as gym from '../actions/gym';

export const STATE_LOADING = 'loading';
export const STATE_SUCCESS = 'success';
export const STATE_FAILURE = 'failure';

const initialState = {
  fetchState: STATE_LOADING,
  gyms: List([
    {
      gym_id: 0,
      name: '제이피트 휘트니스',
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
      description: List(['수영빼고 다 가능합니다.']),
      images: List(['http://www.ms-housing.kr/data/file/commercial_gallery/3717611045_2zf3vsIV_f9abdb57399fafeeb4f9da944317b030cc4a92d4.jpg']),
    }, {
      gym_id: 1,
      name: '21세기 헬스클럽',
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
      description: List(['운동을 합시다!']),
      images: List(['http://img.vogue.co.kr/vogue/2018/05/style_5af5862b8f94f-1200x839.jpg']),
    }, {
      gym_id: 2,
      name: '커브스군자클럽',
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
      description: List(['PT 친절하게~~']),
      images: List(['https://www.lottehotel.com/content/dam/lotte-hotel/city/mapo/facilities/spa-fitness/180708-5-2000-fac-mapo-city.jpg.thumb.1920.1920.jpg']),
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
