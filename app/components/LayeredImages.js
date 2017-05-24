import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Sketch from 'react-native-sketch';

class LayeredImages extends React.Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.undo = this.undo.bind(this);
    this.loadImage = this.loadImage.bind(this);
  }

  componentWillUnmount() {
    this.sketch.clear();
  }

  /**
   * Clear / reset the drawing
   */
  clear() {
    // const order = this.props.navigation.state.params.order;
    const order = this.props.order;
    this.sketch.clear();
    for (let i = 0; i < this.props.images[order].length; i++) {
      this.props.undoImage(this.props.team, this.props.inning, order);
    }
  }

  /**
   * The Sketch component provides a 'saveImage' function (promise),
   * so that you can save the drawing in the device and get an object
   * once the promise is resolved, containing the path of the image.
   */
  onSave() {
    console.log('layeredimages', this.el);
    // this.sketch.saveImage(this.state.images)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));
  }

  undo() {
    // const order = this.props.navigation.state.params.order;
    const order = this.props.order;
    this.sketch.clear();
    this.props.undoImage(this.props.team, this.props.inning, order);
  }

  loadImage() {
    // const order = this.props.navigation.state.params.order;
    const order = this.props.order;
    return this.props.images[order][this.props.images[order].length - 1];
  }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    // const order = this.props.navigation.state.params.order;
    const order = this.props.order;
    this.props.addImage(base64Image, this.props.team, this.props.inning, order);
    if (this.props.images[order].length > 4) {
      this.props.garbageCollectImage();
    }
  }

  nestImages() {
    // let parent, child = React.createElement(Image, {
    //   height: props.height,
    //   width: props.width,
    //   key: 1,
    //   source: {uri: props.images[0]}
    // }) ;
    let parent, child;
    for (let i = 0; i <= this.props.images[this.props.order]; i++) {
      if (i === this.props.images[this.props.order].length) {
        child = React.createElement(Sketch, {
          fillColor: 'transparent',
          strokeColor: '#000',
          strokeThickness: 15,
          imageType: 'png',
          onUpdate: this.onUpdate,
          clearButtonHidden: true,
          ref: (sketch) => { this.sketch = sketch; },
          style: {height: this.props.height, width: this.props.width, zIndex: 1000}
        });
      }
      parent = React.createElement(Image, {
        // height: this.props.height,
        // width: this.props.width,
        style: {height: this.props.height, width: this.props.width},
        key: i,
        source: {uri: this.props.images[i] || 'data:null'}
      }, child || null);
      child = parent;
    }
    const element = parent || React.createElement(View, {style: {height: this.props.height, width: this.props.width}});
    console.log('element', element);
    return element;
  }
  render() {
    return this.props.order ? this.nestImages() : null;

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    team: state.games.selectedTeam,
    inning: state.frames.currentInning,
    frames: state.frames,
    images: state.frames[state.games.selectedTeam][state.frames.currentInning]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LayeredImages);

        // !!props.images.length && props.images.map((image, i) => {
        //   return (
        //       <Image
        //         key={i}
        //         source={{uri: image}}
        //         style={{width: props.width, height: props.height, borderWidth: 1}}
        //       />
        //   );
        // })
