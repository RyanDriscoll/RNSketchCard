import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Game(props) {
  const game = props.game;

  function handleClick() {
    props.getRosters(game);
    props.selectGame(game);
    props.navigate('Scorecard');
  }

  return (
    <Button
      onPress={handleClick}
      title={`${game.awayName} vs. ${game.homeName}`}
    />
  );
}
