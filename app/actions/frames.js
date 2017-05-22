import {
  ADD_IMAGE,
  UNDO_IMAGE,
  TRASH_IMAGE
} from '../constants';

export const addImage = (image) => {
  return dispatch => {
    dispatch({
      type: ADD_IMAGE,
      image
    });
  };
};

export const undoImage = () => {
  return dispatch => {
    dispatch({
      type: UNDO_IMAGE
    });
  };
};

export const garbageCollectImage = () => {
  return dispatch => {
    dispatch({
      type: TRASH_IMAGE
    });
  };
};
