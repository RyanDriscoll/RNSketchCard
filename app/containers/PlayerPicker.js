import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Button, View, Picker } from 'react-native';

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
    this.props.navigation.goBack();
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
        <Button
          onPress={this.handlePress}
          title="ADD PLAYER"
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
    selectedTeam: state.games.selectedTeam
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPicker);
