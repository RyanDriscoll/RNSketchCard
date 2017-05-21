import axios from 'axios';

import {
  RECEIVE_GAMES,
  RECEIVE_ROSTERS,
  SELECT_GAME,
  SELECT_TEAM
} from '../constants';

export const getGames = () => {
  return dispatch => {
    return axios
      .get('http://localhost:3001/api/games')
      .then(res => res.data)
      .then(games => {
        dispatch({
          type: RECEIVE_GAMES,
          games
        });
      })
      .catch(err => console.error(err));
  };
};

export const getRosters = game => {
  return dispatch => {
    return axios
      .all([
        axios.get(`http://localhost:3001/api/team/${game.homeId}`),
        axios.get(`http://localhost:3001/api/team/${game.awayId}`)
      ])
      .then(
        axios.spread(function(home, away) {
          dispatch({
            type: RECEIVE_ROSTERS,
            home: home.data,
            away: away.data
          });
        })
      )
      .catch(err => console.error(err));
  };
};

export const selectGame = game => {
  return dispatch => {
    dispatch({
      type: SELECT_GAME,
      game
    });
  };
};

export const selectTeam = team => {
  return dispatch => {
    dispatch({
      type: SELECT_TEAM,
      team
    });
  };
};
