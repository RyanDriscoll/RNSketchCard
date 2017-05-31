import {
  SELECT_PLAYER,
  REMOVE_PLAYER
} from '../constants';

export const selectPlayer = (team, order, player) => {
  return dispatch => {
    dispatch({
      type: SELECT_PLAYER,
      team,
      order,
      player
    });
  };
};

export const removePlayer = (team, order, index) => {
  return dispatch => {
    dispatch({
      type: REMOVE_PLAYER,
      team,
      order,
      index
    });
  };
};
