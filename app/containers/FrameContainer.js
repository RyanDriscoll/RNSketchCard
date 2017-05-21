import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import {
  StyleSheet,
  View
} from 'react-native';

import LayeredImages from '../components/LayeredImages';
import FrameControl from '../components/FrameControl';
import Sketch from 'react-native-sketch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
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

class FrameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      erase: false
    };
    this.clear = this.clear.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.undo = this.undo.bind(this);
    this.toggleDrawErase = this.toggleDrawErase.bind(this);
  }

  /**
   * Clear / reset the drawing
   */
  clear() {
    for (let i = 0; i < this.props.images.length; i++) {
      this.props.undoImage();
    }
  }

  /**
   * Do extra things after the sketch reset
   */
  onReset() {
    console.log('The drawing has been cleared!');
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
    this.props.undoImage();
  }

  toggleDrawErase() {
    this.setState({erase: !this.state.erase});
  }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    this.props.addImage(base64Image);
    this.sketch.clear();
  }

  render() {
    return (
      <View style={styles.container}>
        <LayeredImages
          images={this.props.images}
        />
        <Sketch
          fillColor="transparent"
          strokeColor={this.state.erase ? '#FFF' : '#000'}
          strokeThickness={this.state.erase ? 20 : 10}
          imageType="png"
          onReset={this.onReset}
          onUpdate={this.onUpdate}
          clearButtonHidden={true}
          ref={(sketch) => { this.sketch = sketch; }}
          style={styles.imageContainer}
        />
        <FrameControl
          undo={this.undo}
          clear={this.clear}
          onSave={this.onSave}
          toggleDrawErase={this.toggleDrawErase}
          erase={this.state.erase}
          images={this.props.images.length > 0}
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
    images: state.default.images
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameContainer);
