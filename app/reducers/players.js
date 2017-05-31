import { SELECT_PLAYER, REMOVE_PLAYER } from '../constants';

const initialState = {
  home: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  },
  away: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLAYER:
      return Object.assign({}, state, {
        [action.team]: Object.assign({}, state[action.team], {
          [action.order]: [...state[action.team][action.order], action.player]
        })
      });

    case REMOVE_PLAYER:
      return Object.assign({}, state, {
        [action.team]: Object.assign({}, state[action.team], {
          [action.order]: state[action.team][action.order].slice(0, action.index).concat(state[action.team][action.order].slice(action.index + 1))
        })
      });
    default:
      return state;
  }
}
