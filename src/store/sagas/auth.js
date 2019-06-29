import { call, put, take } from 'redux-saga/effects';
import { auth as authActions } from '../actions';
import Service from '../../apis';

export function* signIn() {
  while (true) {
    try {
      const action = yield take(authActions.SIGN_IN_REQUEST);

      const response = yield call(Service.kakaoAuthApi.login(), action.payload);

      yield put(authActions.signInSuccess(response.data));
    } catch (error) {
      yield put(authActions.signInFailure(error));
    }
  }
}
