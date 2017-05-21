import {
  SELECT_PLAYER
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
