import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View, Dimensions } from 'react-native';

import Batter from '../components/Batter';

function BattersContainer(props) {
  const width = Dimensions.get('window').width * 2 / 3 - 12;
  const { navigate } = props.navigation;
  const batters = [];
  let selectedBatters = props.selectedTeam === 'away'
    ? props.awayBatters
    : props.homeBatters;
  for (let i = 1; i <= 9; i++) {
    batters.push(
      <Batter
        order={i}
        key={i}
        team={props.selectedTeam}
        batters={selectedBatters[i]}
        navigate={navigate}
      />);
  }
  return (
    <View style={{ width: width }}>
      { batters }
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedTeam: state.games.selectedTeam,
    homeBatters: state.players.home,
    awayBatters: state.players.away
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattersContainer);
