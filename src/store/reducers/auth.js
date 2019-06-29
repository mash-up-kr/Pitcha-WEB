import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../actions/auth';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.auth) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
