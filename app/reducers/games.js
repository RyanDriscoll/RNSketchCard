import {
  RECEIVE_GAMES,
  RECEIVE_ROSTERS,
  SELECT_GAME,
  SELECT_TEAM,
  RESET_DATA
} from '../constants';

const initialState = {
  games: [],
  selectedGame: {},
  selectedTeam: 'away',
  homeRoster: [],
  awayRoster: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        games: state.games.concat(action.games)
      });

    case RECEIVE_ROSTERS:
      return Object.assign({}, state, {
        homeRoster: action.home,
        awayRoster: action.away
      });

    case SELECT_GAME:
      return Object.assign({}, state, {
        selectedGame: Object.assign({}, action.game),
        selectedTeam: 'away'
      });

    case SELECT_TEAM:
      return Object.assign({}, state, {
        selectedTeam: action.team
      });

    case RESET_DATA:
      return Object.assign({}, state, {
        selectedGame: {},
        selectedTeam: 'away',
        homeRoster: [],
        awayRoster: []
      });

    default:
      return state;
  }
}
