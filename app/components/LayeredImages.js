import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageContainer: {
    position: 'absolute',
    top: 20,
    width: 300,
    height: 400,
    borderWidth: 2
  }
});

export default function LayeredImages(props) {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../frame.png')} style={{width: '100%'}} />
      </View>
      {
        !!props.images.length && props.images.map((image, i) => {
          return (
            <View style={styles.imageContainer} key={i}>
              <Image
                source={{uri: image}}
                style={{
                  height: '100%',
                  width: '100%'
                }}
              />
            </View>
          );
        })
      }
    </View>
  );
}
