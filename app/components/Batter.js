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
    borderWidth: 1,
    padding: 10
  },
  batters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'gray'
  },
  text: {
    fontSize: 20
  }
});

export default function Batter(props) {
  const placeholder = [];
  for (let i = 3 - props.batters.length; i > 0; i--) {
    if (i === 3) {
      placeholder.push(
        <View key={i} style={styles.batters}>
          <Text style={styles.text} >Select a player</Text>
        </View>
      );
    } else {
      placeholder.push(<View key={i} style={styles.batters} />);
    }
  }
  return (
    <TouchableHighlight
      style={styles.order}
      onPress={() => props.navigate('PlayerPicker', { order: props.order })}
    >
      <View>
        {props.batters &&
          props.batters.map((batter, i) => {
            return (
              <View key={i}>
                <View style={styles.batters}>
                  <View style={styles.batter}>
                    <Text style={styles.text}>{batter.uniform_number}</Text>
                  </View>
                  <View style={styles.batter}>
                    <Text style={styles.text}>{batter.display_name}</Text>
                  </View>
                  <View style={styles.batter}>
                    <Text style={styles.text}>{batter.position}</Text>
                  </View>
                </View>
              </View>
            );
          })
        }
        {
          placeholder
        }
      </View>
    </TouchableHighlight>
  );
}
