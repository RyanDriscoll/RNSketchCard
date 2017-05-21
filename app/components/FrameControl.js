import React from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function FrameControl(props) {

  return (
    <View style={styles.container}>

      <Button
        onPress={props.clear}
        title="Clear"
      />
      <Button
        disabled={!props.images}
        onPress={props.onSave}
        title="Save"
      />
      <Button
        onPress={props.undo}
        title="Undo"
      />
      <Button
        onPress={props.toggleDrawErase}
        title={props.erase ? 'Draw' : 'Erase'}
      />

    </View>
  );
}
