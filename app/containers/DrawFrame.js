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


class DrawFrame extends React.Component {

  constructor(props) {
    super(props);

    this.clear = this.clear.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.undo = this.undo.bind(this);
    this.loadImage = this.loadImage.bind(this);
  }

  /**
   * Clear / reset the drawing
   */
  clear() {
    this.sketch.clear();
    for (let i = 0; i < this.props.images.length; i++) {
      this.props.undoImage();
    }
  }

  /**
   * The Sketch component provides a 'saveImage' function (promise),
   * so that you can save the drawing in the device and get an object
   * once the promise is resolved, containing the path of the image.
   */
  onSave() {
    this.sketch.saveImage(this.state.images)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  undo() {
    this.sketch.clear();
    this.props.undoImage();
  }

  loadImage() {
    return this.props.images[this.props.images.length - 1];
  }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    const order = this.props.navigation.state.params.order;
    this.props.addImage(base64Image, this.props.team, 1, order);
    if (this.props.images.length > 4) {
      this.props.garbageCollectImage();
    }
  }

  render() {
    let image = this.loadImage();
    return (
      <View style={styles.container}>
        <View style={{borderWidth: 2}}>
          <Image source={require('../../frame.png')} style={styles.image}>
            <Image source={{ uri: image}} style={styles.image}>
              <Sketch
                fillColor="transparent"
                strokeColor={'#000'}
                strokeThickness={15}
                imageType="png"
                onUpdate={this.onUpdate}
                clearButtonHidden={true}
                ref={(sketch) => { this.sketch = sketch; }}
                style={styles.image}
              />
            </Image>
          </Image>
        </View>
        <FrameControl
          undo={this.undo}
          clear={this.clear}
          onSave={this.onSave}
          images={this.props.images.length > 0}
        />
      </View>
    );
  }
}

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    images: state.frames.images,
    team: state.games.selectedTeam
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawFrame);
