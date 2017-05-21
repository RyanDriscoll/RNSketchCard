
import * as FrameActions from './frames';
import * as GameActions from './games';
import * as PlayerActions from './players';

export const ActionCreators = Object.assign({},
  FrameActions,
  GameActions,
  PlayerActions
);
