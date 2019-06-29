import Axios from 'axios';
import { initKakakoAPI } from './auth';

const makeAxiosInstance = baseURL => (
  Axios.create({
    baseURL,
    timeout: 60000,
    headers: { Accept: 'application/json' },
  })
);

const Service = {
  kakaoAuthApi: initKakakoAPI(makeAxiosInstance('http://dummy.restapiexample.com')),
  fitchaApi: makeAxiosInstance('/'),
};

export default Service;
