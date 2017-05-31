import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button
} from 'react-native';

const width = Dimensions.get('window').width / 3;
const height = width / 3 * 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    width: '25%',
  },
  batters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '70%',
    padding: 5
  },
  text: {
    fontSize: 20
  }
});

export default function Batter(props) {

  return (
      <View style={{ marginTop: 20 }}>
        <View style={styles.batters}>
          <Text style={styles.text}>#</Text>
          <Text style={styles.text}>NAME</Text>
          <Text style={styles.text}>POS</Text>
        </View>
        {props.batters &&
          props.batters.map((batter, i) => {
            return (
              <View key={i} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <View style={styles.batters}>
                  <Text style={styles.text}>{batter.uniform_number}</Text>
                  <Text style={styles.text}>{batter.display_name}</Text>
                  <Text style={styles.text}>{batter.position}</Text>
                </View>
                <View style={styles.button}>
                  <Button
                    onPress={() => {
                      props.removePlayer(
                        props.team,
                        props.order,
                        i
                      );
                    }}
                    title="REMOVE"
                    color="#FFFFFF"
                  />
                </View>
              </View>
            );
          })
        }
      </View>
  );
}
