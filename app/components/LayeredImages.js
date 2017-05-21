import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width / 2;
const height = width / 3 * 4;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    borderWidth: 2,
    height: height
  }
});

export default function LayeredImages(props) {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../frame.png')} style={{width: '100%', height: '100%'}} />
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
