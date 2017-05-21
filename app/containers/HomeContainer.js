import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';
import Game from '../components/Game';

import { Text, StyleSheet, View } from 'react-native';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getGames();
  }
  render() {
    const games = this.props.games;
    const { navigate } = this.props.navigation;
    return (
      <View>
        {!!games.length &&
          games.map(game => {
            return (
              <Game
                game={game}
                key={`${game.homeId + game.awayId + game.time}`}
                selectGame={this.props.selectGame}
                getRosters={this.props.getRosters}
                navigate={navigate}
              />
            );
          })}
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    games: state.default.games
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
