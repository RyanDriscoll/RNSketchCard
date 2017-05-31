import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width / 3;
const height = width / 3 * 4;

const styles = StyleSheet.create({
  order: {
    height: height,
    borderWidth: 1
  },
  batter: {}
});

export default function Batter(props) {
  return (
    <TouchableHighlight
      style={styles.order}
      onPress={() => props.navigate('PlayerPicker', { order: props.order })}
    >
      <View>
        {props.batters &&
          props.batters.map((batter, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '33%'
                }}
              >
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
          })}
      </View>
    </TouchableHighlight>
  );
}
