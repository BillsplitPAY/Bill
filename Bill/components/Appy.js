import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

//import { Provider } from 'react-redux';
//import { connect } from 'react-redux';
//import store from './store.js';
import Menu from './menu.js';


export default class Appy extends React.Component {
  render() {
    return (
      //<Provider store={store}>
        <View style={styles.container}>
        <ScrollView>
          <Menu />
          </ScrollView>
          </View>
      //</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'column',
    backgroundColor: 'grey',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    height: 'auto',
    //width: 'auto',
  },
});
