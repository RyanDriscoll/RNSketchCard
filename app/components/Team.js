import React from 'react';
import { View, Text } from 'react-native';

export default function Team(props) {
  const game = props.game;
  return (
    <View style={{
      backgroundColor: game[`${props.selectedTeam}Colors`][1],
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{

        color: game[`${props.selectedTeam}Colors`][2],
        fontSize: 25,
        fontWeight: 'bold',
      }}>
      { props.text }
      </Text>
    </View>
  );
}
      // <View
      //   style={
      //     props.selectedTeam === 'away' ? styles.activeButton : styles.button
      //   }
      // >
      //   <Button
      //     color="#FFF"
      //     onPress={() => props.selectTeam('away')}
      //     title={`${game.awayName}`}
      //   />
      // </View>
      // <View
      //   style={
      //     props.selectedTeam === 'home' ? styles.activeButton : styles.button
      //   }
      // >
      //   <Button
      //     color="#FFF"
      //     onPress={() => props.selectTeam('home')}
      //     title={`${game.homeName}`}
      //   />
      // </View>
