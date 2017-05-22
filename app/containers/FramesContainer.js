import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

import LayeredImages from '../components/LayeredImages';

class FramesContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { navigate } = this.props.navigation;
    const frames = [];
    for (let i = 1; i <= 9; i++) {
      frames.push(
        <TouchableHighlight key={i} onPress={() => navigate('Frame')}>
          <View>
            <LayeredImages
              images={[]}
              order={i}
              team={this.props.selectedTeam}
            />
          </View>
        </TouchableHighlight>
      );
    }

    return (
      <View style={{ width: '50%' }}>
        {frames}
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    homeRoster: state.games.homeRoster,
    awayRoster: state.games.awayRoster,
    selectedTeam: state.games.selectedTeam,
    homeBatters: state.players.home,
    awayBatters: state.players.away
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FramesContainer);