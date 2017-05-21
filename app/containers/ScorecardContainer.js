import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';
import BattersContainer from './BattersContainer';
import ToggleTeam from '../components/ToggleTeam';

import { Text, StyleSheet, View } from 'react-native';

class ScorecardContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <ToggleTeam
          game={this.props.selectedGame}
          selectTeam={this.props.selectTeam}
        />
        <BattersContainer />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedGame: state.default.selectedGame
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScorecardContainer);
