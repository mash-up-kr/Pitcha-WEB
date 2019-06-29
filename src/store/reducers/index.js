import { combineReducers } from 'redux';
import auth from './auth';
import gym from './gym';

const reducer = combineReducers({ auth, gym });

export default reducer;
