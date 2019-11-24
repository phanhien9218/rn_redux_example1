/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import CounterContainer from './containers/CounterContainer';
import {name as appName} from './app.json';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

let store = createStore(allReducers);
const App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
