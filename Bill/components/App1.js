import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Nav from './nav'
import MainNav from './mainNav'

import ReduxPromise from 'redux-promise'
import reducers from '../src/reducers';


export default class App1 extends React.Component {
  render(){
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)



    return(
            <Provider store={createStoreWithMiddleware(reducers)}>
              <MainNav />
            </Provider>
    )
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  userName: {
    color: '#252326',
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20
  }

})
