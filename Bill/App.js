import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Font, AuthSession } from 'expo';
// import * as AppAuth from 'expo-app-auth';
//import thunk from 'thunk';
import MainNav from './src/navs/mainNav'
import reducers from './src/reducers';

//import MainNavTest, { FullStackNav } from './navs/mainNavTest';

// const clientID = "1057864138139-ecso9tk4gbhd8nt97edkifg7lcf1kuog.apps.googleusercontent.com"





export default class App extends React.Component {


  render(){
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    console.disableYellowBox = true;

    // const config = {
    //   issuer: 'https://accounts.google.com',
    //   iosClientId: '1057864138139-nb3k9ktr8lphirs574lhf98q6hb91c3q.apps.googleusercontent.com',
    //   scopes: ['profile'],
    // };
    //
    // const tokenResponse = async () => await Expo.Google.logInAsync(config);

    return(
          <SafeAreaView style={{ flex: 1, backgroundColor: '#212121'}}>
            <Provider store={createStoreWithMiddleware(reducers)}>
              <MainNav />
            </Provider>
          </SafeAreaView>
    )
  }
}

// <Button title='Login' onPress={tokenResponse()}>Login</Button>
