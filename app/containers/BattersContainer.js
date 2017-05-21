import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View } from 'react-native';

import Batter from '../components/Batter';

class BattersContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { navigate } = this.props.navigation;
    const batters = [];
    // let roster = this.props.selectedTeam === 'away'
    //   ? this.props.awayRoster
    //   : this.props.homeRoster;
    let selectedBatters = this.props.selectedTeam === 'away'
      ? this.props.awayBatters
      : this.props.homeBatters;
    for (let i = 1; i <= 9; i++) {
      batters.push(
        <Batter
          order={i}
          key={i}
          // roster={roster}
          team={this.props.selectedTeam}
          batters={selectedBatters[i]}
          navigate={navigate}
        />);
    }
    return (
      <View style={{ width: '50%' }}>
        { batters }
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    homeRoster: state.games.homeRoster,
    awayRoster: state.games.awayRoster,
    selectedTeam: state.games.selectedTeam,
    homeBatters: state.players.home,
    awayBatters: state.players.away
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattersContainer);
