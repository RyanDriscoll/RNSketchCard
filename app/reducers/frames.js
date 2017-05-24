import {
  ADD_IMAGE,
  UNDO_IMAGE,
  TRASH_IMAGE,
  UPDATE_INNING
} from '../constants';

const initialState = {
    home: {
      1: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    },
    away: {
      1: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    },
    currentInning: 1,
    images: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return Object.assign({}, state, {
        [action.team]: Object.assign({}, state[action.team], {
          [action.inning]: Object.assign({}, state[action.team][action.inning], {
            [action.order]: [
              ...state[action.team][action.inning][action.order],
              action.image
            ]
          })
        })
      });
    case UNDO_IMAGE:
    console.log('undo image', state[action.team][action.inning][action.order], action.team, action.inning, action.order);
      return Object.assign({}, state, {
        [action.team]: Object.assign({}, state[action.team], {
          [action.inning]: Object.assign({}, state[action.team][action.inning], {
            [action.order]: state[action.team][action.inning][action.order].slice(0, -1)
          })
        })
      });
      // return Object.assign({}, state, {
      //   images: state.images.slice(0, -1)
      // });
    case TRASH_IMAGE:
      return Object.assign({}, state, {
        [action.team]: Object.assign({}, state[action.team], {
          [action.inning]: Object.assign({}, state[action.team][action.inning], {
            [action.order]: state[action.team][action.inning][action.order].slice(1)
          })
        })
      });
      // return Object.assign({}, state, {
      //   images: state.images.slice(1)
      // });
    case UPDATE_INNING:
      if (!state[action.team][action.inning]) {
        return Object.assign({}, state, {
          currentInning: action.inning,
          away: Object.assign({}, state[action.team], {
            [action.inning]: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []}
          }),
          home: Object.assign({}, state[action.team], {
            [action.inning]: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []}
          })
        });
      } else {
        return Object.assign({}, state, {
          currentInning: action.inning
        });
      }
    // case ADD_PATHS:
    //   if (!newState[action.team][action.x]) {
    //     newState[action.team][action.x] = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
    //   }
    //   newState[action.team][action.x] = Object.assign({}, newState[action.team][action.x], {
    //       [action.y]: newState[action.team][action.x][action.y].concat(action.paths)
    //     });
    //   break;

    // case SELECT_GAME:
    //   return initialState;
    //   break;

    default:
      return state;
  }
}
