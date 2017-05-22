import {
  ADD_IMAGE,
  UNDO_IMAGE,
  TRASH_IMAGE
} from '../constants';

const initialState = {
    home: {
      1: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    },
    away: {
      1: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    },
    images: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    // case ADD_IMAGE:
    //   return Object.assign({}, state, {
    //     images: [
    //       ...state.images,
    //       action.image
    //     ]
    //   });

    // {
    //       [action.order]: [
    //         ...state[action.team][action.inning][action.order],
    //         action.image
    //       ]
    //     }
    case ADD_IMAGE:
      // if (!state[action.team][action.inning]) {
      //   let newState = Object.assign({}, state, {
      //     [action.team]:
      //   })
      // }
      return Object.assign({}, state, {
        [action.team]: Object.assign({}, state[action.team][action.inning], {
          [action.inning]: Object.assign({}, state[action.team][action.inning][action.order], {
            [action.order]: [
              ...state[action.team][action.inning][action.order],
              action.image
            ]
          })
        })
      });
    case UNDO_IMAGE:
      return Object.assign({}, state, {
        images: state.images.slice(0, -1)
      });
    case TRASH_IMAGE:
      return Object.assign({}, state, {
        images: state.images.slice(1)
      });
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
