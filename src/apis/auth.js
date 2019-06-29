const END_POINT = '/api/v1/employees';
const config = {};

export const initKakakoAPI = axiosInstance => (
  {
    login: () => axiosInstance.get(END_POINT, config),
  }
);
