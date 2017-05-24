import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Game from '../components/Game';

import { View } from 'react-native';

class GamesContainer extends Component {

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
    games: state.games.games
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
