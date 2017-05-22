import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';
import BattersContainer from './BattersContainer';
import FramesContainer from './FramesContainer';
import ToggleTeam from '../components/ToggleTeam';

import { Text, StyleSheet, View, ScrollView } from 'react-native';

class ScorecardContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <ScrollView>
        <ToggleTeam
          game={this.props.selectedGame}
          selectTeam={this.props.selectTeam}
          selectedTeam={this.props.selectedTeam}
        />
        <View style={{ flexDirection: 'row'}}>
          <BattersContainer navigation={this.props.navigation} />
          <FramesContainer navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedGame: state.games.selectedGame,
    selectedTeam: state.games.selectedTeam
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScorecardContainer);
