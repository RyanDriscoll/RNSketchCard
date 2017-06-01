import React from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 6,
    height: 50,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 6
  },
  button: {
    backgroundColor: 'blue',
    width: 50,
    margin: 5
  }
});

export default function InningControl(props) {
  let triangle = props.team === 'away' ? '\u25B2' : '\u25BC';

  function handleForwardPress() {
    if (props.team === 'away') {
      props.selectTeam('home');
      props.updateInning('away', props.inning);
    } else {
      props.selectTeam('away');
      props.updateInning('home', ++props.inning);
    }
  }

  function handleBackPress() {
    if (props.inning === 1 && props.team === 'away') {
      return;
    }
    if (props.team === 'away') {
      props.selectTeam('home');
      props.updateInning('away', --props.inning);
    } else {
      props.selectTeam('away');
      props.updateInning('home', props.inning);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#FFF"
          onPress={handleBackPress}
          title={'\u2190'}
        />
      </View>
      <Text style={{ fontSize: 25 }}>{`${triangle} ${props.inning}`}</Text>
      <View style={styles.button}>
        <Button
          color="#FFF"
          onPress={handleForwardPress}
          title={'\u2192'}
        />
      </View>
    </View>
  );
}
