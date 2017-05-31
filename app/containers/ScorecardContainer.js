import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import BattersContainer from './BattersContainer';
import FramesContainer from './FramesContainer';
import Team from '../components/Team';
import InningControl from '../components/InningControl';

import { View, ScrollView } from 'react-native';

function ScorecardContainer(props) {
  return (
    <View >
      <Team
        style={{ height: 20 }}
        game={props.selectedGame}
        selectedTeam={props.selectedTeam}
        text={props.selectedGame[`${props.selectedTeam}Name`]}
      />
      <InningControl
        selectTeam={props.selectTeam}
        updateInning={props.updateInning}
        inning={props.inning}
        team={props.team}
      />
      <ScrollView>
        <View style={{ flexDirection: 'row'}}>
          <BattersContainer navigation={props.navigation} />
          <FramesContainer navigation={props.navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedGame: state.games.selectedGame,
    selectedTeam: state.games.selectedTeam,
    inning: state.frames.currentInning,
    team: state.games.selectedTeam
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScorecardContainer);
