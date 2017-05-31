import React from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: 50,
    margin: 2,
    borderRadius: 50
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
        <Text style={{ fontSize: 20 }}>{`${triangle} ${props.inning}`}</Text>
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
