import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeContainer from '../containers/HomeContainer';
import ScorecardContainer from '../containers/ScorecardContainer';
import PlayerPicker from '../containers/PlayerPicker';
import DrawFrame from '../containers/DrawFrame';

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Games'
    }
  },
  Scorecard: {
    screen: ScorecardContainer,
    navigationOptions: {
      title: 'Scorecard'
    }
  },
  PlayerPicker: {
    screen: PlayerPicker,
    navigationOptions: {
      title: 'Choose a Player'
    }
  },
  Frame: {
    screen: DrawFrame
  }
});

