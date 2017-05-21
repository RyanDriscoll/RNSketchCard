import React from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

var styles = StyleSheet.create({
  batter: {
    height: 100,
    backgroundColor: 'green'
  },
});

export default function Batter(props) {

  return (
    <View style={styles.batter}>
      <TouchableHighlight
        onPress={() => props.navigate('PlayerPicker', { order: props.order })}>
        <Text>Hello</Text>
      </TouchableHighlight>
    </View>
  );
}
