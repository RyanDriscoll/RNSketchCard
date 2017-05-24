import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { StyleSheet, View, TouchableHighlight, Image, Dimensions } from 'react-native';

let width = Dimensions.get('window').width / 3;
let height = width * 4 / 3;

const styles = StyleSheet.create({
  container: {
    width: '50%'
  },
  image: {
    width: width,
    height: height,
    borderWidth: 1
  }
});

function FramesContainer(props) {

  function nestImages(order) {
    const images = props.images[order];
    let parent, child;
    for (let i = 0; i <= images.length; i++) {
      parent = React.createElement(Image, {
        style: styles.image,
        key: i,
        source: i === images.length ? require('../../frame.png') : { uri: images[i] }
      }, child);
      child = parent;
    }
    return parent;
  }

  const { navigate } = props.navigation;
  const frames = [];
  for (let i = 1; i <= 9; i++) {
    frames.push(
      <TouchableHighlight key={i} onPress={() => navigate('Frame', { order: i})}>
        <View>
          {
            nestImages(i)
          }
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.container}>
      {frames}
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    images: state.frames[state.games.selectedTeam][state.frames.currentInning]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FramesContainer);
