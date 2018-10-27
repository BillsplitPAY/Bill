import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MainNav from './navs/mainNav'
import reducers from './src/reducers';
import MainNavTest, { FullStackNav } from './navs/mainNavTest'

export default class App1 extends React.Component {
  render(){
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
    console.disableYellowBox = true;

    return(
            /*The Redux store is created with ReduxPromise middleware built in, and applied to
            MainNav*/
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
