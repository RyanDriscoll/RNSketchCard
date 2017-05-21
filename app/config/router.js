import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeContainer from '../containers/HomeContainer';
import ScorecardContainer from '../containers/ScorecardContainer';
import PlayerPicker from '../containers/PlayerPicker';

export const ScorecardStack = StackNavigator({
  Scorecard: {
    screen: ScorecardContainer
  },
  PlayerPicker: {
    screen: PlayerPicker,
    navigationOptions: {
      title: 'Choose a Player'
    }
  }
}, {
  headerMode: 'none'
});

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Games'
    }
  },
  Scorecard: {
    screen: ScorecardStack,
    navigationOptions: {
      title: 'Scorecard'
    }
  }
});

