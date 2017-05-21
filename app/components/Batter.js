import React from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

var styles = StyleSheet.create({
  order: {
    height: 100,
    backgroundColor: 'green',
    borderWidth: 2
  },
  batter: {
  }
});

export default function Batter(props) {

  return (
    <TouchableHighlight
      style={styles.order}
      onPress={() => props.navigate('PlayerPicker', { order: props.order })}>
      <View>
      {
        props.batters && props.batters.map(batter => {
          console.log(batter);
          return (
            <View key={batter.uniform_number} style={{ flexDirection: 'row', justifyContent: 'space-between', height: '33%' }}>
              <View style={styles.batter}>
                <Text>{batter.uniform_number}</Text>
              </View>
              <View style={styles.batter}>
                <Text>{batter.display_name}</Text>
              </View>
              <View style={styles.batter}>
                <Text>{batter.position}</Text>
              </View>
            </View>
          );
        })
      }
      </View>
    </TouchableHighlight>
  );
}
