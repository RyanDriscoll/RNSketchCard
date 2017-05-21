import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Button, StyleSheet, View, Picker } from 'react-native';

var styles = StyleSheet.create({
  picker: {
    height: 100
  }
});

class PlayerPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const roster = this.props.selectedTeam === 'away'
      ? this.props.awayRoster
      : this.props.homeRoster;
    return roster.length
      ? <Picker style={styles.picker}>
          {roster.map(player => {
            return (
              <Picker.Item
                key={player.uniform_number}
                label={player.display_name}
                value={player.display_name}
              />
            );
          })}
        </Picker>
      : null;
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPicker);
