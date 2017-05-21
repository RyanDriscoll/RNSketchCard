import { combineReducers } from 'redux';
import * as framesReducer from './frames';
import * as gamesReducer from './games';

export default combineReducers(Object.assign(
  framesReducer,
  gamesReducer
));
