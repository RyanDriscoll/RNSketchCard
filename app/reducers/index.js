import { combineReducers } from 'redux';
import frames from './frames';
import games from './games';
import players from './players';

export default combineReducers({
  frames,
  games,
  players
});
