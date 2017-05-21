import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';
import HomeContainer from './HomeContainer';
import ScorecardContainer from './ScorecardContainer';

import {
  Text,
  StyleSheet,
  View
} from 'react-native';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
      <HomeContainer navigation={this.props.navigation} />
    );
  }
}

const App = StackNavigator({
  Home: { screen: AppContainer },
  Scorecard: { screen: ScorecardContainer }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
