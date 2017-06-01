import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Game from '../components/Game';

import { ScrollView } from 'react-native';

class GamesContainer extends Component {

  componentDidMount() {
    this.props.getGames();
  }
  render() {
    const games = this.props.games;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ marginTop: 20 }}>
        {!!games.length &&
          games.map(game => {
            return (
              <Game
                game={game}
                selectedGame={this.props.selectedGame}
                key={game.gameId}
                selectGame={this.props.selectGame}
                getRosters={this.props.getRosters}
                resetData={this.props.resetData}
                navigate={navigate}
              />
            );
          })}
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    games: state.games.games,
    selectedGame: state.games.selectedGame
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
