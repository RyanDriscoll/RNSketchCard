import { StackNavigator } from 'react-navigation';

import GamesContainer from '../containers/GamesContainer';
import ScorecardContainer from '../containers/ScorecardContainer';
import PlayerPicker from '../containers/PlayerPicker';
import DrawFrame from '../containers/DrawFrame';

export const HomeStack = StackNavigator({
  Home: {
    screen: GamesContainer,
    navigationOptions: {
      title: 'Games'
    }
  },
  Scorecard: {
    screen: ScorecardContainer,
    navigationOptions: {
      title: 'Scorecard',
      gesturesEnabled: false
    }
  },
  PlayerPicker: {
    screen: PlayerPicker,
    navigationOptions: {
      title: 'Choose a Player'
    }
  },
  Frame: {
    screen: DrawFrame,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
});

