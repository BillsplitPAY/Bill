import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Font } from 'expo';
//import thunk from 'thunk';
import MainNav from './src/navs/mainNav'

import reducers from './src/reducers';
//import MainNavTest, { FullStackNav } from './navs/mainNavTest';

export default class App extends React.Component {
  render(){
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    console.disableYellowBox = true;

    return(
          <SafeAreaView style={{ flex: 1, backgroundColor: '#212121'}}>
            <Provider store={createStoreWithMiddleware(reducers)}>
              <MainNav />
            </Provider>
          </SafeAreaView>
    )
  }
}
