import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View, TouchableHighlight, Image, Dimensions } from 'react-native';

import LayeredImages from '../components/LayeredImages';

class FramesContainer extends Component {
  constructor(props) {
    super(props);
    this.nestImages = this.nestImages.bind(this);
  }
            // <LayeredImages
            //   images={[]}
            //   order={i}
            //   team={this.props.selectedTeam}
            // />
  nestImages(order) {
    const
      images = this.props.images[order];
    let
      parent,
      child;
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

            // <Image source={require('../../frame.png')} style={{width, height, borderWidth: 1}}>
            //   <LayeredImages images={imageArray} width={width} height={height} />
            // </Image>
  render() {
    const { navigate } = this.props.navigation;
    const frames = [];
    for (let i = 1; i <= 9; i++) {
      frames.push(
        <TouchableHighlight key={i} onPress={() => navigate('Frame', { order: i})}>
          <View >
            {
              this.nestImages(i)
            }
          </View>
        </TouchableHighlight>
      );
    }
              // <Image source={{ uri: image}} style={{width, height, borderWidth: 1}} />

    return (
      <View style={styles.container}>
        {frames}
      </View>
    );
  }
}

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    // homeRoster: state.games.homeRoster,
    // awayRoster: state.games.awayRoster,
    // team: state.games.selectedTeam,
    // inning: state.frames.currentInning,
    // homeBatters: state.players.home,
    // awayBatters: state.players.away,
    // frames: state.frames,
    images: state.frames[state.games.selectedTeam][state.frames.currentInning]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FramesContainer);
