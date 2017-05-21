import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View } from 'react-native';

import Batter from '../components/Batter';

class BattersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const batters = [];
    let roster = this.props.selectedTeam === 'away'
      ? this.props.awayRoster
      : this.props.homeRoster;
    for (let i = 1; i <= 9; i++) {
      batters.push(<Batter order={i} key={i} roster={roster} />);
    }
    return (
      <View>
        { batters }
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    homeRoster: state.default.homeRoster,
    awayRoster: state.default.awayRoster,
    selectedTeam: state.default.selectedTeam
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattersContainer);
