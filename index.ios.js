import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './app/containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware
  )
);

const store = createStore(reducer, enhancer);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('RNSketchCard', () => App);

