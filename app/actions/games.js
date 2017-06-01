import axios from 'axios';

import {
  RECEIVE_GAMES,
  RECEIVE_ROSTERS,
  SELECT_GAME,
  SELECT_TEAM,
  RESET_DATA
} from '../constants';


export const getGames = () => {
  const gamesAPI = 'https://mlbsketchcard.herokuapp.com/api/games';
  // const gamesAPI = 'https://mlbsketchcard.herokuapp.com/api/games';
  return dispatch => {
    return axios
      .get(gamesAPI)
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
  // const homeRosterAPI = `https://mlbsketchcard.herokuapp.com/api/team/${game.homeId}`;
  // const awayRosterAPI = `https://mlbsketchcard.herokuapp.com/api/team/${game.awayId}`
  const homeRosterAPI = `http://localhost:3001/api/team/${game.homeId}`;
  const awayRosterAPI = `http://localhost:3001/api/team/${game.awayId}`;
  return dispatch => {
    return axios
      .all([
        axios.get(homeRosterAPI),
        axios.get(awayRosterAPI)
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

export const resetData = () => {
  return dispatch => {
    dispatch({
      type: RESET_DATA
    });
  };
};
