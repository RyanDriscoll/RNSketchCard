import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width / 3;
const height = deviceWidth / 3 * 4;

const styles = StyleSheet.create({
  batter: {
    height: height,
    padding: 10,
    margin: 6,
    marginLeft: 6,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 6
  },
  batters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'gray'
  },
  placeholderText: {
    fontSize: 20,
    color: 'gray',
    fontStyle: 'italic'
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
          <Text style={styles.placeholderText} >Select a player</Text>
        </View>
      );
    } else {
      placeholder.push(<View key={i} style={styles.batters} />);
    }
  }
  return (
    <View style={styles.batter}>
    <TouchableHighlight
      onPress={() => props.navigate('PlayerPicker', { order: props.order })}
    >
      <View>
        {props.batters &&
          props.batters.map((batter, i) => {
            return (
              <View key={i}>
                <View style={styles.batters}>
                    <Text style={styles.text}>{batter.uniform_number}</Text>
                    <Text style={styles.text}>{batter.display_name}</Text>
                    <Text style={styles.text}>{batter.position}</Text>
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
    </View>
  );
}
