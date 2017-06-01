import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  game: {
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 6,
    margin: 6,
    width: '80%',
    alignSelf: 'center'
  }
});

export default function Game(props) {
  const game = props.game;

  function handleClick() {
    if (props.selectedGame.gameId !== game.gameId) {
      props.resetData();
      props.getRosters(game);
    }
    props.selectGame(game);
    props.navigate('Scorecard');
  }

  return (
    <View style={styles.game}>
      <Button
        onPress={handleClick}
        title={`${game.awayName} vs. ${game.homeName}`}
      />
    </View>
  );
}
