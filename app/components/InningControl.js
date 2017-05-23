import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'blue',
    borderColor: '#FFF',
    borderWidth: 2
  }
});

export default function InningControl(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          style={styles.button}
          color="#FFF"
          onPress={() => props.updateInning(props.team, --props.inning)}
          title="Previous"
        />
      </View>
      <View>
        <Text>{props.inning}</Text>
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          color="#FFF"
          onPress={() => props.updateInning(props.team, ++props.inning)}
          title="Next"
        />
      </View>
    </View>
  );
}
