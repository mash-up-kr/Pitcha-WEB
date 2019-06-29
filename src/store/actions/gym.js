export const GYM_ALL_REQUEST = 'gym/GYM_ALL_REQUEST';
export const GYM_ALL_SUCCESS = 'gym/GYM_ALL_SUCCESS';
export const GYM_ALL_FAILURE = 'gym/GYM_ALL_FAILURE';
export const GYM_DETAIL_REQUEST = 'gym/GYM_DETAIL_REQUEST';
export const GYM_DETAIL_SUCCESS = 'gym/GYM_DETAIL_SUCCESS';
export const GYM_DETAIL_FAILURE = 'gym/GYM_DETAIL_FAILURE';

export const gymAllRequest = (payload = {}) => ({
  type: GYM_ALL_REQUEST,
  payload,
});

export const gymAllSuccess = (payload = {}) => ({
  type: GYM_ALL_SUCCESS,
  payload,
});

export const gymAllFailure = (payload = {}) => ({
  type: GYM_ALL_FAILURE,
  payload,
});

export const gymDetailRequest = (payload = {}) => ({
  type: GYM_DETAIL_REQUEST,
  payload,
});

export const gymDetailSuccess = (payload = {}) => ({
  type: GYM_DETAIL_SUCCESS,
  payload,
});

export const gymDetailFailure = (payload = {}) => ({
  type: GYM_DETAIL_FAILURE,
  payload,
});
