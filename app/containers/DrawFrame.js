import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

import FrameControl from '../components/FrameControl';
import Sketch from 'react-native-sketch';

let width = Dimensions.get('window').width;
let height = width * 4 / 3;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: width,
    height: height,
  }
});

class DrawFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.navigation.state.params.order,
      images: []
    };
    this.clear = this.clear.bind(this);
    // this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    // this.undo = this.undo.bind(this);
    // this.loadImage = this.loadImage.bind(this);
    this.nestImages = this.nestImages.bind(this);
  }

  componentWillUnmount() {
    this.props.addImage(
      this.state.images[this.state.images.length - 1],
      this.props.team,
      this.props.inning,
      this.state.order
    );
    this.sketch.clear();
  }

  clear() {
    this.sketch.clear();
    for (let i = 0; i < this.props.images[this.state.order].length; i++) {
      this.props.undoImage(this.props.team, this.props.inning, this.state.order);
    }
    this.setState({
      images: []
    });
  }

  /**
   * The Sketch component provides a 'saveImage' function (promise),
   * so that you can save the drawing in the device and get an object
   * once the promise is resolved, containing the path of the image.
   */
  // onSave() {
    // this.sketch.saveImage(this.state.images)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));
  // }

  // undo() {
  //   this.sketch.clear();
  //   this.props.undoImage(this.props.team, this.props.inning, this.state.order);
  // }

  // loadImage() {
  //   return this.props.images[this.state.order][this.props.images[this.state.order].length - 1];
  // }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    this.setState({
      images: [...this.state.images, base64Image]
    });
  }

  nestImages() {
    const
      order = this.state.order,
      images = this.props.images[order];
    let
      parent,
      child = React.createElement(Sketch, {
        fillColor: 'transparent',
        strokeColor: '#000',
        strokeThickness: 15,
        imageType: 'png',
        onUpdate: this.onUpdate,
        clearButtonHidden: true,
        ref: (sketch) => { this.sketch = sketch; },
        style: styles.image
      });
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

  render() {
    return (
      <View style={styles.container}>
        <View style={{borderWidth: 2}}>
          {
            this.nestImages()
          }
        </View>
        <FrameControl
          undo={this.undo}
          clear={this.clear}
          onSave={this.onSave}
          images={this.props.images[this.state.order].length > 0}
        />
      </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawFrame);
