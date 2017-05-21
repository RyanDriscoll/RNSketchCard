import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'blue',
    width: '50%',
    borderColor: '#FFF',
    borderWidth: 2
  }
});

export default function ToggleTeam(props) {
  const game = props.game;
  return (
    <View style={styles.toggle}>
      <View style={styles.button}>
        <Button
          style={styles.button}
          color="#FFF"
          onPress={() => props.selectTeam('away')}
          title={`${game.awayName}`}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          color="#FFF"
          onPress={() => props.selectTeam('home')}
          title={`${game.homeName}`}
        />
      </View>
    </View>
  );
}
