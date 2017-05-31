import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Button, View, Picker } from 'react-native';

import DisplayBatters from '../components/DisplayBatters';

class PlayerPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      player: {},
      index: 0
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const roster = this.props.selectedTeam === 'away'
      ? this.props.awayRoster
      : this.props.homeRoster;

    this.setState({ player: roster[0], roster });
  }

  handleChange(value) {
    this.setState({
      player: this.state.roster[value],
      index: value
    });
  }

  handlePress() {
    this.props.selectPlayer(
      this.props.selectedTeam,
      this.props.navigation.state.params.order,
      this.state.player
    );
    // this.props.navigation.goBack();
  }

  render() {

    return (
      <View>
        <Picker
          selectedValue={this.state.index}
          onValueChange={this.handleChange}
        >
          {this.state.roster.map((player, index) => {
            return (
              <Picker.Item
                key={player.uniform_number}
                label={player.display_name}
                value={index}
              />
            );
          })}
        </Picker>
        <View style={{backgroundColor: 'blue', width: '35%', alignSelf: 'center'}}>
          <Button
            onPress={this.handlePress}
            title="ADD PLAYER"
            color="#FFFFFF"
          />
        </View>
        <DisplayBatters
          team={this.props.selectedTeam}
          order={this.props.navigation.state.params.order}
          removePlayer={this.props.removePlayer}
          batters={this.props.batters[this.props.navigation.state.params.order]}
        />
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
    batters: state.players[state.games.selectedTeam]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPicker);
