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
        onPress={props.undo}
        title="Undo"
        disabled={!props.disableUndo}
      />
      <Button
        onPress={props.clear}
        title="Clear"
      />
      <Button
        disabled={!props.disableUndo}
        onPress={props.save}
        title="Save"
      />

    </View>
  );
}

